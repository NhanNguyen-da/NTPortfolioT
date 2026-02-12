import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  jobs = [
    {
      id: 1,
      title: 'IT Executive',
      company: 'Hoan My Sai Gon General Hospital',
      period: 'May 2025 - Present',
      description: 'Leading EMR rollout and digital ecosystem integration.',
      details: [
        'Coordinated phased EMR implementation with FPT team and vendors',
        'Integrated QMS, Danh Y, and CRM with HIS/EMR',
        'Gathered feedback to propose HIS 2.0 workflow alignments',
        'Designed real-time dashboard for leadership decision-making'
      ],
      active: true
    },
    {
      id: 2,
      title: 'Application Development',
      company: 'Van Phuc City General Hospital',
      period: 'Oct 2024 - May 2025',
      description: 'Managed IT support and requirement analysis.',
      details: [
        'Gathered and analyzed software requirements from departments',
        'Monitored IT support tasks within HSOFT & ERP systems',
        'Created comprehensive data structure documentation for HSOFT',
        'Coordinated EMR rollout'
      ],
      active: false
    },
    {
      id: 3,
      title: 'IT Operation Executive',
      company: 'Prima Sai Gon Medical Eyes Center',
      period: 'May 2023 - Oct 2024',
      description: 'Operated HIS/EMR in compliance with MOH regulations.',
      details: [
        'Extracted and standardized data using SQL Server',
        'Analyzed HIS and Portal data for strategic enhancements',
        'Implemented cost-saving measures without compromising quality'
      ],
      active: false
    },
    {
      id: 4,
      title: 'IT Software Executive',
      company: 'Hoan My International Eyes Hospital',
      period: 'May 2023 - Oct 2023',
      description: 'Managed data and optimized HIS systems.',
      details: [
        'Designed database structures for HIS FPT migration',
        'Collaborated on LIS, PACS, and ERP implementation',
        'Developed SOPs and conducted staff training',
        'Collaborate closely with the Biomedical team'
      ],
      active: false
    }
  ];

  toggleJob(id: number) {
    this.jobs.forEach(job => {
      if (job.id === id) job.active = !job.active;
      else job.active = false; // Accordion style: close others
    });
  }
}