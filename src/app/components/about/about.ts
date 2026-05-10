import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="container">
        <h2 class="section-title outfit glow-text">About Me</h2>
        <div class="glass about-card">
          <p>I'm a Java Full Stack Developer with a BTech in AI&ML, currently working as an Engineer Intern at Trinity Mobility (Bengaluru), where I build and maintain Java and Angular-based applications for cutting-edge AI and IoT solutions. My stack spans Spring Boot, AngularJS, MS SQL, MongoDB, and Neo4j. Previously, I completed an AI internship at HexSoftwares, building projects in computer vision and NLP — including a facial recognition attendance system. Certified as an Oracle Cloud Infrastructure 2025 Generative AI Professional, I'm passionate about writing clean, purposeful code that solves real-world problems. Let's build something meaningful together.</p>
        </div>
        
        <div id="skills" class="skills-grid">
          @for (skill of skills; track skill.name) {
            <div class="glass skill-card">
              <div class="skill-icon"><i [class]="skill.icon"></i></div>
              <h3>{{ skill.name }}</h3>
              <div class="skill-bar">
                <div class="skill-progress" [style.width]="skill.level"></div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-card { padding: 3rem; font-size: 1.1rem; margin-bottom: 4rem; line-height: 1.8; }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
    .skill-card { padding: 2rem; transition: var(--transition); }
    .skill-card:hover { transform: translateY(-10px); border-color: var(--clr-blue); background: rgba(0, 192, 249, 0.05); }
    .skill-icon { font-size: 2.5rem; margin-bottom: 1rem; color: var(--clr-blue); }
    .skill-bar { height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; margin-top: 1rem; overflow: hidden; }
    .skill-progress { height: 100%; background: var(--grad-primary); border-radius: 4px; }
  `]
})
export class AboutComponent {
  skills = [
    { name: 'Java', icon: 'fa-brands fa-java', level: '92%' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf', level: '88%' },
    { name: 'AngularJS', icon: 'fa-brands fa-angular', level: '82%' },
    { name: 'REST APIs', icon: 'fa-solid fa-cloud', level: '90%' },
    { name: 'MS SQL / MongoDB', icon: 'fa-solid fa-database', level: '80%' },
    { name: 'Neo4j', icon: 'fa-solid fa-diagram-project', level: '72%' },
    { name: 'AI / ML', icon: 'fa-solid fa-brain', level: '78%' },
    { name: 'Git / GitHub', icon: 'fa-brands fa-github', level: '85%' },
    { name: 'Python', icon: 'fa-brands fa-python', level: '75%' }
  ];
}
