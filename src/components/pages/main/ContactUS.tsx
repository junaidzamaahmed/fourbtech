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
  firstname: z.string().min(2),
  lastname: z.string().min(10),
  email: z.string().email(),
  phone: z.string().min(9),
  message: z.string(),
  save: z.boolean(),
});

const ContactUS = () => {
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
  const [save, setSave] = useState(false);
  const onSubmit = () => {
    console.log(save);
  };
  return (
    <section className="bg-custom-white main-container grid grid-cols-1 md:grid-cols-2 py-20 *:p-5">
      <div className="flex-between flex-col bg-[#F0F5FF]">
        <h2>Ready To Take Your Business to the Next Level?</h2>
        <p>
          Contact us today to schedule a consultation or learn more about our
          services
        </p>
        <ul className="*:text-p-color flex list-none flex-col gap-5 items-start justify-between ">
          <li>+447424438741</li>
          <li>infO@fourbtech.com</li>
          <li>252-262 Romford Road, E7 9HZ, London, UK</li>
        </ul>
      </div>
      <div className="bg-dark-bg-primary">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="*:text-custom-white flex flex-col gap-4"
          >
            <div className="*:text-custom-white grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="border-p-color rounded-none !border-0 !border-b-[2px] !ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="border-p-color rounded-none !border-0 !border-b-[2px] !ring-0"
                        {...field}
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="border-p-color rounded-none !border-0 !border-b-[2px] !ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="border-p-color rounded-none !border-0 !border-b-[2px] !ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <Checkbox
                id="checked"
                onCheckedChange={() => setSave(true)}
                className="checked:bg-accent-hover z-10 size-3 rounded-full"
              />
              <label
                htmlFor="terms"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save details for later
              </label>
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-p-color rounded-none !border-0 !border-b-[2px] !ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ArrowButton
              variant="fill"
              left
              type="submit"
              className="max-w-1/2"
            >
              Submit
            </ArrowButton>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactUS;
