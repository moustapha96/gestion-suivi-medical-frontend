import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDossierMedicalComponent } from '../../dossierMedical/show-dossier-medical/show-dossier-medical.component';
import { HomeComponent } from '../../home/home.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';
import { AddNotificationComponent } from '../../notification/add-notification/add-notification.component';
import { ListNotificationComponent } from '../../notification/list-notification/list-notification.component';
import { ProfilComponent } from '../../profil/profil.component';
import { DemandeRendezVousComponent } from '../../rendezVous/demande-rendez-vous/demande-rendez-vous.component';
import { ListRendezVousComponent } from '../../rendezVous/list-rendez-vous/list-rendez-vous.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'dm', component: ShowDossierMedicalComponent },
  { path: 'memos', component: ListMemosComponent },
  { path: 'ajout-notification', component: AddNotificationComponent },
  { path: 'notifications', component: ListNotificationComponent },
  {  path: 'liste-rv'  , component: ListRendezVousComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
