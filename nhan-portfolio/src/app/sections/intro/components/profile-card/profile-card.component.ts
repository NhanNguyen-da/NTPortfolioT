import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../../../data/models/personal.model';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() personalInfo!: PersonalInfo;

  // TODO: Add animation states
  // TODO: Add hover effects
}
