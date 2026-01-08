export interface Milestone {
  id: string;
  type: 'education' | 'work';
  title: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate: Date | null; // null for current position
  description: string;
  achievements: Achievement[];
  technologies?: string[];
  images?: string[];
  demoId?: string; // Reference to demo component if applicable
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  impact?: string;
  metrics?: Metric[];
}

export interface Metric {
  label: string;
  value: string | number;
  unit?: string;
}
