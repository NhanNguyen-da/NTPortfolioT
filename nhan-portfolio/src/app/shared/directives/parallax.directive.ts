import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallaxSpeed = 0.5;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // TODO: Listen to scroll events
    // TODO: Apply parallax transform based on scroll position
  }

  ngOnDestroy(): void {
    // TODO: Clean up scroll listener
  }
}
