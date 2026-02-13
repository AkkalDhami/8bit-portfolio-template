import { Axe } from "lucide-react";
import Link from "next/link";

import { GITHUB_URL, NAME } from "@/lib/constants";
import { SocialLinks } from "../home/social-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="max-w-screen overflow-x-hidden px-2">
        <div className="bg-background screen-line-before screen-line-after border-edge relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center space-y-4 border-x-[6px] px-4 py-8 backdrop-blur-md">
          <p className="text-stroke text-muted-foreground mx-auto text-center text-3xl font-bold tracking-widest uppercase sm:text-4xl xl:text-5xl">
            {NAME}
          </p>
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
          <SocialLinks minimal />
        </div>
      </footer>
      <div className="pb-10" />
    </>
  );
}
