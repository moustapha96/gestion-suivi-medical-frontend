import { User } from './../../../modeles/user/user';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/modeles/patient/patient';
import { UserService } from 'src/app/services/user/user.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/modeles/contact/contact';
import { Medecin } from 'src/app/modeles/medecin/medecin';
import { ContactService } from 'src/app/services/contact/contact.service';
import { MedecinService } from 'src/app/services/medecin/medecin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // user: User| any;
  // patient: Patient | any;
  // email : string | any;
  // constructor(public sPatient: PatientService, public sUser: UserService) { }

  // ngOnInit(): void {

  //   this.email =  localStorage.getItem('email');

  //   this.sPatient.getPatientByEmail(this.email).toPromise<Patient>().then((data)=>{
  //     this.patient = data;
  //     console.log(this.patient);
  //   });

  // }
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
