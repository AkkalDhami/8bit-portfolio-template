import { cn } from "@/lib/utils";
import React from "react";

export function SubHeading({
  children,
  as = "p",
  className
}: {
  children: React.ReactNode;
  as?: "h3" | "p";
  className?: string;
}) {
  const Tag = as || "h3";
  return (
    <Tag
      className={cn(
        "text-muted-foreground font-normal mx-auto max-w-3xl text-base",
        className
      )}>
      {children}
    </Tag>
  );
}
