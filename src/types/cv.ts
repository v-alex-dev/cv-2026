export interface Experience {
  company: string
  position: string
  period: string
  location: string
  tasks: string[]
  achievements?: string
}

export interface Education {
  school: string
  location: string
  degree: string
  period: string
  description: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  license: string
}

export interface SoftSkills {
  teamwork: string
  adaptability: string
  resilience: string
  collaborative: string
  learning: string
}
