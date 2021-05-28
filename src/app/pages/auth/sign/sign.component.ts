import { Patient } from './../../../modeles/patient/patient';
import { User } from './../../../modeles/user/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { DatePipe } from '@angular/common';
import { AssistantService } from 'src/app/services/assistant/assistant.service';
import { MedecinService } from 'src/app/services/medecin/medecin.service';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  user : User | any;


  errorMessage = '';
  name = '';
  Wdate: any;
  annee = 0;
  loginForm: FormGroup | any;

  email = '';
  password = '';
  constructor(
    private router: Router,
    private userService: UserService,
    public toastr: ToastrService,
    private datePipe: DatePipe,
    public fb: FormBuilder,
    public sPatient: PatientService,
    public sMedecin: MedecinService,
    public sAssistant: AssistantService
  ) {}

  ngOnInit(): void {
    this.userService.islogin = false;
    this.userService.admin = false;
    this.userService.assistant = false;
    this.userService.medecin = false;
    this.userService.patient = false;
    this.Wdate = this.transformDate(new Date());
    this.annee = this.Wdate.toString().substring(0, 4);
    localStorage.setItem('annee', this.annee.toString());
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  login(): void {
    const val = this.loginForm.value;
    console.log(val);
    
    this.userService.login(val.email, val.password).subscribe(
      (res) => {
        console.log(res);
        this.userService.user = res;
        this.user = res;
        localStorage.setItem('user', this.user);

        this.toastr.success('Connexion réussi!');

        var jwt = 'khouma' + this.user.jwt;
        localStorage.setItem('token', jwt);
        localStorage.setItem('email', this.user.email);

        this.userService.islogin = true;
        if (this.user.role === 'admin') {
          this.userService.admin = true;
          this.router.navigate(['/admin']);
        } else if (this.user.role === 'patient') {

          this.sPatient.getPatientByEmail(this.user.email).toPromise<Patient>().then((data)=>{
            this.sPatient.patient = data;
            console.log(this.sPatient.patient);
          });

          this.userService.patient = true;
          this.router.navigate(['/patient']);
        } else if (this.user.role === 'assistant') {
          this.userService.assistant = true;
          this.router.navigate(['/assistant']);
        } else if (this.user.role === 'medecin') {
          this.userService.medecin = true;
          this.router.navigate(['/medecin']);
        } else {
          this.router.navigate(['/accueil']);
        }
      },
      (error) =>  this.toastr.warning('Login incorrecte!')
    );
  }

  register(): void {
    this.router.navigateByUrl('/inscription');
  }
  logOut(): void {
    this.userService.islogin = false;
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  transformDate(date: any): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('name');
  }
}
