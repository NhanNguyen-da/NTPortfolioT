import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Milestone } from '../../../../../../data/models/milestone.model';

@Component({
  selector: 'app-milestone-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone-content.component.html',
  styleUrl: './milestone-content.component.scss'
})
export class MilestoneContentComponent {
  @Input() milestone!: Milestone;
}
