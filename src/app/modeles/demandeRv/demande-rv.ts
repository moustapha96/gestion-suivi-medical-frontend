import { Patient } from 'src/app/modeles/patient/patient';
import { Medecin } from '../medecin/medecin';
export interface DemandeRv {
    id: number;
    date_demande: Date;
    patient: Patient;
    medecin: Medecin;
}
