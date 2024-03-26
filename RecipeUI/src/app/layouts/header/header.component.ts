import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {
        alert('Header komponenten är igång')
    }
}

// Fixa stylea osv snygg header komponent, kanske ikoner färg osv
// ska även fungera bra i mobilvy + desktop
// sedan gör samma sak för footer
// skapa upp footer filerna  footer.component.ts      html och scss
// sedan importera och rendera footer komponenten på samma sätt som du gör med header i
// app.component.html