import { Injectable, signal } from '@angular/core';
import { Milestone } from '../../data/models/milestone.model';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  activeMilestone = signal<Milestone | null>(null);
  milestones = signal<Milestone[]>([]);

  constructor() {
    // TODO: Load milestones from data files
  }

  setActiveMilestone(milestone: Milestone): void {
    // TODO: Update active milestone
    // TODO: Trigger animations
    // TODO: Update detail panel content
  }

  getNextMilestone(): Milestone | null {
    // TODO: Return next milestone in sequence
    return null;
  }

  getPreviousMilestone(): Milestone | null {
    // TODO: Return previous milestone in sequence
    return null;
  }

  getMilestoneByIndex(index: number): Milestone | null {
    // TODO: Return milestone at specific index
    return null;
  }
}
