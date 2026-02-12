import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  activeTab = signal('technical');

  tabs = [
    { 
      id: 'technical', 
      label: 'Technical',
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    },
    { 
      id: 'hospital', 
      label: 'Hospital Systems',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    { 
      id: 'coding', 
      label: 'Programming',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    { 
      id: 'soft', 
      label: 'Soft Skills',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  skillsData: any = {
    technical: [
      { name: 'Project Management', percent: 90 },
      { name: 'Strategic Analysis', percent: 85 },
      { name: 'Scrum Management', percent: 85 },
      { name: 'Healthcare IT Systems', percent: 95 }
    ],
    hospital: [
      { name: 'HIS 2.0 / Hsoft / SHI', percent: 95 },
      { name: 'EMR/EHR Systems', percent: 90 },
      { name: 'LIS / PACS / ERP', percent: 80 },
      { name: 'FPT eHospital', percent: 85 }
    ],
    coding: [
      { name: 'SQL Server 2019', percent: 90 },
      { name: 'PostgreSQL', percent: 80 },
      { name: 'Python / Flask API', percent: 75 },
      { name: 'Angular JS', percent: 70 },
      { name: 'TensorFlow / CNN', percent: 65 }
    ],
    soft: [
      { name: 'Team Leadership & Mentoring', percent: 90 },
      { name: 'Cross-functional Communication', percent: 95 },
      { name: 'Vendor Management', percent: 85 },
      { name: 'Digital Transformation', percent: 90 }
    ]
  };

  setTab(id: string) {
    this.activeTab.set(id);
  }
}