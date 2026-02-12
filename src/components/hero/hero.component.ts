import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, NgOptimizedImage],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Healthcare Software Developer', 'IT Supervisor', 'System Architect', 'Data Analyst'];
  currentRole = signal('');
  
  // Slideshow State
  heroImages = [
    'https://picsum.photos/id/48/800/800',  // Tech/Laptop
    'https://picsum.photos/id/180/800/800', // Notebook/Work
    'https://picsum.photos/id/370/800/800', // City/Urban
    'https://picsum.photos/id/3/800/800'    // Tech
  ];
  currentImageIndex = signal(0);
  slideInterval: any;
  isPaused = false;

  // Typewriter State
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 2000;
  typewriterTimer: any;

  ngOnInit() {
    this.type();
    this.startSlideShow();
  }

  ngOnDestroy() {
    clearTimeout(this.typewriterTimer);
    this.stopSlideShow();
  }

  // --- Slideshow Logic ---

  startSlideShow() {
    this.stopSlideShow();
    // Auto-change every 3 seconds
    this.slideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextImage();
      }
    }, 3000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  nextImage() {
    this.currentImageIndex.update(i => (i + 1) % this.heroImages.length);
  }

  prevImage() {
    this.currentImageIndex.update(i => (i - 1 + this.heroImages.length) % this.heroImages.length);
  }

  onImageHover() {
    this.isPaused = true;
    this.stopSlideShow();
  }

  onImageLeave() {
    this.isPaused = false;
    this.startSlideShow();
  }

  // --- Typewriter Logic ---

  type() {
    const current = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.currentRole.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.currentRole.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    }

    this.typewriterTimer = setTimeout(() => this.type(), speed);
  }

  // Manual Role Navigation
  nextRole() {
    clearTimeout(this.typewriterTimer);
    this.isDeleting = false;
    this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    this.charIndex = 0;
    this.type(); // Restart typing for new role
  }

  prevRole() {
    clearTimeout(this.typewriterTimer);
    this.isDeleting = false;
    this.roleIndex = (this.roleIndex - 1 + this.roles.length) % this.roles.length;
    this.charIndex = 0;
    this.type(); // Restart typing for new role
  }

  scrollToSection(id: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}