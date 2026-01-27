"use client";

import { Project } from "@/types";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import LinkButton from "./LinkButton";
const ProjectCard = ({
  slug,
  image,
  title,
  subtitle,
  links,
  stack,
}: Project) => {
  const router = useRouter();

  return (
    <div className="w-full px-4 py-7 rounded-3xl bg-card border dark:bg-[#201e1e] dark:shadow-md">
      {/* Project Image */}
      <div className="relative w-full h-50 rounded-3xl overflow-hidden group">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="mt-4">
        <h2 className="text-[1.3rem] font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-[1rem] text-gray-600 dark:text-gray-400 mt-1">
          {subtitle}
        </p>

        {/* Tech Stack Preview */}
        {stack && (
          <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
            {stack.slice(0, 3).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-5">
          <LinkButton
            text="Live Demo"
            externalLink={links?.live as string}
            icon={<ArrowUpRight className="size-4" />}
          />

          <Button
            onClick={() => router.push(`/projects/${slug}`)}
            className="flex items-center gap-2 rounded-xl transition-all duration-300 active:scale-95
            text-gray-700 dark:text-gray-300
            bg-gray-200 dark:bg-gray-800
            hover:bg-gray-300 dark:hover:bg-gray-700
            border border-gray-300 dark:border-gray-700"
          >
            View Details
            <ChevronRight className="size-4" />
          </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
