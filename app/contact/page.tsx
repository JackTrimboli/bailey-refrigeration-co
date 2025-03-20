"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inputClass = "p-2 border rounded-lg focus:outline-none w-full";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1280px] flex flex-col gap-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4 fade-down-animation">
        <h1>Get in touch with us.</h1>
        <h4 className="text-secondary font-medium text-sm md:text-base">
          Fill out this form or reach out to us via phone or email. We'll get
          back to you as soon as possible.
        </h4>
      </div>

      {/* No form tag needed */}
      <div className="flex flex-col gap-2 md:gap-4 fade-up-animation w-full">
        <label className="font-bold">Name</label>
        <input
          className={inputClass}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="font-bold">Email</label>
        <input
          className={inputClass}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="font-bold">Message</label>
        <textarea
          className={inputClass}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <div className="flex justify-center my-8">
          <Button type="secondary" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </div>

        {success && (
          <p className="text-green-500 text-center">
            Message sent successfully!
          </p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}
