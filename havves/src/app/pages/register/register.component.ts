import { Component } from '@angular/core';
import { Register } from '../models/Register.model';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterLink],
  templateUrl:'./register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerdetails: Register;
  errorMessage: string = ''; 


  constructor(private auth: AuthService, private router: Router) { 
    this.registerdetails = new Register();
  }

  register() {
    this.auth.registerUser(this.registerdetails).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        alert('Your account has been created successfully. Please login.');

        
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration error', error);
        this.errorMessage='Registration failed. Please try again.'
      }
    });
  }
}
