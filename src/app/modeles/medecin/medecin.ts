import { DossierMedical } from '../dossierMedical/dossier-medical';
import { Memos } from '../memos/memos';
import { Notification } from '../notification/notification';
import { RendezVous } from '../rendezVous/rendez-vous';
import { ServiceMedical } from '../servceMedical/service-medical';
import { User } from '../user/user';

export interface Medecin {
  specialisation: string;
  initial: string;
  prenom: string;
  num_licence: string;
  adresse: string;
  user: User;
  genre: string;
  nom: string;
  tel: string;
  taille: number;
  age: number;
  idMedecin: number;
  serviceMedical: ServiceMedical;

  notifications: Notification[];
  rendezVous: RendezVous[];
  dossierMedical: DossierMedical[];
  memos: Memos[];
}
