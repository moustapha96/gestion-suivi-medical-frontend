import { Medecin } from 'src/app/modeles/medecin/medecin';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { MomosService } from 'src/app/services/memos/momos.service';

import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Memos } from 'src/app/modeles/memos/memos';

@Component({
  selector: 'app-add-memos',
  templateUrl: './add-memos.component.html',
  styleUrls: ['./add-memos.component.scss'],
})
export class AddMemosComponent implements OnInit {
  medecin: Medecin | any;
  memos: Memos | any;
  formMemos: FormGroup | any;
  medecins: Medecin[] | any;
  constructor(
    public crudApiMedecin: MedecinService,
    public crudApiMemos: MomosService,
    public toastr: ToastrService,
    private router: Router,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getData();
  }

  getData(): void {
    this.crudApiMedecin
      .getAll()
      .toPromise<Medecin>()
      .then((data) => {
        this.medecins = data;
      });
    this.initForm();
  }
  initForm(): void {
    this.formMemos = this.fb.group({
      titre: ['', [Validators.required]],
      message: ['', [Validators.required]],
      medecin: ['', [Validators.required]],
    });
  }
  ResetForm(): void {
    this.formMemos.reset();
  }

  onSubmit(): void {
    const val = this.formMemos.value;
    console.log(val.medecin);

    this.crudApiMedecin
      .getData(val.medecin)
      .toPromise<Medecin>()
      .then((response) => {
        this.medecin = response;
      });

    console.log('medecin ');
    console.log(this.medecin);

    this.memos = {
      titre: val.titre,
      message: val.message,
      medecin: this.medecin,
    };
    if (this.memos != null) {
      this.addData();
    } else {
      this.toastr.error(' erreur lors de l\'enregistrement ');
    }
  }
  addData(): void {
    this.crudApiMemos.createData(this.memos).subscribe(
      (data) => {
        this.toastr.success('memos bien enregister' + data);
      },
      (err) => {
        this.toastr.error('memos non enregister' + err);
      }
    );
    this.router.navigate(['/admin/list-memos']);
  }
}
