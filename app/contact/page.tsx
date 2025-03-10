"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputClass = "p-2 border rounded-lg focus:outline-none";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert("test");
  };

  return (
    <div className="w-full max-w-[1280px] flex flex-col gap-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4 fade-down-animation">
        <h1>Get in touch with us.</h1>
        <h4 className="text-secondary font-medium text-sm md:text-base">
          Fill out this form or reach out to us via phone or email. We'll get
          back to you as soon a possible.
        </h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:gap-4 fade-up-animation w-full"
      >
        <label>
          <h4 className="font-bold">Name</h4>
        </label>
        <input
          className={inputClass}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>
          <h4 className="font-bold">Email</h4>
        </label>
        <input
          className={inputClass}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>
          <h4 className="font-bold">Message</h4>
        </label>
        <textarea
          className={inputClass}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
        />
        <div className="flex justify-center my-8">
          <Button type="secondary" buttonType="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
