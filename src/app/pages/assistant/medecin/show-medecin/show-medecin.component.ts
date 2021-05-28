import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';

@Component({
  selector: 'app-show-medecin',
  templateUrl: './show-medecin.component.html',
  styleUrls: ['./show-medecin.component.scss']
})
export class ShowMedecinComponent implements OnInit {

  constructor(
    public toastr: ToastrService,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Medecin,
    public dialogRef: MatDialogRef<ShowMedecinComponent>
  ) {}

  ngOnInit(): void {}
  close(): void{
    this.dialogRef.close();
  }

}
