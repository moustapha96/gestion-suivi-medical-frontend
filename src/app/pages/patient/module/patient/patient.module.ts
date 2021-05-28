import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';

import { ShowDossierMedicalComponent } from '../../dossierMedical/show-dossier-medical/show-dossier-medical.component';
import { HomeComponent } from '../../home/home.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';
import { AddNotificationComponent } from '../../notification/add-notification/add-notification.component';
import { ListNotificationComponent } from '../../notification/list-notification/list-notification.component';
import { ProfilComponent } from '../../profil/profil.component';
import { DemandeRendezVousComponent } from '../../rendezVous/demande-rendez-vous/demande-rendez-vous.component';
import { ListRendezVousComponent } from '../../rendezVous/list-rendez-vous/list-rendez-vous.component';

@NgModule({
  declarations: [
    ShowDossierMedicalComponent,
    HomeComponent,
    ListMemosComponent,
    AddNotificationComponent,
    ListNotificationComponent,
    ProfilComponent,
    DemandeRendezVousComponent,
    ListRendezVousComponent,

  ],
  imports: [
    PatientRoutingModule,
    CommonModule,
    // AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
    // HttpClientModule,
    // ToastrModule.forRoot(),
    // MatDialogModule,
    // MatSliderModule,
    // MatToolbarModule,
    // MatIconModule,
  ]
})
export class PatientModule {}
