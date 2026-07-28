"use client";

import { useState } from "react";
import InputField from "./InputField";
import Button from "../ui/Button";
import {
  sendContactMessage,
  validateContactForm,
  type ContactFormData,
  type ContactErrors,
} from "@/services/contact";
import TextAreaField from "./TextAreaField";

export default function ContactForm() {

  // Controlled form state
 const [formData, setFormData] = useState<ContactFormData>({
  name: "",
  email: "",
  message: "",
});

  // Loading state
  const [loading, setLoading] = useState(false);

  // Feedback state
  const [errors, setErrors] = useState<ContactErrors>({});
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");
 
function handleInputChange(
  field: keyof ContactFormData,
  value: string
) {
   
  setFormData((previous) => ({
    ...previous,
    [field]: value,
  }));

  setErrors((previous) => ({
    ...previous,
    [field]: undefined,
  }));
}
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrors({});
    setFormError("");
    setSuccess("");

    const validationError = validateContactForm(formData);

    if (
  validationError.name ||
  validationError.email ||
  validationError.message
) {
  setErrors(validationError);
  return;
}

    try {
      setLoading(true);

      await sendContactMessage(formData);
    

      setSuccess("Your message has been sent successfully. I will reply soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormError(
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
    {/* Name Field */}
    <div className="flex flex-col gap-2 text-black">
      <InputField error={errors.name}
        label="Full Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) =>{
          handleInputChange("name", e.target.value);
          
        }}
      />
          
    </div>
    {/*Email Field */}
    <div className="flex flex-col gap-2 text-black">
      <InputField error={errors.email}
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) =>{
          handleInputChange("email", e.target.value);
          
        
        }}
      />
    </div>
      {/* Message Text Area */}
    <div  className="flex flex-col gap-2">

      <TextAreaField
        label="Message"
        placeholder="Write your message..."
        value={formData.message}
        error={errors.message}
        rows={6}
        onChange={(e) =>
          handleInputChange("message", e.target.value)
        }
    />
            {errors.message && (
      <p className="text-red-500 text-sm">
        {errors.message}
      </p>
    )}

      </div>

      {/* Error State */}
        {formError && (
        <p className="text-red-500 text-sm">
          {formError}
        </p>
      )}
      {/* Success */}

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