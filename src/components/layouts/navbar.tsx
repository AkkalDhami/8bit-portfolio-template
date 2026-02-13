"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./theme-toggle";
import { Profile } from "./profile";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Route } from "next";
import { SiGithub } from "react-icons/si";
import { GITHUB_URL, NAME } from "@/lib/constants";
import { Button } from "../ui/8bit/button";
import { isActiveLink } from "@/utils/link";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href: Route;
}
const menuItems: MenuItem[] = [
  {
    label: "Projects",
    href: "/projects" as Route
  },
  {
    label: "Dev Setup",
    href: "/dev-setup" as Route
  },
  {
    label: "Contacts",
    href: "/contacts" as Route
  }
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-background sticky top-0 z-50 max-w-screen overflow-x-hidden px-2 pt-2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between px-4 py-3 transition-all duration-500",
          "bg-background mx-auto w-full max-w-5xl backdrop-blur-md",
          "screen-line-before border-edge flex border-x-[6px]",
          scrollY > 0 && "screen-line-after"
        )}>
        <Profile />

        {/* Desktop Navigation */}
        <div className="border-border/60 hidden items-center gap-1 border p-1 backdrop-blur-md md:flex">
          {menuItems.map((item, index) => {
            const isActive = isActiveLink(pathname, item.href);
            const isMoving =
              (hoveredIndex ?? (isActive ? index : -1)) === index;

            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative cursor-pointer px-4 py-1.5 text-xs font-medium tracking-widest uppercase transition-all duration-300",
                  isMoving
                    ? "text-primary"
                    : "text-muted-primary hover:text-primary"
                )}>
                <span className="relative z-10">{item.label}</span>
                {isMoving && (
                  <motion.div
                    layoutId="nav-active"
                    className="bg-muted group absolute inset-0 border-[1.5px] border-neutral-500/40"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      duration: 0.5
                    }}></motion.div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Controls */}
        <div className="flex items-center gap-3">
          <Button variant="default" asChild>
            <Link
              href={`${GITHUB_URL}/8bit-portfolio-template`}
              target="_blank"
              className="hidden transition-colors sm:block">
              <SiGithub className="size-5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button
            variant="secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative px-2 py-1.5 transition-colors md:hidden">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-background/60 fixed inset-0 z-40 h-screen backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-background border-border fixed top-0 right-0 bottom-0 z-50 h-screen w-70 overflow-y-auto border-l md:hidden">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
                    Menu
                  </span>
                  <Button
                    variant={"secondary"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group bg-muted hover:bg-secondary relative cursor-pointer p-2 transition-colors">
                    <X size={16} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <div className="flex flex-col space-y-4">
                  {[{ label: "Home", href: "/" }, ...menuItems].map(item => {
                    const isActive = isActiveLink(pathname, item.href);
                    return (
                      <Link
                        key={item.label}
                        href={item.href as Route}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "group relative flex cursor-pointer items-center gap-4 px-4 py-2.5 transition-all duration-200",
                          isActive
                            ? "bg-secondary/50 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                        )}>
                        <span className="text-xl font-semibold tracking-widest uppercase">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div className="border-border/50 mt-auto border-t pt-8">
                  <div className="flex items-center gap-3">
                    <Profile />
                    <div className="flex flex-col space-y-1.5">
                      <span className="text-sm tracking-tight">{NAME}</span>
                      <span className="text-muted-foreground text-[10px] uppercase">
                        Full Stack Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
