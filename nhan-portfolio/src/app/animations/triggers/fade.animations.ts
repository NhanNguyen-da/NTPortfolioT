import { trigger, state, style, transition, animate } from '@angular/animations';
import { DURATIONS } from '../constants/durations';
import { EASINGS } from '../constants/easings';

export const fadeIn = trigger('fadeIn', [
  // TODO: Define fade in animation states and transitions
]);

export const fadeOut = trigger('fadeOut', [
  // TODO: Define fade out animation states and transitions
]);

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition(':enter', [
    animate(`${DURATIONS.normal}ms ${EASINGS.easeOut}`)
  ]),
  transition(':leave', [
    animate(`${DURATIONS.normal}ms ${EASINGS.easeIn}`)
  ])
]);
