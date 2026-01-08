import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'fade-in';
  @Input() threshold = 0.1;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // TODO: Set up IntersectionObserver
    // TODO: Add animation class when element enters viewport
  }

  ngOnDestroy(): void {
    // TODO: Clean up observer
  }
}
