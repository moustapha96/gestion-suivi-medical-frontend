import { Injectable } from '@angular/core';
import { Assistant } from '../../modeles/assistant/assistant';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssistantService {
  private baseUrl = 'https://backend-gsmp.herokuapp.com/api/assistants';
  host = 'http://localhost:8080/api/assistants';
  choixmenu = 'A';
  list: Assistant[] | any;
  tokenStr = localStorage.getItem('token');

  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
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
  getAssistantByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${email}`);
  }
}
