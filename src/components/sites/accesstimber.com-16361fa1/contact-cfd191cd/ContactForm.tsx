"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    setSubmitted(true);
    window.location.href = `mailto:ellena@zhongxinwoods.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="ct-form-card" aria-labelledby="contact-form-title">
      <div>
        <span className="ct-form-label">Start a conversation</span>
        <h2 id="contact-form-title">Contact Us</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="First name" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" placeholder="Enter your email" required />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Message" rows={7} required />

        <button type="submit" className="ct-form-submit">
          Contact Us <span aria-hidden="true">↗</span>
        </button>
        {submitted && <p className="ct-form-note">Opening your email app…</p>}
      </form>
    </section>
  );
}
