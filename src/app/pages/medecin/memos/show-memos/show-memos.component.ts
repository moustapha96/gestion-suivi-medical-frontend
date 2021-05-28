import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Memos } from 'src/app/modeles/memos/memos';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';

@Component({
  selector: 'app-show-memos',
  templateUrl: './show-memos.component.html',
  styleUrls: ['./show-memos.component.scss']
})
export class ShowMemosComponent implements OnInit {

 
  constructor(
    public toastr: ToastrService,
    public sRendezVous: RendezVousService,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Memos,
    public dialogRef: MatDialogRef<ShowMemosComponent>
  ) {}

  ngOnInit(): void {}
  close(): void{
    this.dialogRef.close();
  }

}
