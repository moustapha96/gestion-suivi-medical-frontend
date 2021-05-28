import { MedecinService } from './../../../../services/medecin/medecin.service';
import { RendezVous } from './../../../../modeles/rendezVous/rendez-vous';
import { Patient } from './../../../../modeles/patient/patient';
import { Component, OnInit, Inject } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
  ShowOnDirtyErrorStateMatcher,
  ErrorStateMatcher,
} from '@angular/material/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acceptation-rendez-vous',
  templateUrl: './acceptation-rendez-vous.component.html',
  styleUrls: ['./acceptation-rendez-vous.component.scss'],
})
export class AcceptationRendezVousComponent implements OnInit {
  public selectedTime = '18:33';

  rendezVous: RendezVous[] | any;
  date = '';
  heure = '';
  medecin: Medecin | any;
  email: string | any;
  constructor(
    private formBuilder: FormBuilder,
    public sRv: RendezVousService,
    public dialogRef: MatDialogRef<AcceptationRendezVousComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    private atp: AmazingTimePickerService,
    public sMedeccin: MedecinService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.sMedeccin
      .getmedecinByEmail(this.email)
      .toPromise<Medecin>()
      .then((data) => {
        this.medecin = data;
        console.log('medecin ');

        console.log(this.medecin);
      });
  }

  open(): void {
    const amazingTimePicker = this.atp.open({
      onlyHour: true,
    });
    amazingTimePicker.afterClose().subscribe((time) => {
      this.selectedTime = time;
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    console.log('date' + this.date);
    console.log('heure' + this.heure);

    if (this.data != null) {
      this.rendezVous = {
        date_rv: this.date,
        heure: this.heure,
        patient: this.data,
        medecin: this.medecin,
      };

      this.sRv
        .createData(this.rendezVous)
        .toPromise<RendezVous>()
        .then(
          (res) => {
            this.toastr.success('rendez Vous fixer avec succés  ');
            this.ngOnInit();
            this.close();
          },
          (err) => {
            this.toastr.warning('échec , rendezVous non fixer');
          }
        );
    }
    this.ngOnInit();
  }
}
