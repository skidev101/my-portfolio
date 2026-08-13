export interface Project {
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  year: string;
  category: string;
  outcome: string;
  highlights: string[];
  links: {
    live: string;
    github: string;
  };
  stack: string[];
  images: string[];
}
