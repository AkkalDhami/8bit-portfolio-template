import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { EMAIL } from "@/lib/constants";
import { Button } from "../ui/8bit/button";
import Link from "next/link";
import { PixelBorder } from "../shared/pixel-border";

export function ContactCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="relative text-center">
      <div className="group relative p-8 md:p-12">
        <PixelBorder />
        <Heading className="mb-4 text-xl font-bold md:text-2xl">
          Ready to Start Your Project?
        </Heading>
        <SubHeading
          as="p"
          className="text-muted-foreground mx-auto max-w-md text-sm sm:text-lg">
          Let&apos;s schedule a call to discuss your ideas and how we can bring
          them to life.
        </SubHeading>
        <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href={`mailto:${EMAIL}`} className="py-3">
              {" "}
              Send Email
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
