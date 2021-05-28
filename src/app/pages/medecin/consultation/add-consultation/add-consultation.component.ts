import { ToastrService } from 'ngx-toastr';
import { DossierMedicalService } from './../../../../services/dossierMedical/dossier-medical.service';
import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
import { Consultation } from './../../../../modeles/consultation/consultation';
import { Patient } from './../../../../modeles/patient/patient';
import { PatientService } from './../../../../services/patient/patient.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultation/consultation.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ShowMedecinComponent } from 'src/app/pages/patient/medecin/show-medecin/show-medecin.component';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { Medecin } from 'src/app/modeles/medecin/medecin';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss'],
})
export class AddConsultationComponent implements OnInit {
  traitement: string | any;
  diagnostic: string | any;
  medecin: Medecin | any;
  email: string | any;
  patient: Patient | any;
  consultation: Consultation | any;
  dossierMedical: DossierMedical | any;
  dms: DossierMedical[] | any;
  cons: Consultation[] = [];
  constructor(
    private matDialog: MatDialog,
    public sMedecin: MedecinService,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    public dialogRef: MatDialogRef<ShowMedecinComponent>,
    public sPatient: PatientService,
    public sConsultation: ConsultationService,
    public sDms: DossierMedicalService,
    public toasts: ToastrService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.sMedecin
      .getmedecinByEmail(this.email)
      .toPromise<Medecin>()
      .then((data) => {
        this.medecin = data;
        console.log(this.medecin);
      });

    this.patient = this.data;

    this.sDms
      .getDmByPatientEmail(this.patient.user.email)
      .toPromise<DossierMedicalService>()
      .then(
        (data) => {
          this.dossierMedical = data;
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );

    this.sDms
      .getAll()
      .toPromise<DossierMedical>()
      .then((data) => {
        this.dms = data;
      });
  }

  close(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  saveConsultation(): void {
    this.consultation = {
      traitement: this.traitement,
      diagnostic: this.diagnostic,
      date_consultation: new Date(),
      dossierMedical: this.dossierMedical,
    };

    this.sDms
      .getDmByPatientEmail(this.patient.user.email)
      .toPromise<DossierMedicalService>()
      .then(
        (data) => {
          this.dossierMedical = data;
          this.consultation = {
            traitement: this.traitement,
            diagnostic: this.diagnostic,
            date_consultation: new Date(),
            dossierMedical: this.dossierMedical,
          };
          this.sConsultation.createData(this.consultation).subscribe(
            (res) => {
              this.close();
            },
            (err) => {
              console.log(err);
            }
          );
        },
        (err) => {
          this.dossierMedical = {
            patient: this.patient,
            medecin: this.medecin,
            date_creation: new Date(),
          };
          this.sDms
            .createData(this.dossierMedical)
            .toPromise<DossierMedical>()
            .then(
              (res) => {
                this.consultation = {
                  traitement: this.traitement,
                  diagnostic: this.diagnostic,
                  date_consultation: new Date(),
                  dossierMedical: res,
                };

                this.sConsultation.createData(this.consultation).subscribe(
                  (res) => {
                    this.close();
                    console.log(res);
                  },
                  (err) => {
                    console.log(err);
                  }
                );

                this.close();
              },
              (err) => {
                console.log(err);
              }
            );
        }
      );

    // if (this.dossierMedical != null) {
    //   if (this.dossierMedical.consultations != null) {
    //     this.sConsultation.createData(this.consultation).subscribe(
    //       (res) => {
    //         this.close();
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     );
    //   }
    // } else {
    //   this.dossierMedical = {
    //     patient: this.patient,
    //     medecin: this.medecin,
    //     date_creation: new Date(),
    //   };

    //   this.sDms.createData(this.dossierMedical).subscribe(
    //     (res) => {
    //       this.consultation = {
    //         traitement: this.traitement,
    //         diagnostic: this.diagnostic,
    //         date_consultation: new Date(),
    //         dossierMedical: res,
    //       };

    //       this.sConsultation.createData(this.consultation).subscribe(
    //         (res) => {
    //           this.close();
    //         },
    //         (err) => {
    //           console.log(err);
    //         }
    //       );

    //       this.close();
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }
  }
}
