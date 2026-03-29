export interface Project {
  id: string;
  title: string;
  impact: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}
