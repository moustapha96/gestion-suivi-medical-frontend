import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Patient } from 'src/app/modeles/patient/patient';
export interface RendezVous {
  idRendezVous: number;
  date_rv: Date;
  heure: string;
  medecin: Medecin;
  patient: Patient;
  
}
