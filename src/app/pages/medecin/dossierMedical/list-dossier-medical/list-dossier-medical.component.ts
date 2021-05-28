import { DossierMedicalService } from './../../../../services/dossierMedical/dossier-medical.service';
import { Component, OnInit } from '@angular/core';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';

@Component({
  selector: 'app-list-dossier-medical',
  templateUrl: './list-dossier-medical.component.html',
  styleUrls: ['./list-dossier-medical.component.scss']
})
export class ListDossierMedicalComponent implements OnInit {

  listeDM : DossierMedical[] | any;

  constructor(
    public sDM: DossierMedicalService,
  ) { }

  ngOnInit(): void {
    this.sDM.getAll().toPromise<DossierMedical>().then((res)=>{
      this.listeDM = res;
      console.log(res);
    });
  }

}
