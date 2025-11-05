export interface Project {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  links: {
    live?: string;
    github?: string;
  };
  stack?: string[];
  images?: string[];
}
