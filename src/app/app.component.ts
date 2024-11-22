import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'novapolisx';
  isAuthenticated = false;
  username = '';

  constructor(private router: Router) {}

  ngOnInit(){
    this.isAuthenticated = !!localStorage.getItem('username');
    this.username = localStorage.getItem('username') || 'Guest';
    // if(this.isAuthenticated){
    //   this.router.navigate(['/user-home']);
    // }
  }
  logout(){
    localStorage.removeItem('username');
    window.location.href = '/';
  }
}
