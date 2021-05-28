import { Injectable } from '@angular/core';
import { RendezVous } from '../../modeles/rendezVous/rendez-vous';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Patient } from '../../modeles/patient/patient';

@Injectable({
  providedIn: 'root',
})
export class RendezVousService {
  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/RendezVous';
  private baseUrlM = 'https://backend-gsmp.herokuapp.com/api/RendezVous/medecin';
  private baseUrlP = 'https://backend-gsmp.herokuapp.com/api/RendezVous/patient';
  hostUrl = 'http://localhost:8080/api/RendezVous';
  hostUrlM = 'http://localhost:8080/api/RendezVous/medecin';
  hostUrlP = 'http://localhost:8080/api/RendezVous/patient';

  tokenStr = localStorage.getItem('token');

  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getRvMedecin(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlM}/${id}`);
  }
  getRvPatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlP}/${id}`);
  }

  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
