import type { Skill, Project, Experience, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 82, category: 'backend' },
  { name: 'PostgreSQL', level: 78, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  { name: 'REST APIs', level: 88, category: 'backend' },
  { name: 'Git', level: 92, category: 'tools' },
  { name: 'Docker', level: 72, category: 'tools' },
  { name: 'Figma', level: 80, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment integration, and an admin dashboard. Supports thousands of concurrent users.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'Intelligent task management app that uses AI to prioritize, schedule, and suggest optimizations for your workflow.',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description: 'Scalable chat application with rooms, direct messaging, file sharing, and end-to-end encryption.',
    tags: ['React', 'WebSockets', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts, custom reports, and export capabilities.',
    tags: ['Vue.js', 'D3.js', 'GraphQL', 'Python'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-yellow-500 to-red-500',
  },
  {
    id: 5,
    title: 'Design System',
    description: 'A comprehensive design system and component library used across multiple enterprise products.',
    tags: ['React', 'Storybook', 'TypeScript', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'DevOps Pipeline Tool',
    description: 'Automated CI/CD pipeline management tool with visual workflow editor and deployment monitoring.',
    tags: ['Node.js', 'Docker', 'GitHub Actions', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2022 — Present',
    description: 'Led the frontend architecture for a SaaS platform serving 500k+ users.',
    achievements: [
      'Reduced bundle size by 45% through code splitting and lazy loading',
      'Built a reusable component library adopted across 3 product teams',
      'Mentored 4 junior developers and conducted 100+ code reviews',
      'Migrated legacy jQuery codebase to React, improving performance by 60%',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 — 2022',
    description: 'Built and scaled the core product from 0 to 50k users in 18 months.',
    achievements: [
      'Designed and implemented RESTful APIs consumed by web and mobile clients',
      'Integrated third-party services: Stripe, Twilio, SendGrid',
      'Optimized database queries, reducing average response time by 70%',
      'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
    ],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Digital Agency Co.',
    period: '2018 — 2020',
    description: 'Delivered responsive websites and web apps for 20+ clients.',
    achievements: [
      'Developed pixel-perfect UIs from Figma/Sketch designs',
      'Improved Lighthouse scores to 90+ across all client projects',
      'Introduced automated testing, achieving 80% code coverage',
    ],
  },
];
