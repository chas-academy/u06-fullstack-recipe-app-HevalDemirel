import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): Observable<any> {
    // Simulate a login API call
    return of({ token: 'fake-jwt-token' }); // Replace with real authentication logic
  }
}
