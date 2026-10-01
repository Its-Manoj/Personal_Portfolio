import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section id="hero" class="hero-section">
      <div class="container grid-two">
        <div class="hero-content">
          <p class="eyebrow">Associate Software Engineer · Bengaluru, India</p>
          <h1>Manoj Kumar <span class="glow-text">Pinniboyina</span></h1>
          <h2>Software Engineer | Java · Spring Boot · Microservices · Full-Stack Development</h2>
          <p class="hero-subtext">Hands-on experience building web applications and microservices with Java, Spring Boot, and REST APIs. I develop end-to-end features, integrate event messaging, and build responsive user interfaces.</p>
          <p class="hero-stat"><strong>Enterprise</strong><span>Experience</span></p>
          <div class="hero-btns">
            <a href="#projects" class="btn btn-primary">Explore my work <span aria-hidden="true">→</span></a>
            <a href="Manoj_Kumar.pdf" download="Manoj_Kumar.pdf" class="btn btn-outline">Download resume <span aria-hidden="true">↓</span></a>
          </div>
          <a class="hero-email" href="mailto:manojkumar.p9392@gmail.com" target="_blank" rel="noopener noreferrer">manojkumar.p9392@gmail.com</a>
        </div>
        <div class="hero-image">
          <div class="portrait-frame">
            <div class="image-wrapper">
              <img ngSrc="profile.png" width="1024" height="1024" priority alt="Portrait of Manoj Kumar Pinniboyina">
            </div>
            <div class="portrait-caption"><span class="status-dot"></span> Building &amp; Exploring Tech</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid-two {
      display: grid;
      grid-template-columns: 1.15fr 0.75fr;
      gap: clamp(2rem, 7vw, 6rem);
      align-items: center;
    }
    .hero-section {
      min-height: min(900px, 100svh);
      display: flex;
      align-items: center;
      padding-top: calc(var(--nav-height) + 3rem);
      padding-bottom: 5rem;
      overflow: hidden;
    }
    .hero-content h1 {
      max-width: 760px;
      font-size: clamp(3.15rem, 7vw, 6.2rem);
      margin: 1rem 0 1.2rem;
      font-weight: 600;
      animation: reveal-up 650ms both;
    }
    .hero-content h2 {
      max-width: 570px;
      color: var(--clr-lime);
      font-size: clamp(1.2rem, 2.2vw, 1.65rem);
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .hero-subtext {
      max-width: 540px;
      font-size: 1.05rem;
      color: var(--clr-text-muted);
      margin-bottom: 1.8rem;
    }
    .hero-stat {
      display: flex;
      flex-direction: column;
      width: fit-content;
      margin: 0 0 1.5rem;
      padding-left: 0.75rem;
      border-left: 2px solid var(--clr-lime);
    }
    .hero-stat strong { color: var(--clr-lime); font: 600 1.25rem 'Space Grotesk', sans-serif; }
    .hero-stat span { color: var(--clr-text-muted); font-size: 0.78rem; }
    .hero-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    .hero-email {
      display: inline-block;
      margin-top: 1.4rem;
      color: var(--clr-text-muted);
      font-size: 0.9rem;
      transition: color var(--transition);
    }
    .hero-email:hover { color: var(--clr-lime); }
    .portrait-frame {
      position: relative;
      padding: 1.2rem 1.2rem 1rem;
      border: 1px solid var(--clr-line);
      background: var(--clr-surface);
      animation: reveal-up 800ms 120ms both;
    }
    .image-wrapper {
      overflow: hidden;
      aspect-ratio: 1 / 1;
      background: var(--clr-surface-raised);
    }
    .image-wrapper img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: saturate(0.84);
      transition: transform 700ms ease, filter 700ms ease;
    }
    .portrait-frame:hover img { transform: scale(1.025); filter: saturate(1); }
    .portrait-caption {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      color: var(--clr-text-muted);
      padding-top: 0.9rem;
      font-size: 0.78rem;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--clr-lime);
      box-shadow: 0 0 12px rgba(213, 243, 106, 0.5);
    }
    @media (max-width: 992px) {
      .grid-two { grid-template-columns: 1fr 0.72fr; gap: 2rem; }
      .hero-content h1 { font-size: clamp(2.8rem, 6vw, 4.3rem); }
    }
    @media (max-width: 720px) {
      .grid-two { grid-template-columns: 1fr; }
      .hero-section { min-height: auto; padding-top: calc(var(--nav-height) + 2.5rem); }
      .hero-image { grid-row: 1; max-width: 300px; }
      .hero-content h1 { font-size: clamp(2.7rem, 12vw, 4rem); }
      .portrait-frame { padding: 0.8rem; }
    }
    @media (max-width: 420px) {
      .hero-btns { align-items: stretch; flex-direction: column; }
      .hero-btns .btn { justify-content: center; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}
