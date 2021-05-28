import { ContactService } from './../../services/contact/contact.service';
import { Contact } from './../../modeles/contact/contact';
import { ToastrService } from 'ngx-toastr';
import { MedecinService } from './../../services/medecin/medecin.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  listeMedecin: Medecin[] | any;
  email: string | any;
  subject: string | any;
  message: string | any;
  nom: string | any;
  contact: Contact | any;
  constructor(
    public sMedecin: MedecinService,
    public toastr: ToastrService,
    public sContact: ContactService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.sMedecin
      .getAll()
      .toPromise<Medecin>()
      .then((data) => {
        this.listeMedecin = data;
      });
  }

  onSubmit(): void {
    if (this.email && this.nom && this.message && this.subject) {
      this.contact = {
        email: this.email,
        nom: this.nom,
        subject: this.subject,
        message: this.message,
      };
      this.sContact.createData(this.contact).subscribe(
        (data) => {
          this.toastr.success(
            'Votre message est bien transmit , merci de nous contacter  !'
          );
          this.toastr.success('Votre message : ' + this.message);
        },
        (err) => {
          this.toastr.warning(
            'une erreur est survenu ,\n Veuillez Réessayer SVP !'
          );
        }
      );
    }else{
      this.toastr.warning(
        'une erreur est survenu ,\n Veuillez remplire tout les champs SVP !'
      );
    }
    this.router.navigate(['bienvenue']);
  }
}
