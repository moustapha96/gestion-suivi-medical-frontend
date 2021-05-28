import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Patient } from 'src/app/modeles/patient/patient';
import { RendezVous } from 'src/app/modeles/rendezVous/rendez-vous';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';
import { ShowMedecinComponent } from '../../medecin/show-medecin/show-medecin.component';
import { ShowPatientComponent } from '../../patient/show-patient/show-patient.component';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrls: ['./list-rendez-vous.component.scss'],
})
export class ListRendezVousComponent implements OnInit {
  liste_rv: RendezVous[] | any;
  patient: Patient | any;
  medecin: Medecin | any;
  listRV: RendezVous[] | any;
  constructor(
    public crudApiRV: RendezVousService,
    public crudApiM: MedecinService,
    public crudApiP: PatientService,
    public sRV: RendezVousService,
    private matDialog: MatDialog,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.crudApiRV
      .getAll()
      .toPromise<RendezVous>()
      .then((data) => {
        this.liste_rv = data;
      });
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

    if (this.medecin != null) {
      this.matDialog.open(ShowMedecinComponent, {
        disableClose: true,
        autoFocus: true,
        width: '60%',
        data: this.medecin,
      });
    }
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
}
