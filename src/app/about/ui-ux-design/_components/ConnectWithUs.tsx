"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import ArrowButton from "@/components/global/ArrowButton";
import { Input } from "@/components/ui/input";
// import { AlertCircle, CheckCircle } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message cannot be empty"),
});

type FormData = z.infer<typeof formSchema>;

const ConnectWithUs = () => {
  const [save, setSave] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      // Include the save checkbox value
      const formData = { ...data, save };

      // Send email using API route
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        form.reset();
        setSave(false);
      } else {
        setSubmitStatus({
          success: false,
          message:
            result.message || "Failed to send your message. Please try again.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="main-container to-dark-bg-primary mx-20 my-20 grid grid-cols-1 overflow-hidden rounded-xl bg-radial-[at_50%_0%] from-[#5A75BB] p-10 lg:grid-cols-2"
      id="contact"
    >
      {/* Left Info Block */}
      <div className="flex flex-col items-center gap-12 px-10 md:p-14">
        <h1 className="text-5xl text-white">
          Let&apos;s Design Something That Help Grow Your Business
        </h1>
        <p className="text-xl text-white">
          Book a free discovery call and explore how great UX can accelerate
          your product&apos;s success.
        </p>
      </div>

      {/* Form Block */}
      <div className="md:p-14">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-custom-white flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["name", "email"].map((field, idx) => (
                <FormField
                  key={idx}
                  control={form.control}
                  name={field as keyof FormData}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        {field.name === "name"
                          ? "Name"
                          : field.name === "email" && "Email"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={
                            typeof field.value === "boolean"
                              ? field.value.toString()
                              : field.value
                          }
                          disabled={isSubmitting}
                          className="border-custom-white/60 rounded-none border-0 !border-b-2 px-1 py-2 focus:ring-0 focus:outline-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={4}
                      disabled={isSubmitting}
                      className="border-custom-white/60 min-h-40 rounded-none border-0 !border-b-2 px-1 py-2 focus:ring-0 focus:outline-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="mt-4">
              <ArrowButton
                variant="fill"
                left
                type="submit"
                className="p-6 px-12"
                disabled={isSubmitting}
              >
                Request Your Free Quote
              </ArrowButton>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ConnectWithUs;
