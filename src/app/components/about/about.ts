import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about">
      <div class="container">
        <p class="eyebrow">Profile</p>
        <h2 class="section-title outfit">Backend and full-stack development.</h2>
        <p class="section-intro">Software Engineer specializing in backend services and full-stack application development. I build REST APIs with Java and Spring Boot, develop responsive user interfaces, and work with data pipelines. I focus on clean architecture, well-documented APIs, maintainable code, and reliable systems.</p>
        <div id="skills" class="skills-grid">
          @for (group of skillGroups; track group.name) {
            <div class="skill-group">
              <h3>{{ group.name }}</h3>
              <div class="skill-list">
                @for (skill of group.items; track skill) {
                  <span class="skill-tag">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    #about { border-top: 1px solid var(--clr-line); }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); border-top: 1px solid var(--clr-line); border-bottom: 1px solid var(--clr-line); }
    .skill-group { padding: 1.5rem 1.4rem 1.6rem 0; }
    .skill-group + .skill-group { border-left: 1px solid var(--clr-line); padding-left: 1.4rem; }
    .skill-group h3 { font-size: 0.9rem; margin-bottom: 1rem; color: var(--clr-lime); }
    .skill-list { display: flex; flex-wrap: wrap; gap: 0.55rem; }
    .skill-tag { padding: 0.35rem 0.6rem; border: 1px solid var(--clr-line); border-radius: 3px; color: var(--clr-text-muted); font-size: 0.84rem; }
    @media (max-width: 700px) {
      .skills-grid { grid-template-columns: 1fr; }
      .skill-group, .skill-group + .skill-group { padding: 1.2rem 0; border-left: 0; }
      .skill-group + .skill-group { border-top: 1px solid var(--clr-line); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  skillGroups = [
    { name: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JSON', 'Hibernate', 'JPA'] },
    { name: 'Frontend', items: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Responsive Design', 'Tailwind CSS'] },
    { name: 'Data & messaging', items: ['Event-Driven Architecture', 'Apache Kafka', 'Redis', 'Data Processing & Validation', 'SQL', 'Neo4j'] },
    { name: 'Tools & practices', items: ['Git', 'GitHub', 'Agile / Scrum', 'CI/CD', 'Error Handling & Logging', 'Docker', 'Jira'] }
  ];
}
