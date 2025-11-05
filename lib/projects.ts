export const projects = [
  {
    id: "1",
    image: "project1.jpeg",
    title: "JSYK",
    subtitle: "Anonymous feedback app",
    description:
      "JSYK - 'Just so You know' Is an anonymous feedback app I created to enable users to create topics, send and recieve anonymous messages",
    links: {
      live: "https://jsyk.pxxl.click",
      github: "https://github.com/skidev101/jsyk",
    },
    stack: [
      "ReactJS",
      "Tailwindcss",
      "ExpressJS",
      "MongoDB",
      "Cloudinary",
      "Firebase",
      "ExprejdssJS",
      "MongowdDB",
      "Cloundinary",
      "Firebaase",
    ],
    images: ["project1.jpeg", "project2.jpeg", "project3.jpeg"],
  },
  {
    id: "2",
    image: "project2.jpeg",
    title: "StartupLens",
    subtitle: "Pitch your startup to the world",
    description:
      "StartupLens is an app created for Startup founders to pitch their startups to people around the world",
    links: {
      live: "https://startuplens.vercel.app",
      github: "https://github.com/skidev101/jsyk",
    },
    stack: ["NextJS", "Tailwindcss", "Sanity"],
    images: ["project4.jpeg", "project3.jpeg"],
  },
  {
    id: "3",
    image: "project3.jpeg",
    title: "Mirror",
    subtitle: "The worlds biggest documentation platform for developers",
    description:
      "Mirror is a platform created for developers who are tired of updating their documentation every single time their codebase was updated",
    links: {
      live: "https://mirror.dev",
      github: "https://github.com/skidev101/mirror",
    },
    stack: [
      "ReactJS",
      "Tailwindcss",
      "ExpressJS",
      "Mongodb",
      "Cloudinary",
      "Firebase",
    ],
    images: ["project6.jpeg", "project2.jpeg", "project1.jpeg"],
  },
  {
    id: "4",
    image: "project4.jpeg",
    title: "Unscathed",
    subtitle: "The one stop for open source developer tools",
    description:
      "Unscathed is an app for developers to get free, open source tools",
    links: {
      live: "https://startuplens.vercel.app",
      github: "https://github.com/skidev101/jsyk",
    },
    stack: [
      "NextJS",
      "Tailwindcss",
      "ExpressJS",
      "Mongodb",
      "Cloudinary",
      "Firebase",
    ],
    images: ["project5.jpeg", "project3.jpeg"],
  },
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
