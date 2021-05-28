import { Medecin } from 'src/app/modeles/medecin/medecin';
export interface Memos {
  titre: string;
  message: string;
  medecin: Medecin;
  idMemos: number;
  date_creer: Date;
}
