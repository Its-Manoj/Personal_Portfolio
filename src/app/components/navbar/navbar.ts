import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav>
      <div class="container nav-content">
        <a href="#hero" class="logo outfit" aria-label="Manoj Kumar Pinniboyina, home">MK<span>.</span></a>
        <ul id="primary-navigation" class="nav-links" [class.is-open]="isMenuOpen()">
          <li><a href="#about" (click)="closeMenu()">Profile</a></li>
          <li><a href="#projects" (click)="closeMenu()">Work</a></li>
          <li><a href="#experience" (click)="closeMenu()">Experience</a></li>
          <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
        </ul>
        <button class="menu-toggle" type="button" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen()" aria-controls="primary-navigation" [attr.aria-label]="isMenuOpen() ? 'Close navigation menu' : 'Open navigation menu'">
          <span></span><span></span>
        </button>
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
      background: rgba(17, 21, 18, 0.88);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--clr-line);
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .logo { font-size: 1.35rem; font-weight: 700; color: var(--clr-text); }
    .logo span { color: var(--clr-coral); }
    .nav-links { display: flex; gap: 1.8rem; list-style: none; }
    .nav-links a { color: var(--clr-text-muted); font-size: 0.9rem; transition: color var(--transition); }
    .nav-links a:hover { color: var(--clr-lime); }
    .menu-toggle { display: none; width: 42px; height: 42px; padding: 10px; border: 1px solid var(--clr-line); border-radius: 4px; background: transparent; color: var(--clr-text); }
    .menu-toggle span { display: block; height: 2px; margin: 5px 0; background: currentColor; transition: transform var(--transition); }
    @media (max-width: 768px) {
      .nav-content { position: relative; }
      .menu-toggle { display: block; }
      .nav-links { display: none; position: absolute; top: calc(var(--nav-height) - 0.4rem); right: 0; left: 0; flex-direction: column; gap: 0; padding: 0.4rem 1rem; border: 1px solid var(--clr-line); background: var(--clr-surface); }
      .nav-links.is-open { display: flex; }
      .nav-links a { display: block; padding: 0.85rem 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() { this.isMenuOpen.update((open) => !open); }
  closeMenu() { this.isMenuOpen.set(false); }
}
