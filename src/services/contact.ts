export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};


export type ContactErrors = {
  name?: string;
  email?: string;
  message?: string;
};


export function validateContactForm(
  data: ContactFormData
): ContactErrors {

  const errors: ContactErrors = {};

  const { name, email, message } = data;


  if (!name.trim()) {
    errors.name = "Name is required.";
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    errors.email = "Email is required.";
  } 
  else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }


  if (!message.trim()) {
    errors.message = "Message is required.";
  }


  return errors;
}


export async function sendContactMessage(
  data: ContactFormData
) {

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });


  const payload = await response.json();


  if (!response.ok) {
    throw new Error(
      payload.error || "Failed to send message."
    );
  }


  return payload;
}