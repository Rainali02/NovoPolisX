import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
