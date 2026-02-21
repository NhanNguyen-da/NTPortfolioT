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
  // Using stable IDs for consistent "Technical" look since AI generation is disabled due to permissions
  aboutImages = signal<string[]>([
    'https://picsum.photos/id/48/400/500',   // Tech/Laptop -> Dashboard Analysis
    'https://picsum.photos/id/180/400/500',  // Work/Data -> FPT HIS 2.0
    'https://picsum.photos/id/60/400/500'    // Office/Tech -> Infrastructure
  ]);
  
  imageCaptions = signal<string[]>([
    'Dashboard Analysis',
    'FPT HIS 2.0 Software',
    'Infrastructure & Server Room'
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