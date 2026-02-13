import {
  EMAIL,
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  SECONDARY_EMAIL,
  X_URL,
  X_USERNAME
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/8bit/tooltip";
import { Button } from "../ui/8bit/button";

import { RiLinkedinFill, RiGithubFill, RiTwitterXFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { MailIcon } from "lucide-react";
import { PixelBorder } from "../shared/pixel-border";

export type SocialLink = {
  name: string;
  href: string;
  icon: IconType;
  username: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: GITHUB_URL,
    icon: RiGithubFill,
    username: GITHUB_USERNAME
  },
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    icon: RiLinkedinFill,
    username: `@${LINKEDIN_USERNAME}`
  },
  {
    name: "Twitter",
    href: X_URL,
    icon: RiTwitterXFill,
    username: `@${X_USERNAME}`
  },
  {
    name: "Email",
    href: `mailto:${EMAIL}`,
    icon: MailIcon,
    username: SECONDARY_EMAIL
  }
];

export function SocialLinks({
  minimal = false,
  className
}: {
  minimal?: boolean;
  className?: string;
}) {
  if (minimal) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        {socialLinks.map(link => (
          <TooltipProvider key={link.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="group relative rounded-lg px-1.5 py-1">
                  <link.icon className="text-muted-primary group-hover:text-primary size-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}>
      <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", className)}>
        {socialLinks.map(social => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-card-hover group relative flex w-full space-x-3 rounded-none px-3 py-3 text-center">
            <PixelBorder />
            <div className="bg-muted rounded-lg p-2">
              <social.icon className="text-muted-foreground group-hover:text-primary size-8" />
            </div>

            <div className="flex w-full flex-col items-start space-y-0.5">
              <div className="flex w-full items-center justify-between pr-5">
                <h3 className="text-muted-primary group-hover:text-accent-foreground font-medium underline-offset-3 group-hover:underline">
                  {social.name}
                </h3>
                <LuArrowUpRight className="text-muted-primary group-hover:text-accent-foreground size-4" />
              </div>
              <p className="text-muted-foreground hidden text-xs sm:block sm:text-sm">
                {social.username}
              </p>
              <p className="text-muted-foreground block text-xs sm:hidden sm:text-sm">
                {social.username.length > 18
                  ? social.username.slice(0, 18) + ".."
                  : social.username}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
