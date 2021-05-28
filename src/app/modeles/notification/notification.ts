import { Medecin } from '../medecin/medecin';
import { Patient } from '../patient/patient';
import { RendezVous } from '../rendezVous/rendez-vous';

export interface Notification {
  titre: string;
  message: string;
  rendezVous: RendezVous;
  medecin: Medecin;
  patient: Patient;
}
