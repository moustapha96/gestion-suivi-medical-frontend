import { AssistantService } from './../../../../services/assistant/assistant.service';
import { Assistant } from './../../../../modeles/assistant/assistant';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { MedecinService } from 'src/app/services/medecin/medecin.service';

@Component({
  selector: 'app-list-assistant',
  templateUrl: './list-assistant.component.html',
  styleUrls: ['./list-assistant.component.scss'],
})
export class ListAssistantComponent implements OnInit {
  listeAssistant: Assistant[] | any;
  assistant: Assistant | any;
  medecin: Medecin | any;
  email: string | any;
  constructor(public crudApiP: AssistantService, public sMedecin: MedecinService) {}

  ngOnInit(): void {
    this.getData();
    console.log(this.listeAssistant);

    this.email = localStorage.getItem('email');

    this.sMedecin
      .getmedecinByEmail(this.email)
      .toPromise<Medecin>()
      .then((data) => {
        this.medecin = data;
        console.log(this.medecin);
      });

  }

  onShowAssistant(id: number): void {
    console.log(id);
    this.crudApiP.getData(id).subscribe((data) => {
      this.assistant = data;
    });
  }

  getData(): void {
    this.crudApiP
      .getAll()
      .toPromise<Assistant>()
      .then((data) => {
        this.listeAssistant = data;
      });
  }
}
