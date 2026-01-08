export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  yearsOfExperience: number;
  icon?: string;
  description?: string;
}

export type SkillCategory =
  | 'Healthcare IT Systems'
  | 'Data & Analytics'
  | 'Infrastructure & Cloud'
  | 'Programming & Automation'
  | 'Management & Leadership';

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}
