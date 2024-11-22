import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  constructor(private router: Router, private ticketService: TicketService) {}

  bookTicket() {
    const quantity = (document.getElementById('ticket-quantity') as HTMLInputElement).value;
    const ticketType = (document.getElementById('ticket-type') as HTMLInputElement).value;

    if (parseInt(quantity) < 1) {
      alert("Please select at least one ticket.");
      return;
    }

    // Simulate booking process (in a real application, this would be linked to a backend)
    alert(`You have booked ${quantity} ${ticketType} tickets for the event!`);

    // Send confirmation email (Mock)
    this.sendConfirmationEmail(ticketType, quantity);

    this.ticketService.bookTicket(ticketType, parseInt(quantity)).subscribe((response: any) => {
      console.log(response);
    });

    // Optionally, clear the form after booking
    (document.getElementById('ticket-quantity') as HTMLInputElement).value = "1";
    (document.getElementById('ticket-type') as HTMLInputElement).value = "regular";
  }

  sendConfirmationEmail(ticketType: string, quantity: string) {
    alert(`Confirmation email sent for ${quantity} ${ticketType} tickets!`);
  }

}
