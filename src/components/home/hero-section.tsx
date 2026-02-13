"use client";

import { motion } from "motion/react";

import { SocialLinks } from "./social-link";
import { HOME_PAGE_STACKS } from "@/utils/stack";
import { NAME } from "@/lib/constants";
import { Button } from "../ui/8bit/button";
import { FlipWords } from "../ui/flip-words";
import { Badge } from "../ui/8bit/badge";
import Link from "next/link";
import { Route } from "next";
import Section from "../ui/section";

const HERO_WORDS = [
  "systems that scale under pressure.",
  "APIs designed for real traffic.",
  "backend architecture built to last.",
  "codebases that stay maintainable.",
  "performance-first engineering."
];

const fadeUp = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export function HeroSection() {
  return (
    <Section id="about">
      <div className="mb-5 flex items-baseline-last gap-2">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-bold tracking-widest uppercase lg:text-4xl xl:text-5xl">
          {NAME}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-3 flex flex-col lg:text-left">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-primary mb-6 hidden overflow-hidden text-base font-medium sm:block md:text-lg">
          I build <FlipWords words={HERO_WORDS} />
        </motion.h2>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground mb-6 w-full text-lg leading-relaxed">
          I design scalable web systems focused on performance, maintainability,
          and real-world impact.
          <br />
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {HOME_PAGE_STACKS.map(tech => (
              <Badge key={tech.value} className="">
                <div className="flex items-center gap-2">
                  <tech.icon className="size-4" />
                  {tech.label}
                </div>
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 mb-8 flex flex-wrap items-center gap-4 lg:justify-start">
          <Button asChild className="w-full py-3 sm:w-auto">
            <Link href={"/projects"}>View My Work</Link>
          </Button>
          <Button asChild className="w-full py-3 sm:w-auto">
            <Link href={"/resume.pdf" as Route} target="_blank">
              {" "}
              View My Resume
            </Link>
          </Button>
        </motion.div>

        <div className="mt-6">
          <SocialLinks minimal={false} className="gap-6" />
        </div>
      </motion.div>
    </Section>
  );
}
