import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {}

  registerUser(event: Event){
    event.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const state = (document.getElementById('state') as HTMLInputElement).value;
    const country = (document.getElementById('country') as HTMLInputElement).value;

    this.authService.register(email, password, username, city, state, country).subscribe((response: any) => {
      console.log(response);
      
      if(response.status === "success"){
        alert("Registration successful! Please log in.");
        this.router.navigate(['/login']);
        return;
      }
      alert(response.status);
    });

    // const users = JSON.parse(localStorage.getItem('users') || '[]');
    // const existingUser = users.find((user: any) => user.email === email);
    // if(existingUser){
    //   alert("This email is already registered.");
    //   return;
    // }

    // users.push({email,username,password,city,state,country});
    // localStorage.setItem('users',JSON.stringify(users));
    // alert("Registration successful! Please log in.");
    // window.location.href = '/login';
  }
}
