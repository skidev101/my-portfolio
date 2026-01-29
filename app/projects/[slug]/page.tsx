import LinkButton from "@/components/LinkButton";
import { getProjectBySlug } from "@/lib/projects";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";


const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const projectDetails = getProjectBySlug(slug);
  console.log("slug recieved:", slug);
  console.log("project recieved:", projectDetails);

  return (
    <section className="pt-20 sm:pt-[200px] relative flex justify-center flex-col px-3 lg:px-50">
      <div className="flex flex-col"> 
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-4">
              <h1 className="text-3xl sm:text-5xl font-heading">
                {projectDetails?.title}
              </h1>
              <LinkButton
                text="visit"
                externalLink={projectDetails?.links.live as string}
                icon={<ArrowUpRight className="size-4 text-primary/80" />}
                className="sm:hidden text-gray-500 bg-transparent hover:bg-transparent gap-1"
              />
            </div>
            <p className="text-gray-700 dark:text-white/90 text-[1.1rem] sm:text-[1.4rem] leading-tight mt-1">
              {projectDetails?.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <LinkButton
              text="Live demo"
              externalLink={projectDetails?.links.live as string}
              icon={
                <ArrowUpRight className="size-4 hover:cursor-pointer transition-all" />
              }
              className="hidden sm:flex"
            />
            <LinkButton
              externalLink={projectDetails?.links.github as string}
              icon={
                <Github className="size-4 hover:cursor-pointer transition-all" />
              }
              className="hidden sm:flex text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-300"
            />
          </div>
        </div>

        <p className="text-gray-700 dark:text-white/90 text-[1.1rem] sm:text-[1.4rem] mt-10">
          Project Description
        </p>

        <p className="text-[1rem] text-gray-600 dark:text-white/80 sm:text-[1.1rem] leading-relaxed mt-2">
          {projectDetails?.description}
        </p>
      </div>

      <div>
        <p className="text-gray-700 dark:text-white/90 text-[1.1rem] sm:text-[1.4rem] mt-10">
          Technologies used
        </p>

        <div className="mt-1 flex flex-wrap">
          {projectDetails?.stack.map((tech: string) => (
            <span
              key={tech}
              className="text-xs sm:text-sm px-3 hover:px-4 py-1 mt-2 mr-2 rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-x-[4px] origin-center hover:cursor-default ease-out duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-gray-700 dark:text-white/90 text-[1.1rem] sm:text-[1.4rem]">
            Project Images
          </p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 pb-6">
            {projectDetails?.images.map((img: string, i) => (
              <div
                key={i}
                className="relative w-full h-50 rounded-3xl overflow-hidden group mt-4"
              >
                <Image
                  src={`/images/${img}`}
                  alt="project image"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-102"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex sm:hidden flex-1 justify-center my-30 gap-2">
        <LinkButton
          text="Live demo"
          externalLink={projectDetails?.links.live as string}
          icon={
            <ArrowUpRight className="size-4 hover:cursor-pointer transition-all" />
          }
          className="text-gray-700 dark:text-gray-300 hover:text-black bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-300"
        />

        <LinkButton
          text="Source code"
          externalLink={projectDetails?.links.github as string}
          icon={
            <Github className="size-4 hover:cursor-pointer transition-all" />
          }
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-300"
        />
      </div>
    </section>
  );
};

export default page;
