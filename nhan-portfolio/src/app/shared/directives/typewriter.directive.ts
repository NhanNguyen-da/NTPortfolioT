import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements OnInit {
  @Input() text = '';
  @Input() speed = 50;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // TODO: Implement typewriter effect
    // TODO: Animate text character by character
  }
}
