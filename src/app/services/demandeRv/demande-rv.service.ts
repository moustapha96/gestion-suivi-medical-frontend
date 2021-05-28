import { DemandeRv } from './../../modeles/demandeRv/demande-rv';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeRvService {

  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/demandeRVs';
  host = 'http://localhost:8080/api/demandeRVs';
  choixmenu = 'A';
  list: Notification[] | any;
  tokenStr = localStorage.getItem('token');

  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(formData: DemandeRv): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}` );
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
