import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects">
      <div class="container">
        <p class="eyebrow">Selected work</p>
        <h2 class="section-title outfit">Real-Time Data Streaming & Workflow Platform</h2>
        <p class="section-intro">High-throughput platform for distributed event processing, real-time alerting, and automated business workflows.</p>
        <div class="projects-container">
          @for (project of projects; track project.title) {
            <article class="project-card">
              <div class="project-content">
                <div class="project-heading">
                  <p class="project-label">{{ project.type }}</p>
                  <h3 class="outfit">{{ project.title }}</h3>
                </div>
                <p>{{ project.desc }}</p>
                <div class="tech-stack">
                  @for (tech of project.tech; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>
              </div>
              <div class="project-ownership">
                <h4>Areas of contribution</h4>
                <ul>
                  @for (item of project.contributions; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    #projects { background: rgba(25, 30, 26, 0.5); border-top: 1px solid var(--clr-line); border-bottom: 1px solid var(--clr-line); }
    .project-card { display: grid; grid-template-columns: 1.1fr 0.9fr; border: 1px solid var(--clr-line); background: var(--clr-surface); animation: reveal-up 650ms both; }
    .project-content, .project-ownership { padding: clamp(1.3rem, 4vw, 2.5rem); }
    .project-heading { margin-bottom: 1.3rem; }
    .project-label { color: var(--clr-coral); text-transform: uppercase; font: 700 0.72rem 'Space Grotesk', sans-serif; margin-bottom: 0.55rem; }
    .project-content h3 { font-size: clamp(1.45rem, 3vw, 2rem); }
    .project-content > p { color: var(--clr-text-muted); margin-bottom: 1.6rem; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .tech-tag { padding: 0.32rem 0.58rem; border-radius: 3px; font-size: 0.78rem; border: 1px solid var(--clr-line); color: var(--clr-text-muted); }
    .project-ownership { border-left: 1px solid var(--clr-line); background: rgba(213, 243, 106, 0.025); }
    .project-ownership h4 { color: var(--clr-lime); font-size: 0.9rem; margin-bottom: 1rem; }
    .project-ownership ul { display: grid; gap: 0.9rem; list-style: none; }
    .project-ownership li { position: relative; padding-left: 1rem; color: var(--clr-text-muted); font-size: 0.92rem; }
    .project-ownership li::before { content: ''; position: absolute; left: 0; top: 0.65em; width: 5px; height: 5px; background: var(--clr-coral); }
    @media (max-width: 720px) {
      .project-card { grid-template-columns: 1fr; }
      .project-ownership { border-left: 0; border-top: 1px solid var(--clr-line); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Distributed Event Processing & Workflow Engine',
      type: 'Enterprise · Distributed Systems',
      desc: 'An enterprise microservices platform designed to ingest high-frequency streaming data, validate payloads, and execute automated business logic and alerting in real time.',
      tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'React', 'REST APIs'],
      contributions: [
        'High-Throughput Microservices: Developed scalable backend services using Java and Spring Boot to ingest, process, and route high-volume streaming events with minimal latency.',
        'Data Ingestion & Pipeline Reliability: Engineered data validation and transformation pipelines to standardize multi-source inputs and ensure downstream data consistency.',
        'Low-Latency In-Memory Computing: Integrated Redis caching mechanisms for fast geospatial lookups and state tracking across multi-tenant environments.',
        'End-to-End Workflow Management: Built full-stack configuration interfaces in React and established end-to-end operational logging and audit monitoring.'
      ]
    }
  ];
}
