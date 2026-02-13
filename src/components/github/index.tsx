import { getGitHubContributions } from "@/data/github-contributions";
import { Suspense } from "react";
import {
  GitHubContributionFallback,
  GitHubContributionGraph
} from "./contribution";
import Section from "../ui/section";

export async function GitHubContributions() {
  const contributions = await getGitHubContributions();
  return (
    <Section id="github-contributions">
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph initialData={contributions} />
      </Suspense>
    </Section>
  );
}
