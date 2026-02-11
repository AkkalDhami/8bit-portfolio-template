"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/8bit/button";

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.back();
      }}
      variant="secondary"
      className="group px-4 py-2">
      <div className="flex items-center gap-2">
        <ArrowLeft className="transition-all group-hover:-translate-x-1" /> Go
        Back
      </div>
    </Button>
  );
}
