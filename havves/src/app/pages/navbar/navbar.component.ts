import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Token } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { state } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private breakpointObserver = inject(BreakpointObserver);
  private authservice = inject(AuthService);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    // ngOnInit(): void {
    // this.authservice.getTokenState().subscribe(state => {
    //   this.loggedIn = state
    // })
    // }
  loggedIn: boolean = false
  // logout() {
  //   const token = localStorage.getItem('token');
  //   this.authservice.postLogout(token).subscribe((res) => {
  //     localStorage.removeItem('token');
  //     this.authservice.updateTokenState()
  //     console.log(res);
  //   });
  // }
}









