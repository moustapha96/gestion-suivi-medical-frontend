import { DossierMedicalService } from './../../../../services/dossierMedical/dossier-medical.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/modeles/patient/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
import { MatDialog } from '@angular/material/dialog';
import { AddConsultationComponent } from '../../consultation/add-consultation/add-consultation.component';
import { Router } from '@angular/router';
import { AcceptationRendezVousComponent } from '../../rendezVous/acceptation-rendez-vous/acceptation-rendez-vous.component';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss'],
})
export class ListPatientComponent implements OnInit {
  liste_patient: Patient[] | any;

  dms: DossierMedical[] | any;
  patient: Patient | any;
  constructor(
    public crudApiP: PatientService,
    public sDms: DossierMedicalService,
    private matDialog: MatDialog,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.crudApiP
    .getAll()
    .toPromise<Patient>()
    .then((data) => {
      this.liste_patient = data;
    });

    console.log(this.liste_patient);

    this.sDms
      .getAll()
      .toPromise<DossierMedical>()
      .then((data) => {
        this.dms = data;
        console.log(this.dms);
      });
  }

  onShowPatient(id: number): void {
    console.log(id);
    this.crudApiP.getData(id).subscribe((data) => {
      this.patient = data;
    });
    this.ngOnInit();
  }

  addConsultation(id: number): void {
    this.crudApiP
      .getData(id)
      .toPromise<Patient>()
      .then((data) => {
        this.patient = data;
      });

    if (this.patient != null) {
      this.matDialog.open(AddConsultationComponent, {
        disableClose: true,
        autoFocus: true,
        width: '50%',
        data: this.patient,
      });
    }
    this.ngOnInit();
  }

  getData(): void {
    this.crudApiP
      .getAll()
      .toPromise<Patient>()
      .then((data) => {
        this.liste_patient = data;
      });
    this.ngOnInit();
  }
  goToDeatilPatient(id: number): void{
    this.router.navigate(['/show-patient', id]);
  }

  fixerRv(id: number): void {

    this.crudApiP.getData(id).subscribe((data) => {
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
}
