import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Healthcare Software Developer', 'IT Supervisor', 'System Architect', 'Data Analyst'];
  currentRole = signal('');
  
  // Hero Image
  heroImage = 'assets/intro.jpg';

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
  }

  ngOnDestroy() {
    clearTimeout(this.typewriterTimer);
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