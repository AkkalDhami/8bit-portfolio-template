"use client";

import { motion } from "motion/react";
import { Circle, MoveUpRight } from "lucide-react";
import { SetupItem } from "@/data/setup";
import Image from "next/image";
import Link from "next/link";
import { Route } from "next";
import { PixelBorder } from "../shared/pixel-border";

export function SetupCard({ item, index }: { item: SetupItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card relative flex flex-col justify-between border p-3">
      <PixelBorder />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.image && (
            <Image src={item.image} alt={item.title} width={24} height={24} />
          )}
          <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-normal">
            {item.title}
            {item.current && (
              <Circle className="size-3 fill-current text-green-500" />
            )}
          </h3>
        </div>
        {item.link && (
          <Link
            href={item.link as Route}
            target="_blank"
            rel="noopener noreferrer"
            className="">
            <MoveUpRight className="text-muted-foreground hover:text-primary size-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
