"use client";

import { Textarea } from "@/components/ui/8bit/textarea";
import { Input } from "@/components/ui/8bit/input";
import { useState, useTransition } from "react";
import { Send } from "lucide-react";
import { Label } from "@/components/ui/8bit/label";
import { toast } from "@/components/ui/8bit/toast";
import { contactFormSchema, ContactFormValues } from "@/validators/contact";
import z from "zod";
import { Button } from "../ui/8bit/button";
import { Spinner } from "../ui/8bit/spinner";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string[]>>
  >({});
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      toast("Please check the form for errors.");
      return;
    }

    startTransition(async () => {
      const device = navigator.userAgent || "Unknown";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            device
          })
        });

        const data = await response.json();

        if (data.success) {
          toast(data.message || "Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          if (data.error && typeof data.error === "object") {
            setErrors(data.error);
          }
          toast(`${typeof data.error === "string" ? data.error
            : "Failed to send message."}`)
        }
      } catch {
        toast("Something went wrong. Please try again.")
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field when user starts typing
    if (errors[name as keyof ContactFormValues]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ContactFormValues];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="">
        <h3 className="text-xl font-normal">Send me a message</h3>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-muted-primary">
          Your Name *
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          disabled={isPending}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-muted-primary">
          Your Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isPending}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-primary">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          className="max-h-[100px] resize-none"
          placeholder="Briefly describe your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
          disabled={isPending}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer py-2"
        disabled={isPending}>
        <div className="flex items-center justify-center gap-2">
          {isPending ? (
            <Spinner variant="diamond" className="size-5" />
          ) : (
            <Send className="size-5" />
          )}
          {isPending ? "Sending... " : "Send Message"}
        </div>
      </Button>
    </form>
  );
}
