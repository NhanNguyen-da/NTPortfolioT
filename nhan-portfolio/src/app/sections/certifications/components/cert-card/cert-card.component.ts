import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../../data/models/certification.model';

@Component({
  selector: 'app-cert-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cert-card.component.html',
  styleUrl: './cert-card.component.scss'
})
export class CertCardComponent {
  @Input() certification!: Certification;
  @Output() viewCertificate = new EventEmitter<Certification>();

  onCardClick(): void {
    this.viewCertificate.emit(this.certification);
  }
}
