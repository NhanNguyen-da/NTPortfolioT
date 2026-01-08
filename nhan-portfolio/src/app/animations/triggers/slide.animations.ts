import { trigger, state, style, transition, animate } from '@angular/animations';
import { DURATIONS } from '../constants/durations';
import { EASINGS } from '../constants/easings';

export const slideInLeft = trigger('slideInLeft', [
  // TODO: Define slide in from left animation
]);

export const slideInRight = trigger('slideInRight', [
  // TODO: Define slide in from right animation
]);

export const slideInUp = trigger('slideInUp', [
  state('void', style({ transform: 'translateY(100px)', opacity: 0 })),
  state('*', style({ transform: 'translateY(0)', opacity: 1 })),
  transition(':enter', [
    animate(`${DURATIONS.slow}ms ${EASINGS.easeOut}`)
  ])
]);
