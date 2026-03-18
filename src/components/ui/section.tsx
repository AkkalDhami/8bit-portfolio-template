import { cn } from "@/lib/utils";

export default function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "screen-line-before bg-background screen-line-after border-edge relative z-10 border-x-[6px] p-4 pt-6 pb-8 font-normal sm:px-6",
        className
      )}>
      {children}
    </section>
  );
}
