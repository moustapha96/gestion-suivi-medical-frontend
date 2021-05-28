import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { AddMemosComponent } from './../add-memos/add-memos.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Memos } from 'src/app/modeles/memos/memos';
import { ShowMemosComponent } from 'src/app/pages/patient/memos/show-memos/show-memos.component';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { MomosService } from 'src/app/services/memos/momos.service';
import { User } from 'src/app/modeles/user/user';

@Component({
  selector: 'app-list-memos',
  templateUrl: './list-memos.component.html',
  styleUrls: ['./list-memos.component.scss'],
})
export class ListMemosComponent implements OnInit {
  listMemo: Memos[] | any;
  medecin: Medecin | any;
  memo: Memos | any;

  user: User | any;
  email: string | any;

  constructor(
    public sMemos: MomosService,
    public sMedecin: MedecinService,
    private matDialog: MatDialog,
    public sUser: UserService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.sMemos
      .getAll()
      .toPromise<Memos>()
      .then((data) => {
        this.listMemo = data;
        console.log(this.listMemo);
      });

    this.email = localStorage.getItem('email');

    this.sMedecin
      .getmedecinByEmail(this.email)
      .toPromise<Medecin>()
      .then((data) => {
        this.medecin = data;
        console.log(this.medecin);
      });
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
    this.ngOnInit();
  }
  addMemo(): void {
    this.matDialog.open(AddMemosComponent, {
      disableClose: true,
      autoFocus: true,
      width: '60%',
      data: this.medecin,
    });
    this.ngOnInit();
  }
  deleteMemo(id: number): void {
    this.sMemos.deleteData(id).subscribe(
      (data) => {
        this.toastr.success('Pub bien supprimé ');
      },
      (err) => {
        this.toastr.error('erreur : ' + err.message);
      }
    );
    this.ngOnInit();
  }
}
