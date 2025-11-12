"use client";

import { Project } from "@/types";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import LinkButton from "./LinkButton";

const ProjectCard = ({ slug, image, title, subtitle, links }: Project) => {
  const router = useRouter();
  console.log(slug, image, title, links);

  return (
    <div
      // onClick={() => router.push(`/projects/${id}`)}
      className="w-full px-4 py-7 rounded-3xl bg-card dark:bg-[#201e1e] dark:shadow-md"
    >
      <div className="relative w-full h-50 rounded-3xl overflow-hidden group">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-102"
        />
      </div>

      <div className="mt-4">
        <h1 className="text-[1.3rem] font-semibold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-[1.1rem] text-gray-950 dark:text-white/80">
          {subtitle}
        </p>
      </div>

      <div className="flex items-baseline gap-3 mt-4">
        <LinkButton
          text="Live demo"
          externalLink={links?.live as string}
          icon={
            <ArrowUpRight className="size-4 hover:cursor-pointer transition-all" />
          }
        />

        <Button
          onClick={() => router.push(`projects/${slug}`)}
          className="flex items-center gap-2 hover:px-4 rounded-xl hover:cursor-pointer hover:scale-x-105 transition-all duration-300 active:scale-95 text-gray-700 dark:text-gray-300 hover:text-black bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-300"
        >
          Details
          <ChevronRight className="size-4 hover:cursor-pointer transition-all" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
