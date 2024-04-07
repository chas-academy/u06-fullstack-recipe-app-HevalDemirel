import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Login } from '../models/Login.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  showerrormessage:string='';
  constructor(private router: Router, private authService: AuthService) {
    this.loginObj = new Login();
    console.log(this.loginObj);
  }
  onLogin() {
    this.authService.login(this.loginObj)?.subscribe({
      next: (res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.authService.updateTokenState()
          console.log(localStorage.getItem('token'));
          
          alert('Login Success');
          this.router.navigateByUrl('/home')

        } else {
          alert(res.message);
        }
      },
      error:(error)=>{
        this.showerrormessage=error.error.message;
      }
    })
    
  }
}
