import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineService } from '../../../../core/services/timeline.service';

@Component({
  selector: 'app-detail-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-panel.component.html',
  styleUrl: './detail-panel.component.scss'
})
export class DetailPanelComponent {
  private timelineService = inject(TimelineService);

  activeMilestone = this.timelineService.activeMilestone;

  // TODO: Handle content transitions
  // TODO: Load demo modal when triggered
}
