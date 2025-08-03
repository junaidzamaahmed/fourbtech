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
import { Input } from "@/components/ui/input";
import ArrowButton from "@/components/global/ArrowButton";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  websiteUrl: z.string().url("Invalid Url"),
});

type FormData = z.infer<typeof formSchema>;

const BookAnAudit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      websiteUrl: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      // Include the save checkbox value
      const formData = { ...data };
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
    <section className="main-container bg-custom-white" id="contact">
      <div className="to-dark-bg-primary grid grid-cols-1 overflow-hidden rounded-xl bg-radial-[at_50%_10%] from-[#5A75BB] sm:grid-cols-2 lg:grid-cols-2">
        {/* Left Info Block */}
        <div className="flex h-full flex-col items-center justify-center gap-8 p-10 md:p-14">
          <h2 className="text-custom-white">
            Ready to Grow Your Business Organically?
          </h2>
          <p className="text-custom-white">
            Get your free SEO audit and discover how we can help your business
            rank higher and attract more customers.
          </p>
        </div>

        {/* Form Block */}
        <div className="rounded-xl p-10 md:p-14">
          {submitStatus && (
            <Alert
              className={`mb-6 ${submitStatus.success ? "border-green-200 bg-green-50 text-green-800" : "border-red-200 bg-red-50 text-red-800"}`}
            >
              {submitStatus.success ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {submitStatus.success ? "Success" : "Error"}
              </AlertTitle>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="text-custom-white flex flex-col gap-6"
            >
              <div className="flex flex-col gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          className="border-custom-white/60 rounded-none border-0 !border-b-2 px-1 py-1 focus:ring-0 focus:outline-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          className="border-custom-white/60 rounded-none border-0 !border-b-2 px-1 py-1 focus:ring-0 focus:outline-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        Website URL
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          className="border-custom-white/60 rounded-none border-0 !border-b-2 px-1 py-1 focus:ring-0 focus:outline-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Submit */}
              <div className="mt-4">
                <ArrowButton
                  variant="fill"
                  left
                  type="submit"
                  className="w-fit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Book Your Audit"}
                </ArrowButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default BookAnAudit;
