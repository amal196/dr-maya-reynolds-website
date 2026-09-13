"use client";

import { useState } from "react";
import Image from "next/image";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", questions: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="bg-ivory-warm py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-gold/25 rounded-[55%_45%_60%_40%/45%_55%_40%_60%]" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/booking.jpg" alt="A warm, calm space to begin your conversation with Dr. Maya Reynolds" fill className="object-cover" />
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-sage mb-4">Book a Free Consultation</p>
          <h2 className="font-serif-heading text-3xl md:text-4xl mb-4">Let&apos;s find a time to talk.</h2>
          <p className="text-charcoal/80 mb-8">
            Share a few details below and I&apos;ll personally reach out to schedule your free 15-minute consultation — no obligation, just a conversation.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-sage/40 bg-ivory p-10">
              <p className="font-serif-heading text-2xl text-sage mb-2">Submitted!</p>
              <p className="text-charcoal/80">
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We&apos;ll contact you soon to confirm your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gold/40 bg-ivory p-8 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-xs tracking-wide uppercase text-charcoal/60 mb-2">Full Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Doe" className="w-full rounded-lg border border-gold/40 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/40" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-wide uppercase text-charcoal/60 mb-2">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" className="w-full rounded-lg border border-gold/40 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/40" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs tracking-wide uppercase text-charcoal/60 mb-2">Phone Number</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(310) 555-0134" className="w-full rounded-lg border border-gold/40 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/40" />
              </div>
              <div>
                <label htmlFor="questions" className="block text-xs tracking-wide uppercase text-charcoal/60 mb-2">Any Questions? (optional)</label>
                <textarea id="questions" name="questions" rows={3} value={form.questions} onChange={handleChange} placeholder="Anything you'd like me to know before we talk..." className="w-full rounded-lg border border-gold/40 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/40 resize-none" />
              </div>
              <button type="submit" className="w-full rounded-full bg-terracotta text-ivory px-7 py-3 text-sm tracking-wide shadow-md transition-all duration-300 hover:bg-terracotta-dark hover:shadow-xl">
                Submit
              </button>
              <p className="text-center text-xs text-charcoal/50">We&apos;ll contact you soon to confirm your appointment.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}