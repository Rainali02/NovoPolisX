import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  bookTicket(ticketType: string, numberOfTickets: number){
    return this.http.post(`${this.apiUrl}/bookTicket`, {ticketType, numberOfTickets});
  }
}
