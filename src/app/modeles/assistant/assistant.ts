import { ServiceMedical } from '../servceMedical/service-medical';
import { User } from '../user/user';

export interface Assistant {
  prenom: string;
  adresse: string;
  genre: string;
  user: User;
  nom: string;
  tel: string;
  age: number;
  serviceMedical: ServiceMedical;
  id_assistant: number;
}
