import { ServiceMedicalService } from './../../../../services/servicemMedical/service-medical.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { ServiceMedical } from 'src/app/modeles/servceMedical/service-medical';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { User } from 'src/app/modeles/user/user';
import { MedecinService } from 'src/app/services/medecin/medecin.service';

@Component({
  selector: 'app-list-service-medical',
  templateUrl: './list-service-medical.component.html',
  styleUrls: ['./list-service-medical.component.scss'],
})
export class ListServiceMedicalComponent implements OnInit {
  formSM: FormGroup | any;
  list_sm: ServiceMedical[] | any;
  sm: ServiceMedical | any;
  nom = '';
  constructor(
    public crudApiSM: ServiceMedicalService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiMedecin: MedecinService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  initForm(): void {
    this.formSM = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.nom);

    this.sm = {
      nom: this.nom,
    };

    if (this.nom != '') {
      this.addData();
      this.nom = '';
    } else {
      this.toastr.warning('Vérifier le nom du Service  ...');
    }
  }

  addData(): void {
    this.crudApiSM
      .createData(this.sm)
      .toPromise<ServiceMedical>()
      .then((data_u) => {
        console.log(data_u);
        this.toastr.success('Service Médical Enregistrer avec succée !');
      });
  }

  getData() {
    this.crudApiSM
      .getAll()
      .toPromise<ServiceMedical>()
      .then((data) => {
        this.list_sm = data;
      });
  }

  removeData(id: number) {
    if (window.confirm('êtes-vous sure de bien Vouloir supprimr ce SM ?')) {
      this.crudApiSM.deleteData(id).subscribe(
        (data) => {
          console.log(data);
          this.toastr.success('Service Médical supprimer avec succée !');
          this.getData();
        },
        (error) => console.log(error)
      );
    }
  }
}
