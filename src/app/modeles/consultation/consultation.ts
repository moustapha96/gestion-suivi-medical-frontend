import { DossierMedical } from 'src/app/modeles/dossierMedical/dossier-medical';
export interface Consultation {
  id_consultation: number;
  date_consultation: Date;
  diagnostic: string;
  traitement: string;
  dossierMedical : DossierMedical;
}
