import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Memos } from 'src/app/modeles/memos/memos';
import { ShowMedecinComponent } from 'src/app/pages/patient/medecin/show-medecin/show-medecin.component';
import { MomosService } from 'src/app/services/memos/momos.service';
import { RendezVousService } from 'src/app/services/rendezVous/rendez-vous.service';

@Component({
  selector: 'app-add-memos',
  templateUrl: './add-memos.component.html',
  styleUrls: ['./add-memos.component.scss'],
})
export class AddMemosComponent implements OnInit {
  titre: string | any;
  message: string | any;

  memo: Memos | any;
  constructor(
    public toastr: ToastrService,
    public sRendezVous: RendezVousService,
    private matDialog: MatDialog,
    public sMemos: MomosService,
    @Inject(MAT_DIALOG_DATA) public data: Medecin,
    public dialogRef: MatDialogRef<ShowMedecinComponent>
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
    this.ngOnInit();
  }

  onSubmit(): void {
    if (this.titre != '' && this.message != '') {
      console.log(this.titre, this.message);
      this.memo = {
        titre: this.titre,
        message: this.message,
        medecin: this.data,
      };
      this.sMemos.createData(this.memo).subscribe(
        (res) => {
          this.toastr.success(' memos  partagé avec succée ');
          this.close();
        },
        (err) => {
          this.toastr.error('erreur , memos non partagé');
        }
      );
    } else {
      this.toastr.warning('erreur , réessayer !!!');
    }
    this.ngOnInit();
  }
}
