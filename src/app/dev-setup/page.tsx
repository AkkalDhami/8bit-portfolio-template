import { Metadata } from "next";
import { SetupSection } from "@/components/setup/setup-section";
import { Gap } from "@/components/home/gap";

export const metadata: Metadata = {
  title: "Development Setup",
  description:
    "A detailed look at my development environment, including my IDE setup, themes, fonts, and tools."
};

export default function Page() {
  return (
    <div className="relative mx-auto max-w-5xl *:[[id]]:scroll-mt-22">
      <SetupSection />
      <Gap />
    </div>
  );
}
