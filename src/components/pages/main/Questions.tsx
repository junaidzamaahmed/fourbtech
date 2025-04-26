"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/constants";
import clsx from "clsx";

export default function FaqSection() {
  return (
    <section className=" bg-dark-bg-primary main-container text-custom-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-custom-white mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-b border-gray-700 pb-4"
            >
              <AccordionTrigger className="hover:text-custom-white flex w-full items-center justify-between text-left text-xl font-medium transition-all">
                <span>
                  {idx + 1}. {faq.question}
                </span>
                <ArrowUpRight className={clsx("h-6 w-6")} />
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent asChild>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-custom-white/60 mt-3 ml-6 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
