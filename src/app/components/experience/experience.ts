import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience">
      <div class="container">
        <h2 class="section-title outfit glow-text">My Journey</h2>
        <div class="timeline">
          @for (exp of experiences; track exp.title; let i = $index) {
            <div class="timeline-item" [class.left]="i % 2 === 0" [class.right]="i % 2 !== 0">
              <div class="glass timeline-content">
                <span class="date">{{ exp.date }}</span>
                <h3 class="outfit glow-text">{{ exp.title }}</h3>
                <span class="company">{{ exp.company }}</span>
                <p>{{ exp.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline { position: relative; padding: 2rem 0; }
    .timeline::after { content: ''; position: absolute; width: 2px; background: var(--grad-primary); top: 0; bottom: 0; left: 50%; margin-left: -1px; }
    .timeline-item { padding: 10px 40px; position: relative; width: 50%; }
    .timeline-item::after { content: ''; position: absolute; width: 20px; height: 20px; right: -10px; background-color: var(--clr-bg); border: 4px solid var(--clr-blue); top: 25px; border-radius: 50%; z-index: 1; }
    .left { left: 0; }
    .right { left: 50%; }
    .right::after { left: -10px; }
    .timeline-content { padding: 2rem; }
    .timeline-content .date { display: block; margin-bottom: 0.5rem; font-weight: 700; color: var(--clr-blue); }
    .timeline-content .company { display: block; margin-bottom: 1rem; font-style: italic; color: var(--clr-text-muted); }
    @media (max-width: 992px) {
      .timeline::after { left: 31px; }
      .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; }
      .timeline-item::after { left: 21px; }
      .right { left: 0; }
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Engineer Intern — Java Full Stack',
      company: 'Trinity Mobility · Bengaluru, India',
      date: 'Mar 2026 – Present',
      desc: 'Developing and maintaining Java and Angular-based full-stack applications for AI and IoT solutions. Working with Spring Boot, AngularJS, MS SQL, MongoDB, and Neo4j in an agile on-site environment.'
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'HexSoftwares · Remote',
      date: 'Aug 2025 – Sep 2025',
      desc: 'Built three AI-driven projects: an NLP-powered Chatbot, a real-time Face Detection system with OpenCV, and a Facial Recognition Attendance System for automated attendance management.'
    },
    {
      title: 'Java Developer Intern',
      company: 'Elevate Labs',
      date: 'Oct 2024 – Nov 2024',
      desc: 'Completed focused Java development projects covering core Java, OOP design patterns, collections, and JDBC-based database interaction.'
    },
    {
      title: 'BTech — Computer Science (AI & ML)',
      company: 'Andhra Engineering College',
      date: 'Nov 2021 – Apr 2025',
      desc: 'Graduated with 7.86 CGPA. Specialized in Machine Learning, Supervised & Unsupervised Learning, and AI systems. Active in NSS and Sports. Oracle Cloud Generative AI certified (2025).'
    }
  ];
}
