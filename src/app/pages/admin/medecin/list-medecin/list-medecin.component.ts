import { MedecinService } from './../../../../services/medecin/medecin.service';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.scss']
})
export class ListMedecinComponent implements OnInit {

  liste_medecin: Medecin[] | any;
  medecin: Medecin | any;
  constructor( public crudApiMedecin: MedecinService ) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.liste_medecin);
    
  }

  showMedecin(id: number): void {
    this.crudApiMedecin.getData(id).subscribe((data) => {
      this.medecin = data;
    });
    this.ngOnInit();
  }
  getData(): void{
    this.crudApiMedecin.getAll().toPromise<Medecin>().then((data)=>{
      this.liste_medecin = data;
    });
  }
}
