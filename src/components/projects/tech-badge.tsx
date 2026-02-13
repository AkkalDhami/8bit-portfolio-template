import { cn } from "@/lib/utils";
import { Badge } from "../ui/8bit/badge";

export interface Tech {
  name: string;
}

export function TechBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Badge className={cn(className)}>{children}</Badge>;
}
