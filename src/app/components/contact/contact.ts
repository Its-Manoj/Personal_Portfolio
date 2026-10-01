import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-info">
            <p class="eyebrow">Contact</p>
            <h2 class="outfit">Let’s build something useful.</h2>
            <p>I’m happy to connect about Java, backend engineering, and IoT platform work.</p>
            <a class="email-link" href="mailto:manojkumar.p9392@gmail.com" target="_blank" rel="noopener noreferrer">manojkumar.p9392@gmail.com <span aria-hidden="true">↗</span></a>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/manoj-kumar-pinniboyina/" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/Its-Manoj" target="_blank" rel="noopener noreferrer" class="social-link">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://leetcode.com/u/manojkumarp9392/" target="_blank" rel="noopener noreferrer" class="social-link">LeetCode <span aria-hidden="true">↗</span></a>
              <a href="https://www.hackerrank.com/profile/manojkumar_p9392" target="_blank" rel="noopener noreferrer" class="social-link">HackerRank <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <a href="Manoj_Kumar.pdf" download="Manoj_Kumar.pdf" class="resume-link"><span>Resume</span><span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #contact { border-top: 1px solid var(--clr-line); }
    .contact-wrapper { display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: end; padding: 2rem 0; }
    .contact-info h2 { max-width: 520px; font-size: clamp(2rem, 4vw, 3.4rem); margin: 0.7rem 0; }
    .contact-info > p:not(.eyebrow) { color: var(--clr-text-muted); }
    .email-link { display: inline-block; margin-top: 1.3rem; color: var(--clr-lime); font-weight: 600; }
    .email-link span, .social-link span { margin-left: 0.35rem; }
    .social-links { display: flex; gap: 1.2rem; margin-top: 1.1rem; }
    .social-link { color: var(--clr-text-muted); font-size: 0.9rem; }
    .social-link:hover { color: var(--clr-coral); }
    .resume-link { display: inline-flex; align-items: center; gap: 1.5rem; padding: 0.8rem 0; border-bottom: 1px solid var(--clr-lime); color: var(--clr-lime); font-family: 'Space Grotesk', sans-serif; }
    @media (max-width: 620px) { .contact-wrapper { grid-template-columns: 1fr; align-items: start; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {}
