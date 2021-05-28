import { Patient } from 'src/app/modeles/patient/patient';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
import { DossierMedicalService } from './../../../../services/dossierMedical/dossier-medical.service';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.scss'],
})
export class ShowPatientComponent implements OnInit {
  // dms: DossierMedical[] | any;

  dm: DossierMedical | any;
  patient: Patient | any;
  id: number | any;
  constructor(
    public sDms: DossierMedicalService,
    public dialogRef: MatDialogRef<ShowPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    private route: ActivatedRoute,
    public sPatient: PatientService
  ) {}

  ngOnInit(): void {
    this.patient = this.data;
    // this.sDms
    //   .getAll()
    //   .toPromise<DossierMedical>()
    //   .then((data) => {
    //     this.dms = data;
    //     console.log(this.dms);
    //   });

    this.id = this.route.snapshot.paramMap.get('id');
    this.sPatient
      .getData(this.id)
      .toPromise<Patient>()
      .then((data) => {
        this.patient = data;
        this.getDm();
      });
  }
  getDm(): void {
    this.sDms
      .getDmPatient(this.patient.id)
      .toPromise<DossierMedical>()
      .then((data) => {
        this.dm = data;
      });
  }
  close(): void {
    this.dialogRef.close();
  }
}
