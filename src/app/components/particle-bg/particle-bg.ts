import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particle-bg',
  standalone: true,
  template: `<canvas #canvas id="particle-canvas"></canvas>`,
  styles: [`
    #particle-canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.22;
      pointer-events: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticleBgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId?: number;
  private reducedMotion = false;
  private readonly resizeListener = () => {
    this.resize();
    this.initParticles();
    this.draw();
  };

  ngAfterViewInit() {
    const context = this.canvasRef.nativeElement.getContext('2d');
    if (!context) return;
    this.ctx = context;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resize();
    this.initParticles();
    this.draw();
    if (!this.reducedMotion) this.animate();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.animationId !== undefined) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeListener);
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles() {
    this.particles = [];
    const count = window.innerWidth < 700 ? 16 : 34;
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height, i));
    }
  }

  private animate() {
    this.draw(true);
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private draw(move = false) {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach((p, i) => {
      if (move) p.update(canvas.width, canvas.height);
      p.draw(this.ctx);

      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 118) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(213, 243, 106, ${(1 - dist / 118) * 0.12})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });

  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;

  constructor(width: number, height: number, index: number) {
    this.x = ((index * 0.61803398875) % 1) * width;
    this.y = ((index * 0.75487766625) % 1) * height;
    this.vx = Math.sin(index * 1.73) * 0.25;
    this.vy = Math.cos(index * 1.37) * 0.25;
    this.radius = 0.6 + (index % 4) * 0.2;
    this.color = index % 2 === 0 ? '#d5f36a' : '#ff8069';
    this.opacity = 0.12 + (index % 4) * 0.05;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}
