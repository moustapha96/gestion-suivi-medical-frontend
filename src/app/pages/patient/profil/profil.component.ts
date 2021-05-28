import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../../modeles/user/user';
import { Component, Inject, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient/patient.service';
import { UserService } from 'src/app/services/user/user.service';
import { Patient } from 'src/app/modeles/patient/patient';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  user: User | any;
  patient: Patient | any;
  patientUpdate: Patient | any;
  email: string | any;

  formPatient: FormGroup | any;
  currentPatient: Patient | any;
  formUser: FormGroup | any;
  constructor(
    public fb: FormBuilder,
    public sPatient: PatientService,
    public sUser: UserService,
    public toastr: ToastrService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiPatient: PatientService,
    public crudApiUser: UserService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.sPatient
      .getPatientByEmail(this.email)
      .toPromise<Patient>()
      .then((data) => {
        this.patient = data;
        console.log(this.patient);
      });

    this.initForm();
  }

  initForm(): void {
    this.formPatient = this.fb.group({
      nom: [this.patient.nom, [Validators.required]],
      prenom: [this.patient.prenom, [Validators.required]],
      age: [this.patient.age, [Validators.required]],
      taille: [this.patient.taille, [Validators.required]],
      adresse: [this.patient.adresse, [Validators.required]],
      statut_social: [this.patient.statut_social, [Validators.required]],
      genre: [this.patient.genre, [Validators.required]],
      tel: [this.patient.tel, [Validators.required]],
      profession: [this.patient.profession, [Validators.required]],
    });
    this.formPatient = this.fb.group({
      email: [this.patient.email, [Validators.required]],
      password: [this.patient.password, [Validators.required]],
      oldPassword: [this.patient.password, [Validators.required]],
      newPassword: ['', [Validators.required]],
      ConfiPassword: ['', [Validators.required]],
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
    if (val.newPassword === val.ConfiPassword) {
      this.addData();
    } else {
      this.toastr.warning('Vérifier votre de passe ...');
    }
  }
  addData(): void {
    console.log('add data ... ');

    const val = this.formPatient.value;
    this.crudApiUser
      .updatedata(this.patient.user.id, this.user)
      .toPromise<User>()
      .then((data_u) => {
        console.log(data_u);
        this.patientUpdate = {
          nom: val.nom,
          prenom: val.prenom,
          age: val.age,
          taille: val.taille,
          adresse: val.adresse,
          statut_social: val.statut_social,
          genre: val.genre,
          tel: val.tel,
          profession: val.profession,
        };
        console.log(this.patient);
        // this.toastr.success('Profil mise a jour !!');
        this.crudApiPatient
          .updatedata(this.patient.id, this.patientUpdate)
          .toPromise<Patient>()
          .then((data_p) => {
            this.toastr.success('patient mise en jour !');
          });
        this.router.navigate(['patient/profil']);
      });
  }
}
