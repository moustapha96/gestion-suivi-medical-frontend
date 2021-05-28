import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Patient } from 'src/app/modeles/patient/patient';
import { RendezVous } from './../../../../modeles/rendezVous/rendez-vous';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';
import { Component, OnInit } from '@angular/core';
import { DemandeRv } from 'src/app/modeles/demandeRv/demande-rv';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Notification } from 'src/app/modeles/notification/notification';
import { User } from 'src/app/modeles/user/user';
import { DemandeRvService } from 'src/app/services/demandeRv/demande-rv.service';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowPatientComponent } from '../../patient/show-patient/show-patient.component';
import { AcceptationRendezVousComponent } from '../acceptation-rendez-vous/acceptation-rendez-vous.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrls: ['./list-rendez-vous.component.scss'],
})
export class ListRendezVousComponent implements OnInit {
  listeDemande: DemandeRv[] | any;

  patient: Patient | any;
  user: User | any;
  medecin: Medecin | any;
  email: string | any;

  listnotification: Notification | any;
  listDemandeRv: DemandeRv | any;

  listRendezVous: RendezVous | any;
  constructor(
    public sPatient: PatientService,
    public sNotifi: NotificationService,
    public sRendezVous: RendezVousService,
    public sDemandeRv: DemandeRvService,
    public sMedeccin: MedecinService,
    public sUser: UserService,
    private matDialog: MatDialog,
    public toastr: ToastrService,
    public router : Router
  ) {}

  ngOnInit(): void {
    this.sRendezVous
      .getAll()
      .toPromise<RendezVous>()
      .then((data) => {
        console.log(data);
        this.listRendezVous = data;
      });
    this.sDemandeRv
      .getAll()
      .toPromise<DemandeRv>()
      .then((data) => {
        console.log(data);
        this.listeDemande = data;
      });
    this.email = localStorage.getItem('email');
    this.sMedeccin
      .getmedecinByEmail(this.email)
      .toPromise<Medecin>()
      .then((data) => {
        this.medecin = data;
        console.log('medecin ');

        console.log(this.medecin);
      });
    this.sNotifi
      .getAll()
      .toPromise<Notification>()
      .then((data) => {
        console.log(data);
        this.listnotification = data;
      });
  }

  showPatient(id: number): void {
    this.sPatient.getData(id).subscribe((data) => {
      this.patient = data;
    });

    if (this.patient != null) {
      this.matDialog.open(ShowPatientComponent, {
        disableClose: true,
        autoFocus: true,
        width: '60%',
        data: this.patient,
      });
    }
    this.ngOnInit();
  }
  delete_demande(id: number): void {
    this.sDemandeRv.deleteData(id).subscribe((data: any) => {
      this.toastr.success('demande supprimé ');
    });
    this.ngOnInit();
  }

  fixerRv(id: number): void {
    this.sPatient.getData(id).subscribe((data) => {
      this.patient = data;
    });

    if (this.patient != null) {
      this.matDialog.open(AcceptationRendezVousComponent, {
        disableClose: true,
        autoFocus: true,
        width: '60%',
        data: this.patient,
      });
    }
    this.ngOnInit();
  }

  deleteRv(rv: number): void {
    this.sRendezVous.deleteData(rv).subscribe(
      (data) => {
        this.toastr.success('Rv supprimé avec success !!');
        this.ngOnInit();
      },
      (err) => {
        this.toastr.warning('error RV non supprimer ');
        this.ngOnInit();
      }
    );
  }
  deleteDemandeRv(rv: number): void {
    this.sDemandeRv.deleteData(rv).subscribe(
      (data) => {
        this.toastr.success('demande Rv supprimé avec success !!');
        this.ngOnInit();
      },
      (err) => {
        this.toastr.warning('demande  RV non supprimer ');
        this.ngOnInit();
      }
    );
  }
  goToDeatilPatient(id: number): void{
    this.router.navigate(['/show-patient', id]);
    this.ngOnInit();
  }
}
