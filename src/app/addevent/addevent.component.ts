import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  standalone: true,
  imports: [],
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.css'
})
export class AddeventComponent {

  constructor(private router: Router) {}

  navigateToEvents() {
    this.router.navigate(['/events']);
  }

  addEvent(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    document.getElementById('form-error')!.textContent = "";

    const eventName = formData.get('event-name') as string;
    const eventDescription = formData.get('event-description') as string;
    const eventDate = formData.get('event-date') as string;
    const eventTime = formData.get('event-time') as string;
    const eventLocation = formData.get('event-location') as string;
    const ticketLimit = formData.get('ticket-limit') as string;
    const ticketsAvailable = formData.get('tickets-available') as string;
    const eventImage = formData.get('event-image') as string;

    if (!eventName || !eventDescription || !eventDate || !eventTime || !eventLocation || !ticketLimit || !ticketsAvailable) {
      document.getElementById('form-error')!.textContent = "All fields except 'Event Image' are required.";
      return;
    }

    const eventData = {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      ticketLimit: ticketLimit,
      ticketsAvailable: ticketsAvailable,
      image: eventImage
    }

    console.log(eventData);
    alert("Your event has been submitted successfully. It will be reviewed by the admin before going live.");
    (document.getElementById('event-form') as HTMLFormElement).reset();
  }

}
