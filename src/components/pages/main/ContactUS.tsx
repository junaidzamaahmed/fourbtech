"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import ArrowButton from "@/components/global/ArrowButton";

const formSchema = z.object({
  firstname: z.string().min(2, "First name is too short"),
  lastname: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(9, "Invalid phone number"),
  message: z.string().min(1, "Message cannot be empty"),
  save: z.boolean(),
});

const ContactUS = () => {
  const [save, setSave] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ ...data, save });
  };

  return (
    <section className="main-container bg-custom-white grid grid-cols-1 overflow-hidden rounded-xl shadow-md md:grid-cols-2">
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
              <strong>Address:</strong> 252-262 Romford Road, E7 9HZ, London, UK
            </li>
          </ul>
        </div>
      </div>

      {/* Form Block */}
      <div className="bg-dark-bg-primary p-10 md:p-14">
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
                  name={field as keyof z.infer<typeof formSchema>}
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
                onCheckedChange={(checked) => setSave(Boolean(checked))}
                className="data-[state=checked]:!bg-accent-hover border-accent-hover size-4 rounded-full data-[state=checked]:text-custom-white "
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
                      className="border-custom-white/60 rounded-none border-0 !border-b-2 px-1 py-2 focus:ring-0 focus:outline-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="mt-4">
              <ArrowButton variant="fill" left type="submit" className="w-fit">
                Submit
              </ArrowButton>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactUS;
