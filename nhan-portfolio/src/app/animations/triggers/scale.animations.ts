import { trigger, state, style, transition, animate } from '@angular/animations';
import { DURATIONS } from '../constants/durations';
import { EASINGS } from '../constants/easings';

export const scaleIn = trigger('scaleIn', [
  state('void', style({ transform: 'scale(0)', opacity: 0 })),
  state('*', style({ transform: 'scale(1)', opacity: 1 })),
  transition(':enter', [
    animate(`${DURATIONS.normal}ms ${EASINGS.spring}`)
  ])
]);

export const scaleOut = trigger('scaleOut', [
  // TODO: Define scale out animation
]);
