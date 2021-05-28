import { DossierMedical } from './../../modeles/dossierMedical/dossier-medical';
import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Consultation } from 'src/app/modeles/consultation/consultation';

@Injectable({
  providedIn: 'root',
})
export class DossierMedicalService {
  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/dms';
  private baseUrlEmail = 'https://backend-gsmp.herokuapp.com/api/dms/patient';
  private baseUrlDm = 'https://backend-gsmp.herokuapp.com/api/dms/patient/dm';
  private baseUrlAddCons = 'https://backend-gsmp.herokuapp.com/api/dms/addConsultation';

  hostUrl = 'http://localhost:8080/api/dms';
  hostUrlEmail = 'http://localhost:8080/api/dms/patient';
  hostUrlDm = 'http://localhost:8080/api/dms/patient/dm';
  hostUrlAddCons = 'http://localhost:8080/api/dms/addConsultation';

  choixmenu = 'A';
  list: DossierMedical[] | any;
  tokenStr = localStorage.getItem('token');

  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getDmByPatientEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrlEmail}/${email}`);
  }
  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  addConsultation(id: number, value: Consultation): Observable<any> {
    return this.http.put(`${this.baseUrlAddCons}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getDmPatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlDm}/${id}`);
  }

}
