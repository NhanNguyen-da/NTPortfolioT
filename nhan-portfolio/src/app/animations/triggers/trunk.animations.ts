import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { DURATIONS } from '../constants/durations';
import { EASINGS } from '../constants/easings';

export const nodeBloom = trigger('nodeBloom', [
  state('inactive', style({
    transform: 'scale(0) rotate(0deg)',
    opacity: 0
  })),
  state('active', style({
    transform: 'scale(1) rotate(180deg)',
    opacity: 1
  })),
  transition('inactive => active', [
    animate(`${DURATIONS.nodeBloom}ms ${EASINGS.spring}`)
  ])
]);

export const nodePulse = trigger('nodePulse', [
  // TODO: Define continuous pulse animation for active node
]);

export const contentTransition = trigger('contentTransition', [
  transition('* => *', [
    animate(`${DURATIONS.contentTransition}ms ${EASINGS.easeInOut}`,
      keyframes([
        style({ opacity: 0, transform: 'translateX(20px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ])
    )
  ])
]);
