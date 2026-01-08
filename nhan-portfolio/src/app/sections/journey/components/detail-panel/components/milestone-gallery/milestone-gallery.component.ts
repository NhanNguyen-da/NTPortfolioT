import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-milestone-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone-gallery.component.html',
  styleUrl: './milestone-gallery.component.scss'
})
export class MilestoneGalleryComponent {
  @Input() images: string[] = [];

  selectedImage: string | null = null;

  onImageClick(image: string): void {
    this.selectedImage = image;
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }
}
