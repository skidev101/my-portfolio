export const projects = [
  {
    slug: "jsyk",
    image: "project1.jpeg",
    title: "JSYK",
    subtitle: "Anonymous feedback platform",
    description:
      "JSYK (Just So You Know) is an anonymous feedback platform that allows users to create topics and receive messages without revealing the sender’s identity. The application focuses on privacy, usability, and scalable message handling.",
    links: {
      live: "https://jsyk.pxxl.click",
      github: "https://github.com/skidev101/jsyk",
    },
    stack: [
      "React",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Firebase",
      "Cloudinary",
    ],
    images: ["project1.jpeg", "project2.jpeg", "project3.jpeg"],
  },
  {
    slug: "startuplens",
    image: "project2.jpeg",
    title: "StartupLens",
    subtitle: "Startup pitching and discovery platform",
    description:
      "StartupLens is a web platform that enables founders to pitch their startups to a global audience. It is designed to showcase ideas clearly while supporting structured content and discoverability.",
    links: {
      live: "https://startuplens.vercel.app",
      github: "https://github.com/skidev101/startuplens",
    },
    stack: ["Next.js", "Tailwind CSS", "Sanity"],
    images: ["project4.jpeg", "project3.jpeg"],
  },
  {
    slug: "mirror",
    image: "project3.jpeg",
    title: "Mirror",
    subtitle: "Automated documentation platform for developers",
    description:
      "Mirror is a documentation platform aimed at reducing manual documentation updates by helping developers keep documentation aligned with evolving codebases.",
    links: {
      live: "https://mirror.dev",
      github: "https://github.com/skidev101/mirror",
    },
    stack: [
      "React",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Firebase",
      "Cloudinary",
    ],
    images: ["project6.jpeg", "project2.jpeg", "project1.jpeg"],
  },
  {
    slug: "unscathed",
    image: "project4.jpeg",
    title: "Unscathed",
    subtitle: "Open-source tools directory for developers",
    description:
      "Unscathed is a curated platform that provides developers with access to free and open-source tools, focusing on discoverability and usability.",
    links: {
      live: "https://unscathed.vercel.app",
      github: "https://github.com/skidev101/unscathed",
    },
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Firebase",
      "Cloudinary",
    ],
    images: ["project5.jpeg", "project3.jpeg"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
