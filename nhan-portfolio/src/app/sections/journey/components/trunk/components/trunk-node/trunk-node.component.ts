import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Milestone } from '../../../../../../data/models/milestone.model';

@Component({
  selector: 'app-trunk-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trunk-node.component.html',
  styleUrl: './trunk-node.component.scss'
})
export class TrunkNodeComponent {
  @Input() milestone!: Milestone;
  @Input() isActive = false;
  @Input() isPassed = false;
  @Output() nodeClick = new EventEmitter<Milestone>();

  onClick(): void {
    this.nodeClick.emit(this.milestone);
  }
}
