import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  images: string[];
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

    .fullscreen-backdrop { animation: bfadeIn 0.2s ease forwards; }
    .fullscreen-img { animation: fsZoomIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
    @keyframes fsZoomIn {
      from { opacity: 0; transform: scale(0.88); }
      to   { opacity: 1; transform: scale(1); }
    }
  `]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly CARD_W  = 256;
  private readonly CARD_GAP = 20;
  readonly STEP = this.CARD_W + this.CARD_GAP;

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Dashboard Analytics',
      subtitle: 'Hospital Performance & KPI Monitoring',
      description: 'A comprehensive analytics dashboard providing real-time visibility into hospital operations. Tracks key performance indicators including surgical statistics, bed occupancy rates, outpatient examination metrics, and patient registration data to support data-driven management decisions.',
      coverImage: 'assets/Dashboard/Dashboard-poster.png',
      images: [
        'assets/Dashboard/Dashboard-poster.png',
        'assets/Dashboard/CONGSUATGIUONGBENH.jpg',
        'assets/Dashboard/KHAMBENH-1.jpg',
        'assets/Dashboard/KHAMBENH-2.jpg',
        'assets/Dashboard/KHAMBENH-3.jpg',
        'assets/Dashboard/MHBT-1.png',
        'assets/Dashboard/THONGKEPHAUTHUAT.jpg',
        'assets/Dashboard/THONGKEPHAUTHUAT-2.jpg',
      ],
      tags: ['Angular', 'HIS', 'SQL', 'Analytics', 'KPIs', 'Dashboard'],
      category: 'Healthcare Analytics'
    },
    {
      id: 2,
      title: 'Patient Queue Management',
      subtitle: 'Outpatient Queue & Flow Optimisation',
      description: 'A queue management system that organises and displays patient waiting lists for outpatient departments. Reduces congestion at counters, improves patient experience, and provides clinical staff with real-time queue status and call controls.',
      coverImage: 'assets/QMS/QMS - poster.png',
      images: [
        'assets/QMS/QMS - poster.png',
        'assets/QMS/QMS-1.jpg',
        'assets/QMS/QMS-2.jpg.png',
      ],
      tags: ['Queue System', 'HIS', 'Patient Flow', 'Outpatient', 'SQL'],
      category: 'Patient Experience'
    },
    {
      id: 3,
      title: 'Pharmacy Management',
      subtitle: 'Prescription & Drug Interaction Control',
      description: 'Integrated pharmacy module for managing outpatient and inpatient prescriptions. Features drug interaction alerts, dispensing workflows, and real-time inventory tracking to minimise medication errors and streamline pharmacy department operations.',
      coverImage: 'assets/Hi-Pha/pharmacy-poster.png',
      images: [
        'assets/Hi-Pha/pharmacy-poster.png',
        'assets/Hi-Pha/HI-PHA-1.jpg',
        'assets/Hi-Pha/HI-PHA-2.jpg',
        'assets/Hi-Pha/HI-PHA-3.jpg',
      ],
      tags: ['HIS', 'EMR', 'Pharmacy', 'Drug Interaction', 'SQL'],
      category: 'Hospital Information System'
    },
    {
      id: 4,
      title: 'Equipment Management',
      subtitle: 'IT Asset Lifecycle & Vendor Tracking',
      description: 'A full-cycle IT asset management system for tracking hospital equipment including laptops, printers, and other devices. Manages purchase orders, maintenance schedules, replacement timelines, and vendor repair workflows to ensure operational continuity.',
      coverImage: 'assets/QLTrangThietBi/Equipment-poster.png',
      images: [
        'assets/QLTrangThietBi/Equipment-poster.png',
        'assets/QLTrangThietBi/TTB-1.jpg',
        'assets/QLTrangThietBi/TTB-2.jpg',
      ],
      tags: ['Asset Management', 'IT Equipment', 'Vendor Management', 'Maintenance', 'SQL'],
      category: 'IT Operations'
    },
    {
      id: 5,
      title: 'Consultation & Admission',
      subtitle: 'Bed Booking & Room Reservation',
      description: 'A pre-admission consultation module allowing patients to register and book a bed or room before hospital arrival. Streamlines the admission process, reduces wait times at the counter, and improves ward capacity planning for clinical coordinators.',
      coverImage: 'assets/TuVanNhapVien/admission-system-poster.png',
      images: [
        'assets/TuVanNhapVien/admission-system-poster.png',
        'assets/TuVanNhapVien/QL-Giuong.jpg',
        'assets/TuVanNhapVien/QL-Giuong-2.jpg',
        'assets/TuVanNhapVien/QL-Giuong-3.jpg',
      ],
      tags: ['Bed Management', 'Admission', 'Room Booking', 'HIS', 'Patient Registration'],
      category: 'Patient Admission'
    },
  ];

  readonly extended = [...this.projects, ...this.projects, ...this.projects];
  readonly n = this.projects.length;

  currentIndex    = signal(this.n);
  animated        = signal(true);
  selectedProject = signal<Project | null>(null);
  modalImageIndex = signal(0);
  isFullscreen    = signal(false);

  private paused = false;
  private timer: any;
  private keyHandler = (e: KeyboardEvent) => {
    if (this.isFullscreen()) {
      if (e.key === 'Escape')     { this.isFullscreen.set(false); return; }
      if (e.key === 'ArrowRight') { this.nextImage(); return; }
      if (e.key === 'ArrowLeft')  { this.prevImage(); return; }
    } else if (this.selectedProject()) {
      if (e.key === 'Escape') { this.close(); }
    }
  };

  trackTransform = computed(() =>
    `translateX(-${this.currentIndex() * this.STEP}px)`
  );

  activeSlide = computed(() => ((this.currentIndex() % this.n) + this.n) % this.n);

  modalImage = computed(() => {
    const p = this.selectedProject();
    if (!p) return '';
    return p.images[this.modalImageIndex()] ?? p.coverImage;
  });

  ngOnInit()    { this.start(); document.addEventListener('keydown', this.keyHandler); }
  ngOnDestroy() { this.stop();  document.removeEventListener('keydown', this.keyHandler); }

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
    if (this.currentIndex() >= this.n * 2) {
      setTimeout(() => this.silentJump(this.n), 420);
    }
  }

  prev() {
    this.animated.set(true);
    this.currentIndex.update(i => i - 1);
    if (this.currentIndex() < this.n) {
      setTimeout(() => this.silentJump(this.n * 2 - 1), 420);
    }
  }

  goTo(i: number) {
    this.animated.set(true);
    this.currentIndex.set(this.n + i);
    this.start();
  }

  private silentJump(to: number) {
    this.animated.set(false);
    this.currentIndex.set(to);
    requestAnimationFrame(() => requestAnimationFrame(() => this.animated.set(true)));
  }

  pause()  { this.paused = true;  }
  resume() { this.paused = false; }

  open(project: Project) {
    if (!project.isPlaceholder) {
      this.selectedProject.set(project);
      this.modalImageIndex.set(0);
      this.isFullscreen.set(false);
    }
  }

  close() {
    this.selectedProject.set(null);
    this.isFullscreen.set(false);
  }

  nextImage() {
    const p = this.selectedProject();
    if (!p) return;
    this.modalImageIndex.update(i => (i + 1) % p.images.length);
  }

  prevImage() {
    const p = this.selectedProject();
    if (!p) return;
    this.modalImageIndex.update(i => (i - 1 + p.images.length) % p.images.length);
  }

  openFullscreen()  { this.isFullscreen.set(true); }
  closeFullscreen() { this.isFullscreen.set(false); }
}
