import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="container">
        <h2 class="section-title outfit glow-text">Featured Projects</h2>
        <div class="projects-container">
          @for (project of projects; track project.title) {
            <div class="glass project-card">
              <div class="project-content">
                <h3 class="outfit">{{ project.title }}</h3>
                <p>{{ project.desc }}</p>
                <div class="tech-stack">
                  @for (tech of project.tech; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>
                <div class="project-links">
                  <a [href]="project.link" class="btn-link">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  <a [href]="project.github" class="btn-link">GitHub <i class="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2.5rem; }
    .project-card { overflow: hidden; transition: var(--transition); }
    .project-card:hover { transform: scale(1.02) translateY(-10px); border-color: var(--clr-purple); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); }
    .project-content { padding: 2.5rem; }
    .project-content h3 { font-size: 1.8rem; margin-bottom: 1rem; }
    .project-content p { color: var(--clr-text-muted); margin-bottom: 1.5rem; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 2rem; }
    .tech-tag { background: rgba(255, 255, 255, 0.05); padding: 0.3rem 1rem; border-radius: 20px; font-size: 0.85rem; border: 1px solid var(--glass-border); }
    .project-links { display: flex; gap: 2rem; }
    .btn-link { display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; font-weight: 600; transition: var(--transition); }
    .btn-link:hover { color: var(--clr-blue); }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Weather Forecast App',
      desc: 'A JavaFX-based desktop application that fetches real-time weather data via API. Features a dynamic UI that changes background colors and themes based on weather conditions — Sunny, Cloudy, Rain, and Snow.',
      tech: ['Java', 'JavaFX', 'REST API', 'JSON'],
      link: '#',
      github: 'https://github.com/Its-Manoj/'
    },
    {
      title: 'Employee Management System',
      desc: 'A full-featured Java web application using Servlets, JDBC, and MySQL for complete CRUD operations — add, update, delete, and search employees. Deployed on Apache Tomcat with a clean MVC structure.',
      tech: ['Java', 'Servlets', 'JDBC', 'MySQL', 'Tomcat'],
      link: '#',
      github: 'https://github.com/Its-Manoj/'
    },
    {
      title: 'Facial Recognition Attendance System',
      desc: 'An AI-powered automated attendance system built with Python and OpenCV. Uses facial recognition to identify and mark attendance, eliminating manual processes and improving accuracy and security.',
      tech: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'AI/ML'],
      link: '#',
      github: 'https://github.com/Its-Manoj/'
    }
  ];
}
