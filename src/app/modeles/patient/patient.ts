import { Notification } from '../notification/notification';
import { User } from '../user/user';

export interface Patient {
  statut_social: string;
  prenom: string;
  profession: string;
  adresse: string;
  genre: string;
  user: User;
  nom: string;
  tel: string;
  taille: number;
  age: number;
  id: number;
  notifications: Notification[];
}
