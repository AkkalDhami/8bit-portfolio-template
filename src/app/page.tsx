import { ContactSection } from "@/components/contact/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { GitHubContributions } from "@/components/github";
import { ProjectsSection } from "@/components/projects/project-section";
import { SkillsSection } from "@/components/skills/skill-section";
import { Gap } from "@/components/home/gap";

export default async function Page() {
  return (
    <div className="relative  mx-auto max-w-5xl *:[[id]]:scroll-mt-22">
      <HeroSection />
      <Gap />
      <ProjectsSection />
      <Gap />
      <GitHubContributions />
      <Gap />
      <SkillsSection />
      <Gap />
      <ContactSection />
      <Gap />
    </div>
  );
}
