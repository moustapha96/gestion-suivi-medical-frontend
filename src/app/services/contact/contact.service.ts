import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Memos } from 'src/app/modeles/memos/memos';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/contact';
  host = 'http://localhost:8080/api/contact';
  choixmenu = 'A';
  list: Memos[] | any;
  tokenStr = localStorage.getItem('token');


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
