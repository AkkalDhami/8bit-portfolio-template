export interface Technology {
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  description?: string;
  technologies: Technology[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "servercn",
    title: "ServerCN",
    description:
      "ServerCN is a component registry for building Node.js backends by composition.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "Tailwind" }
    ],
    thumbnail: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    liveUrl: "https://servercn.vercel.app/",
    githubUrl: "https://github.com/akkaldhami/servercn",
    features: [
      "Component-First Backend",
      "CLI-First Workflow",
      "Architecture-Aware",
      "Production-Ready by Default",
      "Database-Aware Setup",
      "Transparent & Documented",
      "Dependency-Safe Installs"
    ]
  },
  {
    slug: "minimal-portfolio",
    title: "Minimal Portfolio",
    description: "Minimal Portfolio is a personal portfolio website for Akkal Dhami.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "Tailwind" }
    ],
    thumbnail: "/images/portfolio.png",
    images: [
      "/images/portfolio.png",
      "/images/hero.png",
      "/images/portfolio.png",
      "/images/hero.png",
      "/images/portfolio.png"
    ],
    liveUrl: "https://akkal.vercel.app/",
    githubUrl: "https://github.com/akkaldhami/personal-portfolio",
    features: [
      "Personal Portfolio",
      "Project Showcase",
      "Contact Form",
      "Social Media Links",
      "Responsive Design",
      "Dark Mode",
      "Light Mode"
    ]
  }
];
