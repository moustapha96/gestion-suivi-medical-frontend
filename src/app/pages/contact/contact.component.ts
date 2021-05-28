import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/modeles/contact/contact';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { ContactService } from 'src/app/services/contact/contact.service';
import { MedecinService } from 'src/app/services/medecin/medecin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
