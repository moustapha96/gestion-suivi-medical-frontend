import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
import { Patient } from 'src/app/modeles/patient/patient';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.scss']
})
export class ShowPatientComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShowPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient
  ) {}

  ngOnInit(): void {
  }
  close(): void{
    this.dialogRef.close();
  }

}
