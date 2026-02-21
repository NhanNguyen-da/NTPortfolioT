import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit, OnDestroy {
  stats = [
    { label: 'Experience', value: '2+', suffix: 'Years' },
    { label: 'Facilities', value: '4', suffix: 'Hospitals' },
    { label: 'Projects', value: '10+', suffix: 'Completed' },
    { label: 'Systems', value: '5+', suffix: 'Managed' },
  ];

  // Image State (Signals)
  aboutImages = signal<string[]>([
    'assets/dashboard-3.jpg',
    'assets/4-eHospital-1.jpg',
    'assets/chatbot - 4.jpg'
  ]);

  imageCaptions = signal<string[]>([
    'Dashboard Analysis',
    'FPT eHospital 2.0+ Eco System',
    'Healthcare Chatbot'
  ]);

  currentImageIndex = signal(0);
  slideInterval: any;
  isPaused = false;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.stopSlideShow();
    this.slideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextImage();
      }
    }, 4000); // 4 seconds per slide
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  nextImage() {
    this.currentImageIndex.update(i => (i + 1) % this.aboutImages().length);
  }

  prevImage() {
    this.currentImageIndex.update(i => (i - 1 + this.aboutImages().length) % this.aboutImages().length);
  }

  onImageHover() {
    this.isPaused = true;
    this.stopSlideShow();
  }

  onImageLeave() {
    this.isPaused = false;
    this.startSlideShow();
  }
}