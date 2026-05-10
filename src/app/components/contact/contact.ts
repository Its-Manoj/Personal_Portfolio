import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact">
      <div class="container">
        <div class="glass contact-wrapper">
          <div class="contact-info">
            <h2 class="outfit glow-text">Get In Touch</h2>
            <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/manoj-kumar-pinniboyina/" target="_blank" class="social-icon"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/Its-Manoj/" target="_blank" class="social-icon"><i class="fa-brands fa-github"></i></a>
              <a href="mailto:manojyadhav9182@gmail.com" class="social-icon"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          <form (submit)="sendEmail($event)" class="contact-form">
            <div class="form-group">
              <input type="text" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">Send Message <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-wrapper { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; padding: 4rem; }
    .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
    .form-group input, .form-group textarea {
      width: 100%; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--glass-border);
      padding: 1rem; border-radius: 12px; color: var(--clr-text); font-family: inherit; transition: var(--transition);
    }
    .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--clr-blue); background: rgba(255, 255, 255, 0.05); }
    .w-full { width: 100%; justify-content: center; }
    .social-links { display: flex; gap: 1.5rem; margin-top: 2rem; }
    .social-icon { font-size: 1.8rem; transition: var(--transition); }
    .social-icon:hover { color: var(--clr-purple); transform: translateY(-5px); }
    @media (max-width: 992px) { .contact-wrapper { grid-template-columns: 1fr; padding: 2rem; gap: 2rem; } }
  `]
})
export class ContactComponent {
  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement).value;
    const email = (form.querySelector('[name="email"]') as HTMLInputElement).value;
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:manojyadhav9182@gmail.com?subject=${subject}&body=${body}`;
  }
}
