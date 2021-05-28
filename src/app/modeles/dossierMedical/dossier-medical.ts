import { Medecin } from './../medecin/medecin';
import { Patient } from './../patient/patient';
import { Consultation } from '../consultation/consultation';

export interface DossierMedical {
  patient: Patient;
  medecin: Medecin;
  idDossierMedical: number;
  date_creation: Date;
  consultations: Consultation[];
}
