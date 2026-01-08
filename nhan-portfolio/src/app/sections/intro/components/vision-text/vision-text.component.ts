import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-text.component.html',
  styleUrl: './vision-text.component.scss'
})
export class VisionTextComponent {
  @Input() bio!: string;
  @Input() vision!: string;

  // TODO: Add typewriter animation effect
  // TODO: Add fade-in animation
}
