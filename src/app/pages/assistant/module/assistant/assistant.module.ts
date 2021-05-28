import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantRoutingModule } from './assistant-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from '../../../../app.module';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from 'src/app/pages/assistant/home/home.component';
import { ListMedecinComponent } from 'src/app/pages/assistant/medecin/list-medecin/list-medecin.component';
import { ListPatientComponent } from 'src/app/pages/assistant/patient/list-patient/list-patient.component';
import { ProfilComponent } from 'src/app/pages/assistant/profil/profil.component';
import { AddRendezVousComponent } from 'src/app/pages/assistant/rendezVous/add-rendez-vous/add-rendez-vous.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';


@NgModule({
  declarations: [
    HomeComponent,ListMedecinComponent,ListPatientComponent,ProfilComponent,
    AddRendezVousComponent,ListMemosComponent,
  ],
  imports: [

    AssistantRoutingModule,
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
export class AssistantModule { }
