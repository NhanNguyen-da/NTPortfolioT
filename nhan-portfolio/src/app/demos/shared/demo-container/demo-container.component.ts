import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-container.component.html',
  styleUrl: './demo-container.component.scss'
})
export class DemoContainerComponent {
  @Input() title!: string;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
