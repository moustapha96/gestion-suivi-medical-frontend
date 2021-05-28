import { DossierMedicalService } from './../../../../services/dossierMedical/dossier-medical.service';
import { Component, OnInit } from '@angular/core';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';

@Component({
  selector: 'app-list-dossier-medical',
  templateUrl: './list-dossier-medical.component.html',
  styleUrls: ['./list-dossier-medical.component.scss']
})
export class ListDossierMedicalComponent implements OnInit {

  liste_dm: DossierMedical[] | any;
  constructor( public crudApiDM: DossierMedicalService ) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.liste_dm);
    
  }

  getData(): void{
    this.crudApiDM.getAll().toPromise<DossierMedical>().then((data)=>{
      this.liste_dm  = data;
    });
  }
}