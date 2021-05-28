import { MatTimepickerModule } from 'mat-timepicker';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinRoutingModule } from './medecin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from '../../../../app.module';
import { BrowserModule } from '@angular/platform-browser';

import { AddAssistantComponent } from '../../assistant/add-assistant/add-assistant.component';
import { ListAssistantComponent } from '../../assistant/list-assistant/list-assistant.component';
import { AddConsultationComponent } from '../../consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from '../../consultation/list-consultation/list-consultation.component';
import { AddDossierMedicalComponent } from '../../dossierMedical/add-dossier-medical/add-dossier-medical.component';
import { ListDossierMedicalComponent } from '../../dossierMedical/list-dossier-medical/list-dossier-medical.component';
import { HomeComponent } from '../../home/home.component';
import { AddMemosComponent } from '../../memos/add-memos/add-memos.component';
import { AddNotificationComponent } from '../../notification/add-notification/add-notification.component';
import { ListNotificationComponent } from '../../notification/list-notification/list-notification.component';
import { ListPatientComponent } from '../../patient/list-patient/list-patient.component';
import { ProfilComponent } from '../../profil/profil.component';
import { AcceptationRendezVousComponent } from '../../rendezVous/acceptation-rendez-vous/acceptation-rendez-vous.component';
import { ListRendezVousComponent } from '../../rendezVous/list-rendez-vous/list-rendez-vous.component';
import { ShowPatientComponent } from '../../patient/show-patient/show-patient.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';

@NgModule({
  declarations: [
    AddAssistantComponent,
    ListAssistantComponent,
    AddConsultationComponent,
    ListConsultationComponent,
    AddDossierMedicalComponent,
    ListDossierMedicalComponent,
    HomeComponent,
    AddMemosComponent,
    AddNotificationComponent,
    ListNotificationComponent,
    ListPatientComponent,
    ProfilComponent,
    AcceptationRendezVousComponent,
    ListRendezVousComponent,
    ShowPatientComponent,
    ListMemosComponent,
  ],
  imports: [
    MedecinRoutingModule,
    // AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // ToastrModule.forRoot(),
    // MatDialogModule,
    // MatSliderModule,
    // MatToolbarModule,
    // MatIconModule,
   
  ],
})
export class MedecinModule {}
