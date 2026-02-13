import { cn } from "@/lib/utils";

export function PixelBorder({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute -top-1.5 left-1.5 h-1.5 w-1/2 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute -top-1.5 right-1.5 h-1.5 w-1/2 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute -bottom-1.5 left-1.5 h-1.5 w-1/2 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute right-1.5 -bottom-1.5 h-1.5 w-1/2 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute top-0 left-0 size-1.5 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute top-0 right-0 size-1.5 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute bottom-0 left-0 size-1.5 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute right-0 bottom-0 size-1.5 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute top-1.5 -left-1.5 h-[calc(100%-12px)] w-1.5 duration-300",
          className
        )}
      />
      <div
        className={cn(
          "bg-muted-tertiary group-hover:bg-muted-foreground absolute top-1.5 -right-1.5 h-[calc(100%-12px)] w-1.5 duration-300",
          className
        )}
      />
    </>
  );
}
