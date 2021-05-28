import { Patient } from 'src/app/modeles/patient/patient';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss'],
})
export class ListPatientComponent implements OnInit {
  liste_patient: Patient[] | any;
  patient: Patient | any;
  constructor(public crudApiP: PatientService) {}

  ngOnInit(): void {
    this.getData();
    console.log(this.liste_patient);
  }

  onShowPatient(id: number): void {
    console.log(id);
    this.crudApiP.getData(id).subscribe((data) => {
      this.patient = data;
    });
  }

  getData(): void {
    this.crudApiP
      .getAll()
      .toPromise<Patient>()
      .then((data) => {
        this.liste_patient = data;
      });
  }
}
