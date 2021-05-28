import { Assistant } from './../../../modeles/assistant/assistant';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/modeles/user/user';
import { AssistantService } from 'src/app/services/assistant/assistant.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  user: User | any;
  assistant: Assistant | any;
  assistantUpdate: Assistant | any;
  email: string | any;

  formAssistant: FormGroup | any;
  currentAssiatnt: Assistant | any;
  constructor(
    public fb: FormBuilder,
    public sAssistant: AssistantService,
    public sUser: UserService,
    public toastr: ToastrService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiAssistant: AssistantService,
    public crudApiUser: UserService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.sAssistant
      .getAssistantByEmail(this.email)
      .toPromise<Assistant>()
      .then((data) => {
        this.assistant = data;
        console.log(this.assistant);
      });

    this.initForm();
  }

  initForm(): void {
    this.formAssistant = this.fb.group({
      nom: [this.assistant.nom, [Validators.required]],
      prenom: [this.assistant.prenom, [Validators.required]],
      age: [this.assistant.age, [Validators.required]],
      adresse: [this.assistant.adresse, [Validators.required]],
      email: [this.assistant.email, [Validators.required]],
      password: [this.assistant.password, [Validators.required]],
      genre: [this.assistant.genre, [Validators.required]],
      tel: [this.assistant.tel, [Validators.required]],
      oldPassword: [this.assistant.password, [Validators.required]],
      newPassword: ['', [Validators.required]],
      ConfiPassword: ['', [Validators.required]],
    });
  }

  ResetForm(): void {
    this.formAssistant.reset();
  }

  onSubmit(): void {
    const val = this.formAssistant.value;
    this.user = {
      role: 'assistant',
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

    const val = this.formAssistant.value;
    this.crudApiUser
      .updatedata(this.assistant.user.id, this.user)
      .toPromise<User>()
      .then((datau) => {
        console.log(datau);
        this.assistantUpdate = {
          nom: val.nom,
          prenom: val.prenom,
          age: val.age,
          adresse: val.adresse,
          genre: val.genre,
          tel: val.tel,
        };
        console.log(this.assistant);

        this.toastr.success('Profil mise à jour !');
        this.sAssistant
          .updatedata(this.assistant.id, this.assistantUpdate)
          .toPromise<Assistant>()
          .then((datap) => {
            console.log('resultat assistant created ' + datap);
            this.toastr.success('assistant mise en jour !');
          });
        this.router.navigate(['assistant/profil']);
      });
  }
}
