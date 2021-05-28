import { NotificationService } from './../../../../services/notification/notification.service';
import { ToastrService } from 'ngx-toastr';
import { DemandeRv } from './../../../../modeles/demandeRv/demande-rv';
import { Medecin } from './../../../../modeles/medecin/medecin';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Patient } from 'src/app/modeles/patient/patient';
import { RendezVous } from 'src/app/modeles/rendezVous/rendez-vous';
import { User } from 'src/app/modeles/user/user';
import { PatientService } from 'src/app/services/patient/patient.service';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';
import { UserService } from 'src/app/services/user/user.service';
import { ShowMedecinComponent } from '../../medecin/show-medecin/show-medecin.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DemandeRvService } from 'src/app/services/demandeRv/demande-rv.service';
import { Router } from '@angular/router';
import { Notification } from 'src/app/modeles/notification/notification';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrls: ['./list-rendez-vous.component.scss'],
})
export class ListRendezVousComponent implements OnInit  {

  user: User | any;
  patient: Patient | any;
  email: string | any;
  listeRV: RendezVous[] | any;
  listeMd: Medecin[] | any;
  formMedecin: FormGroup | any;
  demandeRv: DemandeRv | any;
  medecin: Medecin | any;

  listnotification: Notification | any;
  listDemandeRv: DemandeRv | any;

  constructor(
    public sPatient: PatientService,
    public toastr: ToastrService,
    public sUser: UserService,
    public router: Router,
    public sRendezVous: RendezVousService,
    private matDialog: MatDialog,
    public sMedecin: MedecinService,
    public sDemandeRv: DemandeRvService,
    public fb: FormBuilder,
    public sNotifi: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ShowMedecinComponent>
  ) {}

  ngOnInit(): void {
    this.formMedecin = this.fb.group({
      medecin: null,
    });


    this.sDemandeRv
      .getAll()
      .toPromise<DemandeRv>()
      .then((data) => {
        this.listDemandeRv = data;
        console.log(this.listDemandeRv);
      });
    this.email = localStorage.getItem('email');

    this.sMedecin
      .getAll()
      .toPromise<Medecin>()
      .then((data) => {
        this.listeMd = data;
      });

    this.sPatient
      .getPatientByEmail(this.email)
      .toPromise<Patient>()
      .then((data) => {
        this.patient = data;
        console.log(this.patient);
        this.getListeRV();
      });

    // this.sRendezVous
    //   .getAll()
    //   .toPromise<RendezVous>()
    //   .then((data) => {
    //     this.listeRV = data;
    //     this.listeRV.forEach((element: RendezVous) => {
    //       if (element.patient.id === this.patient.id) {
    //         console.log('patient');
    //         console.log(this.patient);
    //       }
    //     });
    //   });
  }
  getListeRV(): void{
    this.sRendezVous
    .getRvPatient(this.patient.id)
    .toPromise<RendezVous>()
    .then((data) => {
      this.listeRV = data;
      console.log(data);
    });
  }

  showMedecin(id: number): void {
    this.sMedecin.getData(id).subscribe((data) => {
      this.medecin = data;
    });

    if (this.medecin != null) {
      this.matDialog.open(ShowMedecinComponent, {
        disableClose: true,
        autoFocus: true,
        width: '60%',
        data: this.medecin,
      });
    }
    this.ngOnInit();
  }

  onSelectMedecin(event: any): void {
    this.sMedecin.getData(event.value).subscribe((data) => {
      this.medecin = data;
    });
    this.ngOnInit();
    console.log(event.value);
  }

  onSubmit(): void {
    const val = this.formMedecin.value;

    this.demandeRv = {
      medecin: this.medecin,
      patient: this.patient,
      date_demande: new Date(),
    };

    if (this.demandeRv.medecin != null) {
      this.sDemandeRv.createData(this.demandeRv).subscribe(
        (response) => {
          this.toastr.success('Demande bien envoyée !!');
        },
        (err) => {
          this.toastr.error(err.message);
        }
      );
    }
    this.ngOnInit();
  }

  delete_demande(id: number): void {
    this.sDemandeRv.deleteData(id).subscribe(
      (response) => {
        this.toastr.success('Suppression demande RV réussie !!');
      },
      (err) => {
        this.toastr.error(err.message);
      }
    );
    this.ngOnInit();
  }
}
