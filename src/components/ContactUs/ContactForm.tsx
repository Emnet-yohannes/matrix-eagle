"use client";

import type React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-transparent flex items-center justify-center px-4 sm:px-6 md:px-10 2xl:py-12 py-10">
      <div className="w-full max-w-3xl 2xl:max-w-[50%]">
        <h1 className="text-[#7fe4ff] font-bold text-center mb-10 sm:mb-14 md:mb-16
          text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl
          leading-tight
        ">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 sm:space-y-6 md:space-y-8"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="
              w-full
              h-12 sm:h-14 md:h-16
              px-5 sm:px-6 md:px-8
              text-white placeholder-white
              text-base sm:text-lg md:text-xl xl:text-2xl
              font-medium
              bg-gradient-to-r from-[#737373]/30 to-[#000000]/70
              border-4 border-[#7fe4ff]
              rounded-3xl
              focus:outline-none focus:ring-2 focus:ring-[#7fe4ff]
              transition
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="
              w-full
              h-12 sm:h-14 md:h-16
              px-5 sm:px-6 md:px-8
              text-white placeholder-white
              text-base sm:text-lg md:text-xl xl:text-2xl
              font-medium
              bg-gradient-to-r from-[#737373]/30 to-[#000000]/70
              border-4 border-[#7fe4ff]
              rounded-3xl
              focus:outline-none focus:ring-2 focus:ring-[#7fe4ff]
              transition
            "
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={8}
            className="
              w-full
              px-5 sm:px-6 md:px-8
              py-5 sm:py-6 md:py-8
              text-white placeholder-white
              text-base sm:text-lg md:text-xl xl:text-2xl
              font-medium
              bg-gradient-to-r from-[#737373]/30 to-[#000000]/70
              border-4 border-[#7fe4ff]
              rounded-3xl
              resize-none
              focus:outline-none focus:ring-2 focus:ring-[#7fe4ff]
              transition
            "
          />

          <div className="flex justify-center pt-4 sm:pt-6">
            <button
              type="submit"
              className="
                px-8 sm:px-12 md:px-16
                py-4 sm:py-5
                text-black
                font-bold
                text-base sm:text-lg md:text-xl xl:text-2xl
                bg-[#38b6ff]
                hover:bg-[#2da5ef]
                rounded-3xl
                transition-colors duration-200
                shadow-md
                focus:outline-none focus:ring-4 focus:ring-[#38b6ff]/50
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
