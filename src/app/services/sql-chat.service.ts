import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqlChatService {

  private apiUrl = 'http://localhost:3000/query';   
 // Your backend API endpoint

  constructor(private http: HttpClient) {}

  Oldquery(question: string) {
    return this.http.post(this.apiUrl, { question }); // Sending the prompt in the request body
  }

  query(question: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, {question});
  }
}
