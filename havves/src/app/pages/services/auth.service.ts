
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/Login.model'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenState: BehaviorSubject<boolean>

  constructor(private http: HttpClient) {
    const initialTokenState = !!localStorage.getItem('token')
    this.tokenState = new BehaviorSubject<boolean>(initialTokenState);

  }
  getTokenState(): Observable<boolean> {
    return this.tokenState.asObservable();
  }
  updateTokenState(): void {
    const hasToken = !!localStorage.getItem('token');
    this.tokenState.next(hasToken);
  }

  
  login(loginObj:Login) {
    if (!loginObj) return
    console.log(loginObj);
    return this.http.post<any>('https://u06-fullstack-recipe-app-hevaldemirel.onrender.com/api/login', loginObj)
  }
  registerUser(userData: any): Observable<any> {
    const url = 'https://u06-fullstack-recipe-app-hevaldemirel.onrender.com/api/register';
    return this.http.post(url, userData);
  }

  postLogout(token: any) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    console.log(headers)
    return this.http.post<any>('https://u06-fullstack-recipe-app-hevaldemirel.onrender.com/api/logout', {}, {
      headers
    })
  }


}

