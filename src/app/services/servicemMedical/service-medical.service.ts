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
import { Patient } from '../../modeles/patient/patient';
import { ServiceMedical } from '../../modeles/servceMedical/service-medical';

@Injectable({
  providedIn: 'root',
})
export class ServiceMedicalService {
  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/ServiceMedical';
  host = 'http://localhost:8080/api/ServiceMedical';
  choixmenu = 'A';
  list: ServiceMedical[] | any;

  tokenStr = localStorage.getItem('token');

  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(formData: ServiceMedical): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
