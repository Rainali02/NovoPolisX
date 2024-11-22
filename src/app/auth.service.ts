import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(emailId: string, password: string) {
    return this.http.post(`${this.apiUrl}/loginUser`, { emailId, password });
  }

  register(email: string, password: string, username: string, city: string, state: string, country: string) {
    return this.http.post(`${this.apiUrl}/addUser`, { email, password, username, city, state, country });
  }
}
