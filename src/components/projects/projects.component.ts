import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  tags: string[];
  category: string;
  isPlaceholder?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styles: [`
    .track { will-change: transform; }

    .project-card { transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease; }
    .project-card:hover { transform: scale(1.05) translateY(-6px); box-shadow: 0 24px 48px -12px rgba(0,0,0,0.4); }

    .card-img { transition: transform 0.5s ease; }
    .project-card:hover .card-img { transform: scale(1.1); }

    .card-reveal {
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    .project-card:hover .card-reveal { transform: translateY(0); }

    .modal-backdrop { animation: bfadeIn 0.25s ease forwards; }
    .modal-panel { animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

    @keyframes bfadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp {
      from { opacity: 0; transform: scale(0.93) translateY(18px); }
      to   { opacity: 1; transform: scale(1)    translateY(0); }
    }

    .placeholder-pulse {
      animation: pulsate 2.4s ease-in-out infinite;
    }
    @keyframes pulsate {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50%       { opacity: 0.7; transform: scale(1.08); }
    }
  `]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly CARD_W  = 256; // px
  private readonly CARD_GAP = 20; // px
  readonly STEP = this.CARD_W + this.CARD_GAP;

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Dashboard Analytics',
      subtitle: 'ROI / Patient Register Ratio Tracking',
      description: 'A real-time analytics dashboard that visualises hospital ROI against patient registration volumes. Enables management to spot trends, optimise resource allocation, and make data-driven decisions across departments.',
      coverImage: 'assets/dashboard-3.jpg',
      tags: ['Angular', 'HIS', 'SQL', 'Analytics', 'KPIs'],
      category: 'Healthcare Analytics'
    },
    {
      id: 2,
      title: 'Pharmacy Management',
      subtitle: 'OP / IP Prescription & Dispensing',
      description: 'An end-to-end pharmacy module integrated with the HIS. Handles prescription workflows, medication dispensing, and inventory tracking for both Outpatient (OP) and Inpatient (IP) departments, reducing dispensing errors and wait times.',
      coverImage: 'assets/4-eHospital-1.jpg',
      tags: ['HIS', 'EMR', 'Pharmacy', 'SQL'],
      category: 'Hospital Information System'
    },
    { id: 3, title: 'Coming Soon', subtitle: 'New project in development', description: '', coverImage: '', tags: [], category: '', isPlaceholder: true },
    { id: 4, title: 'Coming Soon', subtitle: 'New project in development', description: '', coverImage: '', tags: [], category: '', isPlaceholder: true },
    { id: 5, title: 'Coming Soon', subtitle: 'New project in development', description: '', coverImage: '', tags: [], category: '', isPlaceholder: true },
  ];

  // Three copies of the list for seamless infinite loop: [copy1 | copy2 | copy3]
  readonly extended = [...this.projects, ...this.projects, ...this.projects];
  readonly n = this.projects.length;

  currentIndex   = signal(this.n); // Start at copy2[0]
  animated       = signal(true);
  selectedProject = signal<Project | null>(null);

  private paused = false;
  private timer: any;

  trackTransform = computed(() =>
    `translateX(-${this.currentIndex() * this.STEP}px)`
  );

  // Which real project index (0-based) is at the front
  activeSlide = computed(() => ((this.currentIndex() % this.n) + this.n) % this.n);

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.stop();  }

  start() {
    this.stop();
    this.timer = setInterval(() => { if (!this.paused) this.next(); }, 3000);
  }

  stop() {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }

  next() {
    this.animated.set(true);
    this.currentIndex.update(i => i + 1);
    // If we passed copy2's last item, silently jump back to copy2's first
    if (this.currentIndex() >= this.n * 2) {
      setTimeout(() => this.silentJump(this.n), 420);
    }
  }

  prev() {
    this.animated.set(true);
    this.currentIndex.update(i => i - 1);
    // If we went behind copy2's first item, silently jump to copy2's last
    if (this.currentIndex() < this.n) {
      setTimeout(() => this.silentJump(this.n * 2 - 1), 420);
    }
  }

  goTo(i: number) {
    this.animated.set(true);
    this.currentIndex.set(this.n + i);
    this.start(); // reset timer
  }

  private silentJump(to: number) {
    this.animated.set(false);
    this.currentIndex.set(to);
    // Re-enable transition after two frames (ensures DOM has repainted)
    requestAnimationFrame(() => requestAnimationFrame(() => this.animated.set(true)));
  }

  pause()  { this.paused = true;  }
  resume() { this.paused = false; }

  open(project: Project) {
    if (!project.isPlaceholder) this.selectedProject.set(project);
  }

  close() { this.selectedProject.set(null); }
}
