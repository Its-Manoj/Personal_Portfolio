import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="glass">
      <div class="container">
        <p>&copy; 2026 Manoj Kumar Pinniboyina. All rights reserved. Built with Angular.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 2rem 0;
      text-align: center;
      border-radius: 0;
      border-left: none;
      border-right: none;
      border-bottom: none;
      margin-top: 4rem;
    }
  `]
})
export class FooterComponent {}
