import { Assistant } from './../../../../modeles/assistant/assistant';
import { Component, OnInit } from '@angular/core';
import { AssistantService } from 'src/app/services/assistant/assistant.service';

@Component({
  selector: 'app-list-assistant',
  templateUrl: './list-assistant.component.html',
  styleUrls: ['./list-assistant.component.scss']
})
export class ListAssistantComponent implements OnInit {

  liste_assistant: Assistant[] | any;
  assistant: Assistant | any;
  constructor(public crudApiP: AssistantService) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.liste_assistant);
  }

  showAssistant(id: number): void {
    this.crudApiP.getData(id).subscribe((data) => {
      this.assistant = data;
    });
    this.ngOnInit();
  }
  getData(): void {
    this.crudApiP.getAll().toPromise<Assistant>().then((data) => {
      this.liste_assistant = data;
    });
  }

}
