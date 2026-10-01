import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <a href="#hero" class="footer-name">Manoj Kumar Pinniboyina <span>↑</span></a>
        <p>Bengaluru, Karnataka · Java · Spring Boot · IoT</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      display: flex;
      padding: 1.5rem 0;
      border-radius: 0;
      border-left: none;
      border-right: none;
      border-bottom: none;
      border-top: 1px solid var(--clr-line);
      color: var(--clr-text-muted);
      font-size: 0.82rem;
    }
    footer .container { display: flex; justify-content: space-between; gap: 1rem; width: 100%; }
    .footer-name { color: var(--clr-text); font-family: 'Space Grotesk', sans-serif; font-weight: 600; }
    .footer-name span { color: var(--clr-lime); }
    @media (max-width: 560px) {
      footer .container { flex-direction: column; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
