import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../../data/models/certification.model';

@Component({
  selector: 'app-cert-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cert-lightbox.component.html',
  styleUrl: './cert-lightbox.component.scss'
})
export class CertLightboxComponent {
  @Input() certification!: Certification | null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.onClose();
    }
  }
}
