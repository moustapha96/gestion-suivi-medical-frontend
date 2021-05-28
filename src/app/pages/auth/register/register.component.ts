import { User } from './../../../modeles/user/user';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from '../../../services/patient/patient.service';
import { UserService } from '../../../services/user/user.service';
import { Patient } from '../../../modeles/patient/patient';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  taille = 0;
  age = 0;
  formPatient: FormGroup | any;
  user: User | any;
  patient: Patient | any;
  currentPatient: Patient | any;
  constructor(
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiPatient: PatientService,
    public crudApiUser: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formPatient = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required]],
      taille: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      statut_social: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      pwdd: ['', [Validators.required]],
    });
  }

  ResetForm(): void {
    this.formPatient.reset();
  }

  onSubmit(): void {
    const val = this.formPatient.value;
    this.user = {
      role: 'patient',
      email: val.email,
      password: val.password,
    };
    if (val.password === val.pwdd) {
      this.addData();
    } else {
      this.toastr.warning('Vérifier votre de passe ...');
    }
  }

  addData(): void {
    console.log('add data ... ');

    const val = this.formPatient.value;

    this.crudApiUser
      .createData(this.user.email, this.user.password, this.user.role)
      .toPromise<User>()
      .then((data_u) => {
        console.log(data_u);

        this.patient = {
          nom: val.nom,
          prenom: val.prenom,
          age: val.age,
          taille: val.taille,
          adresse: val.adresse,
          statut_social: val.statut_social,
          genre: val.genre,
          tel: val.tel,
          profession: val.profession,
          user: data_u,
        };
        console.log(this.patient);

        this.toastr.success('Inscription User Réussi !');
        this.crudApiPatient
          .createData(this.patient)
          .toPromise<Patient>()
          .then((data_p) => {
            this.currentPatient = data_p;
            console.log('resultat patient created ' + data_p);
            this.toastr.success('Inscription patient Réussi !');
          });
        this.router.navigate(['/patient']);
      });
  }

  addDataPatient(): void {}
}
