import { ToastrService } from 'ngx-toastr';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Patient } from 'src/app/modeles/patient/patient';
import { DossierMedicalService } from 'src/app/services/dossierMedical/dossier-medical.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { RendezVous } from 'src/app/modeles/rendezVous/rendez-vous';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';
import { ShowPatientComponent } from '../../patient/show-patient/show-patient.component';
import { ShowMedecinComponent } from '../show-medecin/show-medecin.component';


@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.scss'],
})
export class ListMedecinComponent implements OnInit {
  patient: Patient | any;
  listMedecin: Medecin[] | any;
  medecin: Medecin | any;
  listRV: RendezVous[] | any;
  constructor(
    public crudApiM: MedecinService,
    public crudApiP: PatientService,
    public sRV: RendezVousService,
    private matDialog: MatDialog,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.crudApiM
    .getAll()
    .toPromise<Medecin>()
    .then((data) => {
      this.listMedecin = data;
    });
  }

  onShowPatient(id: number): void {
    console.log(id);
    this.crudApiP.getData(id).subscribe((data) => {
      this.patient = data;
      console.log(this.patient);
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

    this.ngOnInit();
  }

  showMedecin(id: number): void {
    console.log(id);

    this.crudApiM
      .getData(id)
      .toPromise<Medecin>()
      .then(
        (data) => {
          this.medecin = data;
          console.log(data);
        },
        (err) => {
          console.log(err);
          this.toastr.warning('erreur ' + err);
        }
      );

    this.sRV
      .getRvMedecin(id)
      .toPromise<Medecin>()
      .then(
        (data) => {
          this.listRV = data;
        },
        (err) => {
          this.toastr.warning('erreur ' + err);
        }
      );
    this.ngOnInit();
  }
  showMedecinD(id: number): void{
    this.crudApiM.getData(id).subscribe((data) => {
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
  }

}
