import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { SignComponent } from './pages/auth/sign/sign.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenue', pathMatch: 'full' },
  { path: 'login', component: SignComponent },
  { path: 'bienvenue', component: AccueilComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: 'bienvenue', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/module/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./pages/patient/module/patient/patient.module').then(
        (m) => m.PatientModule
      ),
  },
  {
    path: 'medecin',
    loadChildren: () =>
      import('./pages/medecin/module/medecin/medecin.module').then(
        (m) => m.MedecinModule
      ),
  },
  {
    path: 'assistant',
    loadChildren: () =>
      import('./pages/assistant/module/assistant/assistant.module').then(
        (m) => m.AssistantModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
