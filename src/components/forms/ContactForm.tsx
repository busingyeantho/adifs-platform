"use client";

import { useState } from "react";
import InputField from "./InputField";
import Button from "../ui/Button";
import {
  sendContactMessage,
  validateContactForm,
} from "@/services/contact";

export default function ContactForm() {

  // Controlled form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Feedback state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validationError = validateContactForm({
      name,
      email,
      message,
    });

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      await sendContactMessage({
        name,
        email,
        message,
      });

      setSuccess("Your message has been sent successfully. I will reply soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        flex-col
        gap-6
        max-w-2xl
        mx-auto
      "
    >

      <InputField
        label="Full Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <InputField
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      {/* Message Field */}
      <div className="flex flex-col gap-2">

        <label className="font-medium text-gray-700">
          Message
        </label>

        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          rows={6}
          className="
            w-full
            p-4
            rounded-xl
            border
            border-gray-300
            outline-none
            transition-all
            duration-300
            focus:border-orange-400
            focus:ring-2
            focus:ring-orange-200
          "
        />

      </div>

      {/* Error State */}
      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      {success && (
        <p className="bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm">
          {success}
        </p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        text={loading ? "Sending..." : "Send Message"}
        className="w-full"
      />

    </form>
  );
}