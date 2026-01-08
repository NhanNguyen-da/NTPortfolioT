import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import { TimelineService } from '../../core/services/timeline.service';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {
  constructor(
    private scrollService: ScrollService,
    private timelineService: TimelineService
  ) {}

  // TODO: Track scroll position
  // TODO: Activate milestones based on scroll
  // TODO: Handle trunk drawing animation
  // TODO: Handle node blooming animations
}
