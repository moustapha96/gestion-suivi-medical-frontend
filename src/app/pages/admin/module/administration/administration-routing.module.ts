import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssistantComponent } from '../../assistant/add-assistant/add-assistant.component';
import { ListAssistantComponent } from '../../assistant/list-assistant/list-assistant.component';
import { HomeComponent } from '../../home/home.component';

import { ListPatientComponent } from '../../patient/list-patient/list-patient.component';
import { AddConsultationComponent } from '../../consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from '../../consultation/list-consultation/list-consultation.component';
import { AddDossierMedicalComponent } from '../../dossierMedical/add-dossier-medical/add-dossier-medical.component';
import { ListDossierMedicalComponent } from '../../dossierMedical/list-dossier-medical/list-dossier-medical.component';
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


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'add-assistant', component: AddAssistantComponent },
  { path: 'list-assistant', component: ListAssistantComponent },
  { path: 'list-patient', component: ListPatientComponent },
  { path: 'add-consultation', component: AddConsultationComponent },
  { path: 'list-consultation', component: ListConsultationComponent },
  { path: 'add-dm', component: AddDossierMedicalComponent },
  { path: 'list-dm', component: ListDossierMedicalComponent },
  { path: 'add-memos', component: AddMemosComponent },
  { path: 'list-memos', component: ListMemosComponent },
  { path: 'add-notification', component: AddNotificationComponent },
  { path: 'list-notification', component: ListNotificationComponent },
  { path: 'parametre', component: ParametreComponent },
  { path: 'add-rv', component: AddRendezVousComponent },
  { path: 'list-rv', component: ListRendezVousComponent },
  { path: 'add-sm', component: AddServiceMedicalComponent },
  { path: 'list-sm', component: ListServiceMedicalComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'list-medecin', component: ListMedecinComponent },
  { path: 'add-medecin', component: AddMedecinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
