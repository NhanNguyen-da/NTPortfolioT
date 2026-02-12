import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  education = [
    { degree: 'Master of Science in Information Systems', school: 'FPT University', period: 'Nov 2024 - Ongoing', desc: 'Software project management & AI' },
    { degree: 'Bachelor of Software Engineering', school: 'FPT University', period: 'Aug 2017 - Dec 2020', desc: 'Software Systems Development' },
    { degree: 'Bridge System Engineering', school: 'FPT University', period: 'Feb 2020 - Dec 2021', desc: 'Data collection & Scrum' }
  ];

  certs = [
    { name: 'Agile Development Specialization', issuer: 'University of Virginia (Coursera)', date: 'Mar 2025' },
    { name: 'Data Mining Foundations', issuer: 'University of Colorado Boulder (Coursera)', date: 'Jul 2025' }
  ];
}