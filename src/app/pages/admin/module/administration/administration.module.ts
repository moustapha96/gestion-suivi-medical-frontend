import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddAssistantComponent } from '../../assistant/add-assistant/add-assistant.component';
import { ListAssistantComponent } from '../../assistant/list-assistant/list-assistant.component';
import { ListPatientComponent } from '../../patient/list-patient/list-patient.component';
import { AddConsultationComponent } from '../../consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from '../../consultation/list-consultation/list-consultation.component';
import { AddDossierMedicalComponent } from '../../dossierMedical/add-dossier-medical/add-dossier-medical.component';
import { ListDossierMedicalComponent } from '../../dossierMedical/list-dossier-medical/list-dossier-medical.component';
import { HomeComponent } from '../../home/home.component';
import { AddMemosComponent } from '../../memos/add-memos/add-memos.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';
import { AddNotificationComponent } from '../../notification/add-notification/add-notification.component';
import { ListNotificationComponent } from '../../notification/list-notification/list-notification.component';
import { ParametreComponent } from '../../parametre/parametre.component';
import { AddRendezVousComponent } from '../../rendzVous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from '../../rendzVous/list-rendez-vous/list-rendez-vous.component';
import { AddServiceMedicalComponent } from '../../serviceMedical/add-service-medical/add-service-medical.component';
import { ListServiceMedicalComponent } from '../../serviceMedical/list-service-medical/list-service-medical.component';
import { ListUserComponent } from '../../user/list-user/list-user.component';
import { AddPatientComponent } from '../../patient/add-patient/add-patient.component';
import { ListMedecinComponent } from '../../medecin/list-medecin/list-medecin.component';
import { AddMedecinComponent } from '../../medecin/add-medecin/add-medecin.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AddAssistantComponent,ListAssistantComponent,ListPatientComponent,
    AddConsultationComponent,ListConsultationComponent,AddDossierMedicalComponent,
    ListDossierMedicalComponent,HomeComponent,AddMemosComponent,ListMemosComponent,
    AddNotificationComponent,ListNotificationComponent,ParametreComponent,ListPatientComponent,
    AddRendezVousComponent,ListRendezVousComponent,AddServiceMedicalComponent,ListServiceMedicalComponent,
    ListUserComponent,AddPatientComponent,ListMedecinComponent,AddMedecinComponent
  ],
  imports: [
     CommonModule,
    AdministrationRoutingModule,
   
    // AppRoutingModule,
    // BrowserAnimationsModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
    // ToastrModule.forRoot(),
    // MatDialogModule,
    // MatSliderModule,
    // MatToolbarModule,
    // MatIconModule,
   
  ]
})
export class AdministrationModule { }
