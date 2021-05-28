import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { User } from 'src/app/modeles/user/user';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  user: User | any;
  medecin: Medecin | any;
  medecinUpdate: Medecin | any;
  email: string | any;

  formmedecin: FormGroup | any;
  currentmedecin: Medecin | any;
  constructor(
    public fb: FormBuilder,
    public smedecin: MedecinService,
    public sUser: UserService,
    public toastr: ToastrService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiUser: UserService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.smedecin
      .getmedecinByEmail(this.email)
      .toPromise<Medecin>()
      .then((data) => {
        this.medecin = data;
        console.log(this.medecin);
      });

    this.initForm();
  }

  initForm(): void {
    this.formmedecin = this.fb.group({
      nom: [this.medecin.nom, [Validators.required]],
      prenom: [this.medecin.prenom, [Validators.required]],
      age: [this.medecin.age, [Validators.required]],
      taille: [this.medecin.taille, [Validators.required]],
      adresse: [this.medecin.adresse, [Validators.required]],
      email: [this.medecin.email, [Validators.required]],
      password: [this.medecin.password, [Validators.required]],
      num_licence: [this.medecin.num_licence, [Validators.required]],
      specialisation: [this.medecin.specialisation, [Validators.required]],
      genre: [this.medecin.genre, [Validators.required]],
      tel: [this.medecin.tel, [Validators.required]],
      initial: [this.medecin.initial, [Validators.required]],
      oldPassword: [this.medecin.password, [Validators.required]],
      newPassword: ['', [Validators.required]],
      ConfiPassword: ['', [Validators.required]],
    });
  }

  ResetForm(): void {
    this.formmedecin.reset();
  }

  onSubmit(): void {
    const val = this.formmedecin.value;
    this.user = {
      role: 'medecin',
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

    const val = this.formmedecin.value;
    this.crudApiUser
      .updatedata(this.medecin.user.id, this.user)
      .toPromise<User>()
      .then((datau) => {
        console.log(datau);
        this.medecinUpdate = {
          nom: val.nom,
          prenom: val.prenom,
          age: val.age,
          taille: val.taille,
          adresse: val.adresse,
          initial: val.initial,
          genre: val.genre,
          tel: val.tel,
          specialisation: val.specialisation,
          num_licence: val.num_licence,
        };
        console.log(this.medecin);

        this.toastr.success('Inscription User Réussi !');
        this.smedecin
          .updatedata(this.medecin.idMedecin, this.medecinUpdate)
          .toPromise<Medecin>()
          .then((datap) => {
            console.log('resultat medecin created ' + datap);
            this.toastr.success('medecin mise en jour !');
          });
        this.router.navigate(['medecin/profil']);
      });
  }
}
