import { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/project-section";
import { Gap } from "@/components/home/gap";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my recent work in web development, from full-stack applications to component registries."
};

export default function Page() {
  return (
    <div className="relative mx-auto max-w-5xl *:[[id]]:scroll-mt-2">
      <ProjectsSection details={false} />
      <Gap />
    </div>
  );
}
