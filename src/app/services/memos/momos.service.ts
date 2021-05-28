import { Injectable } from '@angular/core';

import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { Memos } from '../../modeles/memos/memos';


@Injectable({
  providedIn: 'root'
})
export class MomosService {

  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/Memos';
  host = 'http://localhost:8080/api/Memos';
  choixmenu = 'A';
  list: Memos[] | any;
  tokenStr = localStorage.getItem('token');

  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(formData: Memos): Observable<any> {
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
