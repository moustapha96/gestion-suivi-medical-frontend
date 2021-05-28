import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssistantComponent } from '../../assistant/add-assistant/add-assistant.component';
import { ListAssistantComponent } from '../../assistant/list-assistant/list-assistant.component';
import { AddConsultationComponent } from '../../consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from '../../consultation/list-consultation/list-consultation.component';
import { AddDossierMedicalComponent } from '../../dossierMedical/add-dossier-medical/add-dossier-medical.component';
import { ListDossierMedicalComponent } from '../../dossierMedical/list-dossier-medical/list-dossier-medical.component';
import { HomeComponent } from '../../home/home.component';
import { AddMemosComponent } from '../../memos/add-memos/add-memos.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';
import { AddNotificationComponent } from '../../notification/add-notification/add-notification.component';
import { ListNotificationComponent } from '../../notification/list-notification/list-notification.component';
import { ListPatientComponent } from '../../patient/list-patient/list-patient.component';
import { ShowPatientComponent } from '../../patient/show-patient/show-patient.component';
import { ProfilComponent } from '../../profil/profil.component';
import { AcceptationRendezVousComponent } from '../../rendezVous/acceptation-rendez-vous/acceptation-rendez-vous.component';
import { ListRendezVousComponent } from '../../rendezVous/list-rendez-vous/list-rendez-vous.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'assistants', component: ListAssistantComponent },
  { path: 'ajout-assistant', component: AddAssistantComponent },
  { path: 'consultations', component: ListConsultationComponent },
  { path: 'ajout-consultation', component: AddConsultationComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'ajout-dossier-medical', component: AddDossierMedicalComponent },
  { path: 'dossier-medicals', component: ListDossierMedicalComponent },
  { path: 'memos', component: ListMemosComponent },
  { path: 'ajout-memo', component: AddMemosComponent },
  { path: 'notification', component: AddNotificationComponent },
  { path: 'ajout-notification', component: ListNotificationComponent },
  { path: 'patients', component: ListPatientComponent },
  { path: 'rvs', component: ListRendezVousComponent },
  { path: 'show-patient/:id', component: ShowPatientComponent },

  { path: 'rvs', component: ListRendezVousComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedecinRoutingModule {}
