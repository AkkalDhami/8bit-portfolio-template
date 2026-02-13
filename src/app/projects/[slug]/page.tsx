import { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { BackButton } from "@/components/shared/back-btn";
import { getPreviousAndNextProject, getProjectBySlug } from "@/utils/project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";
import { Route } from "next";
import { Button } from "@/components/ui/8bit/button";
import Link from "next/link";
import { Gap } from "@/components/home/gap";

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug as string);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.thumbnail]
    }
  };
}

export default async function Page(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug as string);

  if (!project) {
    redirect("/projects");
  }

  const { previousProject, nextProject } = getPreviousAndNextProject(
    slug as string
  );
  return (
    <>
      <div className="group screen-line-after screen-line-before relative mx-auto max-w-5xl border-x-[6px] *:[[id]]:scroll-mt-22">
        <div className="p-4">
          <BackButton />
        </div>
        <ProjectCard project={project} details={true} />
        <div className="flex justify-between p-4">
          {previousProject && (
            <Button
              variant="secondary"
              className="group px-4 py-2 font-medium tracking-normal capitalize"
              asChild>
              <Link
                href={`/projects/${previousProject.slug}` as Route}
                className="flex items-center gap-1">
                <ChevronLeft className="size-5" /> Previous Project
              </Link>
            </Button>
          )}
          {nextProject && (
            <Button
              variant="secondary"
              className="group px-4 py-2 font-medium tracking-normal capitalize">
              <Link
                href={`/projects/${nextProject.slug}` as Route}
                className="flex items-center gap-1">
                Next Project <ChevronRight className="size-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <Gap />
    </>
  );
}
