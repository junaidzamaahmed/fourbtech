"use client";
import React, { useEffect, useState } from "react";
import { CiPaperplane } from "react-icons/ci";
import { Input } from "../ui/input";

export default function SendMainFooter() {
  const [sendMail, setSendMail] = useState("");
  const [placeHolder, setPlaceHolder] = useState<string>("Email Address");
  const [isValid, setIsValid] = useState(true);

  const handleSubmission = async () => {
    try {
      if (!sendMail) {
        setIsValid(false);
      }
      // Send email using API route
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: "New User",
          lastname: "...",
          email: sendMail,
          phone: "",
          message: "This message was sent form the footer.",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isValid) {
      setPlaceHolder("Enter a valid email");
    }
    const resetPlaceHolder = setTimeout(() => {
      setPlaceHolder("Email Address");
      setIsValid(true);
    }, 2000);
    return () => clearTimeout(resetPlaceHolder);
  }, [isValid, placeHolder]);

  return (
    <div className="relative max-w-full">
      <Input
        placeholder={`${placeHolder}`}
        className="bg-custom-white text-dark-bg-primary rounded-full px-4 py-2 pr-10 text-sm focus-visible:!ring-0"
        value={sendMail}
        onChange={(e) => setSendMail(e.target.value)}
        required
      />
      <CiPaperplane
        className="text-dark-bg-primary hover:text-accent-hover absolute top-1/2 right-4 z-50 size-6 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-12"
        onClick={handleSubmission}
      />
    </div>
  );
}
