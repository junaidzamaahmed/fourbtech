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
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import ArrowButton from "@/components/global/ArrowButton";
// import { AlertCircle, CheckCircle } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  firstname: z.string().min(2, "First name is too short"),
  lastname: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(9, "Invalid phone number"),
  message: z.string().min(1, "Message cannot be empty"),
  save: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const ContactUS = () => {
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
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      save: false,
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
      className="main-container bg-custom-white my-20 grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2"
      id="contact"
    >
      {/* Left Info Block */}
      <div className="flex flex-col justify-between gap-8 bg-[#F0F5FF] p-10 md:p-14">
        <div className="flex h-full w-full flex-col items-start justify-center">
          <h2 className="text-dark-bg-primary mb-4 text-2xl font-semibold">
            Ready To Take Your Business to the Next Level?
          </h2>
          <p className="text-p-color mb-6">
            Contact us today to schedule a consultation or learn more about our
            services.
          </p>
          <ul className="text-p-color space-y-2 text-sm sm:text-base">
            <li>
              <strong>Phone:</strong> +447424438741
            </li>
            <li>
              <strong>Email:</strong> info@fourbtech.com
            </li>
            <li>
              <strong>Address:</strong> 93/101 Green Field Road, London, United
              Kingdom
            </li>
          </ul>
        </div>
      </div>

      {/* Form Block */}
      <div className="bg-dark-bg-primary rounded-xl p-10 md:p-14">
        {/* {submitStatus && (
          <Alert
            className={`mb-6 ${submitStatus.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}`}
          >
            {submitStatus.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>{submitStatus.success ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{submitStatus.message}</AlertDescription>
          </Alert>
        )} */}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-custom-white flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["firstname", "lastname", "email", "phone"].map((field, idx) => (
                <FormField
                  key={idx}
                  control={form.control}
                  name={field as keyof FormData}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm capitalize">
                        {field.name === "firstname"
                          ? "First Name"
                          : field.name === "lastname"
                            ? "Last Name"
                            : field.name === "email"
                              ? "Email"
                              : "Phone Number"}
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

            {/* Checkbox */}
            <div className="flex items-center gap-3 text-sm">
              <Checkbox
                id="save"
                checked={save}
                onCheckedChange={(checked) => setSave(Boolean(checked))}
                disabled={isSubmitting}
                className="data-[state=checked]:!bg-accent-hover border-accent-hover data-[state=checked]:text-custom-white size-4 rounded-full"
              />
              <label htmlFor="save" className="text-custom-white">
                Save details for later
              </label>
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
                      className="border-custom-white/60 rounded-none border-0 !border-b-2 px-1 py-2 focus:ring-0 focus:outline-0"
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
                className="w-fit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </ArrowButton>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactUS;
