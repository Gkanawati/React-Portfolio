export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  npmUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level?: number;
}
