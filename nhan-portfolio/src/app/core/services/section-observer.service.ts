import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionObserverService {
  private activeSection$ = new BehaviorSubject<string>('');
  private observer?: IntersectionObserver;

  getActiveSection(): Observable<string> {
    return this.activeSection$.asObservable();
  }

  observeSection(element: HTMLElement, sectionId: string): void {
    // TODO: Set up IntersectionObserver for section
    // TODO: Update active section when in viewport
  }

  unobserveSection(element: HTMLElement): void {
    // TODO: Remove observer from section
  }

  destroy(): void {
    // TODO: Clean up observers
  }
}
