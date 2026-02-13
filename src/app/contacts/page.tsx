import { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact-section";
import { Gap } from "@/components/home/gap";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akkal Dhami for collaborations, inquiries, or just to say hi."
};

export default function Page() {
  return (
    <div className="relative mx-auto max-w-5xl *:[[id]]:scroll-mt-22">
      <ContactSection />
      <Gap />
    </div>
  );
}
