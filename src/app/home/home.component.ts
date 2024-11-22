import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Scroll to the content section when the user clicks on the "Scroll Down" button
  scrollToContent(): void {
    const contentSection = document.querySelector('.intro');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
