import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../data/content/personal.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = PERSONAL_INFO;

  // TODO: Add email/social link click handlers
  // TODO: Add reveal animations
}
