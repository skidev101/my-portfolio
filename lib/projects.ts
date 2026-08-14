import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "jsyk",
    image: "/images/jsyk/jsyk-cta.png",
    title: "JSYK",
    subtitle: "Anonymous feedback platform",
    description:
      "JSYK lets people create shareable topics and receive candid messages without exposing the sender's identity. I built the experience around a short path from link creation to useful feedback, supported by private message handling and media delivery.",
    role: "Full-stack engineering",
    year: "2025",
    category: "Social utility",
    outcome:
      "A deployable end-to-end product for collecting anonymous, topic-specific feedback.",
    highlights: [
      "Anonymous message workflow",
      "Topic-based shareable links",
      "Authentication and media handling",
    ],
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
    images: [
      "/images/jsyk/jsyk-landing.png",
      "/images/jsyk/jsyk-cta.png",
      "/images/jsyk/jsyk-cta2.png",
    ],
  },
  {
    slug: "zury",
    image: "/images/zury/zury.png",
    title: "Zury",
    subtitle: "Offline-aware academic companion for university students",
    description:
      "Zury brings daily schedules, weekly planning, PDF-based study help, conversational calendar actions, and project context into one focused workspace. I designed the product around the realities of African university students, including slow or unreliable networks, competing academic priorities, and the need for an interface that stays calm under pressure.",
    role: "Product design & full-stack engineering",
    year: "2026",
    category: "AI product / Education",
    outcome:
      "A working academic operating system concept that turns scattered study obligations into a focused daily rhythm.",
    highlights: [
      "Offline-aware experience with local client caching",
      "Daily briefing and realistic weekly planning flows",
      "PDF-based study assistance and contextual AI actions",
      "Responsive interface designed for low-bandwidth use",
    ],
    links: {
      live: "https://zury-web-theta.vercel.app/",
      github: "https://github.com/skidev101/zury",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite", "PWA"],
    images: [
      "/images/zury/zury.png",
      "/images/zury/zury_1.png",
      "/images/zury/zury_2.png",
      "/images/zury/zury_3.png",
    ],
  },
  // {
  //   slug: "be-studio",
  //   image:
  //     "https://image.thum.io/get/width/1600/crop/900/noanimate/https://be-studio.vercel.app/",
  //   title: "BE Graphic Studio",
  //   subtitle: "Conversion-focused platform for a global brand agency",
  //   description:
  //     "I designed and developed BE Graphic Studio's digital platform to turn a broad creative service offering into a clear client journey. The site structures brand analysis, strategy, identity, repositioning, and growth services around business goals, then connects qualified visitors to consultation booking and contact flows.",
  //   role: "Design & full-stack development",
  //   year: "2026",
  //   category: "Client platform / Creative agency",
  //   outcome:
  //     "A production agency website that communicates positioning, packages complex services, and routes prospective clients toward consultation.",
  //   highlights: [
  //     "Service architecture spanning six branding offers",
  //     "Goal-led service recommendation and pricing presentation",
  //     "Calendly consultation and direct contact flows",
  //     "Responsive motion system and reusable service pages",
  //   ],
  //   links: {
  //     live: "https://be-studio.vercel.app/",
  //     github: "https://github.com/skidev101/be-studio",
  //   },
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
  //   images: [
  //     "/images/zury/zury.png",
  //     "/images/zury/zury_1.png",
  //     "/images/zury/zury_2.png",
  //     "/images/zury/zury_3.png",
  //   ],
  // },
  {
    slug: "startuplens",
    image: "/images/startuplens/startup-lens.png",
    title: "StartupLens",
    subtitle: "Startup pitching and discovery platform",
    description:
      "StartupLens gives founders a structured way to present startup ideas and gives visitors a clear way to discover them. I built the publishing and discovery experience around reusable content models and a focused visual hierarchy.",
    role: "Frontend engineering",
    year: "2025",
    category: "Founder platform",
    outcome:
      "A content-driven product for publishing and discovering early-stage startup ideas.",
    highlights: [
      "Structured startup profiles",
      "CMS-backed publishing",
      "Responsive discovery interface",
    ],
    links: {
      live: "https://startuplens-ten.vercel.app/",
      github: "https://github.com/skidev101/startuplens",
    },
    stack: ["Next.js", "Tailwind CSS", "Sanity"],
    images: [
      "/images/startuplens/startup-lens.png",
      "/images/startuplens/startup-lens_1.png",
      "/images/startuplens/startup-lens_2.png",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
