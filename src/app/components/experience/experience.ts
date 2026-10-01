import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience">
      <div class="container">
        <p class="eyebrow">Experience</p>
        <h2 class="section-title outfit">Building for production.</h2>
        <article class="experience-entry">
          <div class="experience-meta">
            <span class="date">March 2026 — Present</span>
            <span class="employment-note">Internship: March — June 2026</span>
          </div>
          <div class="experience-detail">
            <h3 class="outfit">Associate Software Engineer</h3>
            <p class="company">Trinity Mobility · Bengaluru, Karnataka</p>
            <ul>
              @for (item of responsibilities; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>
        </article>
        <div class="education-entry">
          <div>
            <p class="eyebrow">Education</p>
            <h3>BTech — Artificial Intelligence & Machine Learning</h3>
            <p>Andhra Engineering College, JNTUA</p>
          </div>
          <div class="education-result"><span>2021 — 2025</span><strong>8.2 / 10</strong><small>CGPA</small></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-entry { display: grid; grid-template-columns: 0.65fr 1.35fr; gap: 2rem; padding: 1.8rem 0 2.2rem; border-top: 1px solid var(--clr-line); }
    .date { display: block; color: var(--clr-lime); font: 600 0.9rem 'Space Grotesk', sans-serif; }
    .employment-note { display: block; margin-top: 0.5rem; color: var(--clr-text-muted); font-size: 0.82rem; }
    .experience-detail h3 { font-size: 1.45rem; margin-bottom: 0.45rem; }
    .company { color: var(--clr-coral); margin-bottom: 1.2rem; }
    .experience-detail ul { display: grid; gap: 0.7rem; padding-left: 1.1rem; color: var(--clr-text-muted); }
    .experience-detail li::marker { color: var(--clr-lime); }
    .education-entry { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; padding: 1.5rem 0; border-top: 1px solid var(--clr-line); border-bottom: 1px solid var(--clr-line); }
    .education-entry .eyebrow { margin-bottom: 0.55rem; }
    .education-entry h3 { font-size: 1.1rem; margin-bottom: 0.4rem; }
    .education-entry p:not(.eyebrow) { color: var(--clr-text-muted); font-size: 0.9rem; }
    .education-result { display: grid; grid-template-columns: auto auto; column-gap: 0.6rem; align-items: baseline; text-align: right; white-space: nowrap; }
    .education-result span { grid-column: 1 / -1; color: var(--clr-text-muted); font-size: 0.8rem; }
    .education-result strong { color: var(--clr-lime); font: 600 1.45rem 'Space Grotesk', sans-serif; }
    .education-result small { color: var(--clr-text-muted); }
    @media (max-width: 680px) {
      .experience-entry { grid-template-columns: 1fr; gap: 1rem; }
      .education-entry { align-items: flex-start; }
      .education-result { display: flex; flex-direction: column; align-items: flex-end; gap: 0.15rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  responsibilities = [
    'Build and maintain Java/Spring Boot microservices and REST APIs alongside user-facing platform features.',
    'Integrate Kafka and Redis to support real-time data pipelines and connected services.',
    'Implement data validation and normalization, and write automated tests for reliable downstream processing.',
    'Collaborate with an Agile engineering team to improve code quality, strengthen logging, and troubleshoot issues.'
  ];
}
