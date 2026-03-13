import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <!-- Mobile Menu Toggle Button -->
      <button class="mobile-menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-label="Toggle navigation menu">
        <span class="hamburger" [class.open]="menuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <!-- Navigation Sidebar -->
      <nav class="main-nav" [class.open]="menuOpen()">
        <div class="nav-header">
          <h1>Angular 18 Learning</h1>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/bindings" routerLinkActive="active" (click)="closeMenu()">Bindings</a></li>
          <li><a routerLink="/control-flow" routerLinkActive="active" (click)="closeMenu()">Control Flow</a></li>
          <li><a routerLink="/directives" routerLinkActive="active" (click)="closeMenu()">Directives</a></li>
          <li><a routerLink="/components" routerLinkActive="active" (click)="closeMenu()">Components</a></li>
          <li><a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a></li>
          <li><a routerLink="/forms/reactive" routerLinkActive="active" (click)="closeMenu()">Reactive Forms</a></li>
          <li><a routerLink="/forms/template" routerLinkActive="active" (click)="closeMenu()">Template Forms</a></li>
          <li><a routerLink="/http" routerLinkActive="active" (click)="closeMenu()">HTTP</a></li>
          <li><a routerLink="/signals" routerLinkActive="active" (click)="closeMenu()">Signals</a></li>
          <li><a routerLink="/module-based" routerLinkActive="active" (click)="closeMenu()">Module-Based</a></li>
        </ul>
      </nav>

      <!-- Overlay for mobile menu -->
      @if (menuOpen()) {
        <div class="menu-overlay" (click)="closeMenu()"></div>
      }

      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-18-learning-project';
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
