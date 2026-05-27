export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function validateContactForm(data: ContactFormData): string | null {
  const { name, email, message } = data;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return "Please fill in all fields.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export async function sendContactMessage(data: ContactFormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error || "Failed to send message.");
  }

  return payload;
}
