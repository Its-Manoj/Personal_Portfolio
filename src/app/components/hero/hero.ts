import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Typed: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero-section">
      <div class="container grid-two">
        <div class="hero-content">
          <h2 class="outfit">Hi, I'm <span class="glow-text">Manoj</span></h2>
          <h1>Java Full Stack Developer</h1>
          <p class="hero-subtext">Building <span #typingElement></span></p>
          <div class="hero-btns">
            <a href="#projects" class="btn btn-primary">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            <a href="ManojKumar.pdf" download="Manoj_Kumar_Resume.pdf" class="btn btn-outline">Download Resume <i class="fa-solid fa-download"></i></a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-wrapper glass">
            <img src="profile.png" alt="Manoj Portfolio">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid-two {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
    }
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: var(--nav-height);
    }
    .hero-content h1 {
      font-size: 4.5rem;
      line-height: 1.1;
      margin: 1rem 0;
      font-weight: 800;
    }
    .hero-subtext {
      font-size: 1.5rem;
      color: var(--clr-text-muted);
      margin-bottom: 2rem;
    }
    .hero-btns {
      display: flex;
      gap: 1.5rem;
    }
    .image-wrapper {
      position: relative;
      padding: 10px;
      border-radius: 30px;
      animation: float 6s ease-in-out infinite;
    }
    .image-wrapper img {
      border-radius: 20px;
      width: 100%;
      box-shadow: 0 0 30px rgba(0, 192, 249, 0.2);
    }
    .image-wrapper::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: var(--grad-primary);
      border-radius: 32px;
      z-index: -1;
      opacity: 0.5;
    }
    @media (max-width: 992px) {
      .grid-two { grid-template-columns: 1fr; text-align: center; }
      .hero-content { order: 2; }
      .hero-image { order: 1; max-width: 400px; margin: 0 auto; }
      .hero-btns { justify-content: center; }
      .hero-content h1 { font-size: 3rem; }
    }
  `]
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typingElement') typingRef!: ElementRef;

  ngAfterViewInit() {
    new Typed(this.typingRef.nativeElement, {
      strings: [
        'scalable Spring Boot APIs...',
        'dynamic Angular applications...',
        'AI & IoT-powered solutions...',
        'full-stack Java systems...'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}
