import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/assistant/home/home.component';
import { ListMedecinComponent } from 'src/app/pages/assistant/medecin/list-medecin/list-medecin.component';
import { ListPatientComponent } from 'src/app/pages/assistant/patient/list-patient/list-patient.component';
import { ProfilComponent } from 'src/app/pages/assistant/profil/profil.component';
import { AddRendezVousComponent } from 'src/app/pages/assistant/rendezVous/add-rendez-vous/add-rendez-vous.component';
import { ListMemosComponent } from '../../memos/list-memos/list-memos.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'medecins', component: ListMedecinComponent },
  { path: 'patients', component: ListPatientComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'memos', component: ListMemosComponent },
  { path: 'rendez-vous', component: ListMedecinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistantRoutingModule { }
