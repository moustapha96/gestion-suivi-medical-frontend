import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { ServiceMedical } from 'src/app/modeles/servceMedical/service-medical';
import { User } from 'src/app/modeles/user/user';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { ServiceMedicalService } from 'src/app/services/servicemMedical/service-medical.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.scss']
})
export class AddMedecinComponent implements OnInit {

  age =0;
  taille=  0;
  service_medical : ServiceMedical[] | any;
  sm : ServiceMedical | any;

  formMedecin: FormGroup | any;
  user : User | any;
  medecin: Medecin | any;
   constructor(
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiMedecin: MedecinService,
    public crudApiUser: UserService, public crudApiSM : ServiceMedicalService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.crudApiSM.getAll().toPromise<ServiceMedical>().then((data) => {
        this.service_medical = data;
    });
  }
  initForm(): void {
    this.formMedecin = this.fb.group({
      adresse: ['', [Validators.required]],
      age: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      initial: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      num_licence: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      specialisation: ['', [Validators.required]],
      taille: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      pwdd: ['', [Validators.required]],
      serviceMedical_id: ['', [Validators.required]]
    });
  }

  ResetForm(): void {
    this.formMedecin.reset();
  }

  onSubmit(): void {
    const val = this.formMedecin.value;
    console.log(val);
    
    this.user = {
      role: 'medecin',
      email: val.email,
      password: val.password
    };
    if (val.password === val.pwdd) {
      this.addData();
    } else {
      this.toastr.warning('Vérifier votre de passe ...');
    }
  }

  addData(): void {
    console.log('add data ... ');

    const val = this.formMedecin.value;
    
    this.crudApiSM.getData(val.serviceMedical).toPromise<ServiceMedicalService>().then((data)=>{
        this.sm = data;
    });
    console.log("sm "+ this.sm);
    
    this.crudApiUser.createData(this.user.email,this.user.password,this.user.role).toPromise<User>().then((data_u) => {
        console.log(data_u );
        
        this.medecin = {
          nom: val.nom,
          prenom: val.prenom,
          age: val.age,
          taille: val.taille,
          adresse: val.adresse,
          genre: val.genre,
          tel: val.tel,
          initial: val.initial,
          num_licence: val.num_licence,
          specialisation: val.specialisation,
          user: data_u,
          serviceMedical : this.sm
        };
        console.log(this.medecin);
        
        this.toastr.success('Inscription User Réussi !');
        this.crudApiMedecin.createData(this.medecin).toPromise<Medecin>().then((data_p) => {
        
          console.log("medecin created " + data_p);
          this.toastr.success('Inscription medecin Réussi !');
        });
      this.router.navigate(['/admin/list-medecin']);

    });
     
  
  }

}
