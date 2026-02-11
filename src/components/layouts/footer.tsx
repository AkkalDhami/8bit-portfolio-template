import { Axe } from "lucide-react";
import Link from "next/link";
import { Route } from "next";
import { SocialLinks } from "../home/social-link";
import { Profile } from "./profile";
import { GITHUB_URL, NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mt-20 px-4 pb-6">
        <div className="border-border/40 relative border-t px-2 py-6">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Profile />
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium tracking-tighter">
                    {NAME}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Full Stack Developer
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                Building modern web experiences with a focus on performance,
                scalability, and clean architecture.
              </p>
              <SocialLinks minimal />
            </div>

            <div className="space-y-4">
              <h4 className="text-foreground text-xs font-bold tracking-[0.2em] uppercase">
                Navigation
              </h4>
              <ul className="space-y-2">
                {["Home", "Projects", "Dev-Setup", "Contacts"].map(
                  item => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}` as Route}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors">
                        {item.replaceAll("-", " ")}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-stroke text-center text-3xl font-bold tracking-widest uppercase sm:text-4xl xl:text-5xl">
              {NAME}
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-8">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} | {NAME} | All rights reserved
            </p>

            <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
              <span>Built with</span>
              <div className="text-primary relative flex items-center gap-1">
                <Axe size={16} strokeWidth={2.5} />
              </div>
              by
              <Link
                href={GITHUB_URL}
                target="_blank"
                className="hover:text-primary underline underline-offset-2">
                {NAME}
              </Link>
            </div>
          </div>

        </div>
      </footer>
      <div className="pb-16" />
    </>
  );
}
