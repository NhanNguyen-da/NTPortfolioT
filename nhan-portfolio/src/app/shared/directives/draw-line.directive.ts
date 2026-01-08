import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDrawLine]',
  standalone: true
})
export class DrawLineDirective implements OnInit {
  @Input() duration = 2000;
  @Input() delay = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // TODO: Implement SVG path drawing animation
    // TODO: Use stroke-dasharray and stroke-dashoffset
  }
}
