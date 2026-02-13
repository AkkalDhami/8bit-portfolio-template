import { Button } from "@/components/ui/8bit/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-6 p-6 text-center sm:p-12">
        <h1 className="text-4xl font-extrabold sm:text-6xl">404</h1>
        <h2 className="text-muted-primary text-2xl font-bold sm:text-4xl">
          Page Not Found!
        </h2>
        <p className="text-muted-secondary text-xl sm:text-2xl">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href={"/"}>Back to home page</Link>
        </Button>
      </div>
    </div>
  );
}
