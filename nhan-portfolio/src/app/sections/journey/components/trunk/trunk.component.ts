import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineService } from '../../../../core/services/timeline.service';
import { ScrollService } from '../../../../core/services/scroll.service';

@Component({
  selector: 'app-trunk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trunk.component.html',
  styleUrl: './trunk.component.scss'
})
export class TrunkComponent implements OnInit {
  private timelineService = inject(TimelineService);
  private scrollService = inject(ScrollService);

  milestones = this.timelineService.milestones;
  activeMilestone = this.timelineService.activeMilestone;

  ngOnInit(): void {
    // TODO: Initialize trunk drawing animation
    // TODO: Listen to scroll events
    // TODO: Activate nodes based on scroll position
  }

  onNodeClick(milestone: any): void {
    // TODO: Scroll to milestone
    // TODO: Update active milestone
    // TODO: Trigger transition animations
  }
}
