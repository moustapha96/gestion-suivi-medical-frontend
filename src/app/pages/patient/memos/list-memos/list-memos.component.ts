import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Memos } from 'src/app/modeles/memos/memos';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { MomosService } from 'src/app/services/memos/momos.service';
import { ShowMedecinComponent } from '../../medecin/show-medecin/show-medecin.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { ShowMemosComponent } from '../show-memos/show-memos.component';
@Component({
  selector: 'app-list-memos',
  templateUrl: './list-memos.component.html',
  styleUrls: ['./list-memos.component.scss'],
})
export class ListMemosComponent implements OnInit {
  listMemo: Memos[] | any;
  medecin: Medecin | any;
  memo : Memos | any;
  constructor(
    public sMemos: MomosService,
    public sMedecin: MedecinService,
    private matDialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.sMemos
      .getAll()
      .toPromise<Memos>()
      .then((data) => {
        this.listMemo = data;
      });
  }

  showMedecin(id: number): void {
    this.sMedecin.getData(id).subscribe((data) => {
      this.medecin = data;
    });

    if (this.medecin != null) {
      this.matDialog.open(ShowMedecinComponent, {
        disableClose: true,
        autoFocus: true,
        width: '60%',
        data: this.medecin,
      });
    }
  }

  ShowMemo(id: number): void {
    this.sMemos.getData(id).subscribe((data) => {
      this.memo = data;
    });

    if (this.memo != null) {
      this.matDialog.open(ShowMemosComponent, {
        disableClose: true,
        autoFocus: true,
        width: '60%',
        data: this.memo,
      });
    }
  }
}
