import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/modeles/patient/patient';
import { User } from 'src/app/modeles/user/user';
import { DossierMedicalService } from 'src/app/services/dossierMedical/dossier-medical.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-show-dossier-medical',
  templateUrl: './show-dossier-medical.component.html',
  styleUrls: ['./show-dossier-medical.component.scss'],
})
export class ShowDossierMedicalComponent implements OnInit {
  user: User | any;
  patient: Patient | any;
  email: string | any;

  dms: DossierMedical[] | any;
  dm: DossierMedical | any;
  constructor(
    public sPatient: PatientService,
    public sUser: UserService,
    public toastr: ToastrService,
    private router: Router,
    public sDms: DossierMedicalService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.sPatient
      .getPatientByEmail(this.email)
      .toPromise<Patient>()
      .then((data) => {
        this.patient = data;
        this.getDmPatient();
        console.log(this.patient);
      });

    // this.sDms
    //   .getAll()
    //   .toPromise<DossierMedical>()
    //   .then((data) => {
    //     this.dms = data;
    //     console.log(this.dms);
    //   });
  }

  getDmPatient(): void{
    this.sDms
      .getDmPatient(this.patient.id)
      .toPromise<DossierMedical>()
      .then((data) => {
        this.dm = data;
        console.log('dossier médical ');
        console.log(this.dm);
      });
  }
}
