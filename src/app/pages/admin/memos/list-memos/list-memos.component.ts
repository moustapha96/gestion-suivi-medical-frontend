import { MomosService } from './../../../../services/memos/momos.service';
import { Component, OnInit } from '@angular/core';
import { Memos } from 'src/app/modeles/memos/memos';

@Component({
  selector: 'app-list-memos',
  templateUrl: './list-memos.component.html',
  styleUrls: ['./list-memos.component.scss']
})
export class ListMemosComponent implements OnInit {

  listMemo: Memos[] | any;
  liste_memos: Memos | any;
  constructor( public crudApiMemos: MomosService ) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.liste_memos);
    this.crudApiMemos
      .getAll()
      .toPromise<Memos>()
      .then((data) => {
        this.listMemo = data;
      });
  }

  getData(): void{
    this.crudApiMemos.getAll().toPromise<Memos>().then((data)=>{
      this.liste_memos = data;
    });
  }

}
