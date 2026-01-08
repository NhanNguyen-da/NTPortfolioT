import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Milestone } from '../../../../../../data/models/milestone.model';

@Component({
  selector: 'app-milestone-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone-header.component.html',
  styleUrl: './milestone-header.component.scss'
})
export class MilestoneHeaderComponent {
  @Input() milestone!: Milestone;
}
