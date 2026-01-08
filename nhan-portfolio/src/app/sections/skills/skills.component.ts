import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_GROUPS } from '../../data/content/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups = SKILL_GROUPS;

  // TODO: Add scroll-triggered animations
  // TODO: Add skill bar animations
}
