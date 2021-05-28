import { User } from './../../modeles/user/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/User';
  private findByEmail = 'https://backend-gsmp.herokuapp.com/api/User/email';
  private baseUrl1 = 'https://backend-gsmp.herokuapp.com/api/authenticate';
  private baseUrl3 = 'https://backend-gsmp.herokuapp.com/api/User/login';


  private hostUrl = 'http://localhost:8080/api/User';
  private hostfindByEmail = 'http://localhost:8080/api/User/email';
  private hostUrl1 = 'http://localhost:8080/api/authenticate';
  private hostUrl3 = 'http://localhost:8080/api/User/login';


  islogin = false;
  admin = false;
  assistant = false;
  patient = false;
  medecin = false;
  choixmenu = 'A';
  user: User | any;
  listData: User[] = [];
  public dataForm: FormGroup | any;
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl3}`, { email, password });
  }

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getUserEmail(email: string): Observable<any> {
    return this.http.get(`${this.findByEmail}/${email}`);
  }
  createData(email: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.baseUrl}`, { email, password, role });
  }

  updatedata(id: number, value: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}
