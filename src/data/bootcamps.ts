export interface Bootcamp {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  shortDesc?: string;
  duration: string;
  students: string;
  rating: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  color: string;
  bgColor: string;
  icon: string;
  technologies?: string[];
  isLatest?: boolean;
  isFeatured?: boolean;
}

export const bootcampsData: Bootcamp[] = [
  {
    id: 'tech-development',
    title: "Tech Development",
    subtitle: "Programming & Development",
    description: "Experience our comprehensive tech curriculum through hands-on coding sessions, mentor interactions, and mini-projects.",
    shortDesc: "Web • Mobile • AI • Cloud",
    duration: "4-7 Days",
    students: "5.2k+",
    rating: 4.9,
    level: "Beginner",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    icon: "Code",
    technologies: ["React", "Node.js", "Python", "AI/ML", "Cloud"],
    isLatest: true,
    isFeatured: true
  },
  {
    id: 'design-marketing',
    title: "Design & Marketing",
    subtitle: "Creative & Strategy",
    description: "Dive into UI/UX design principles, visual branding, and performance marketing through interactive workshops and real projects.",
    shortDesc: "UI/UX • Branding • Marketing",
    duration: "4-7 Days",
    students: "3.8k+",
    rating: 4.8,
    level: "Beginner",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    icon: "Palette",
    technologies: ["Figma", "Adobe XD", "Brand Strategy", "Digital Marketing"],
    isFeatured: true
  },
  {
    id: 'startup-entrepreneurship',
    title: "Startups & Ventures",
    subtitle: "Business & Innovation",
    description: "Learn startup fundamentals from ideation to execution through pitch sessions, business model workshops, and networking.",
    shortDesc: "Strategy • Funding • Growth",
    duration: "4-7 Days",
    students: "2.1k+",
    rating: 4.7,
    level: "Intermediate",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    icon: "Zap",
    technologies: ["Business Model", "Pitch Deck", "MVP", "Growth Hacking"],
    isFeatured: true
  }
];

// Helper functions to get specific bootcamp sets
export const getFeaturedBootcamps = () => bootcampsData.filter(bootcamp => bootcamp.isFeatured);
export const getAllBootcamps = () => bootcampsData;
export const getLatestBootcamp = () => bootcampsData.find(bootcamp => bootcamp.isLatest);