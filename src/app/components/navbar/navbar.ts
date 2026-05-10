import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="container nav-content">
        <a href="#" class="logo outfit glow-text">MANOJ.DEV</a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
           <button class="btn btn-outline theme-btn" (click)="toggleTheme()">
            <i class="fa-solid" [class.fa-moon]="!isDarkMode" [class.fa-sun]="isDarkMode"></i>
           </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: var(--nav-height);
      display: flex;
      align-items: center;
      z-index: 1000;
      transition: var(--transition);
    }
    nav.scrolled {
      background: rgba(13, 13, 13, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--glass-border);
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { color: var(--clr-text); transition: var(--transition); }
    .nav-links a:hover { color: var(--clr-blue); }
    .theme-btn { padding: 0.5rem 0.8rem; }
    @media (max-width: 768px) {
      .nav-links { display: none; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isDarkMode = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    // Theme toggle logic can be expanded here
  }
}
