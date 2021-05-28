import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTimepickerModule } from 'mat-timepicker';
import { MedecinModule } from './pages/medecin/module/medecin/medecin.module';
import { AssistantModule } from './pages/assistant/module/assistant/assistant.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

// import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe, CommonModule } from '@angular/common';
import { SignComponent } from './pages/auth/sign/sign.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AdministrationModule } from './pages/admin/module/administration/administration.module';
import { PatientModule } from './pages/patient/module/patient/patient.module';
import { ShowPatientComponent } from './pages/medecin/patient/show-patient/show-patient.component';
import { ShowMedecinComponent } from './pages/patient/medecin/show-medecin/show-medecin.component';
import { ShowComponent } from './pages/patient/medecin/show/show.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ListMemosComponent } from './pages/assistant/memos/list-memos/list-memos.component';
import { ShowMemosComponent } from './pages/assistant/memos/show-memos/show-memos.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    SignComponent,
    RegisterComponent,
    ShowComponent,
    ContactComponent,
  ],
  imports: [
    // CommonModule,
     BrowserModule,
    FormsModule,
    AssistantModule,
    AdministrationModule,
    PatientModule,
    MedecinModule,

    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AmazingTimePickerModule,DataTablesModule, NgbModule
    // NgMatSearchBarModule,
    // NgxPaginationModule
  ],
  exports: MATERIAL_MODULES,
  providers: [
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
