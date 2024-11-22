import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})  
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginUser(event: Event){
    event.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.authService.login(email, password).subscribe((response: any) => {
      if(response.status === "error"){
        alert(response.data);
        return;
      }
      alert("Login successful!");
      localStorage.setItem('username', response.data);
      this.router.navigate(['/user-home']);
    });

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);
     if(user){
       localStorage.setItem('username', user.username);
      window.location.href = '/user-home';
     }
  }
}
