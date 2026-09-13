"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you offer virtual sessions?",
    a: "Yes — I offer secure telehealth sessions for clients located anywhere in California, along with in-person sessions at my Santa Monica office.",
  },
  {
    q: "What is EMDR and how does it help?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based technique that helps reprocess how painful memories are stored in the brain, allowing for relief and lasting healing from trauma.",
  },
  {
    q: "I seem “fine” on the outside — is therapy still for me?",
    a: "Absolutely. Many of my clients are high-achieving and self-aware, yet quietly exhausted, overthinking, or on edge. You don’t have to be in crisis to benefit from support.",
  },
  {
    q: "How long does therapy typically take?",
    a: "Every person’s pace is different. We’ll check in regularly on your progress and goals together, and adjust our work as needed — there’s no one-size-fits-all timeline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory-warm py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div>
          <h2 className="font-serif-heading text-4xl md:text-5xl mb-6">Questions?</h2>
          <p className="text-charcoal/80 mb-4">
            Here are some of the most common questions I get about working together.
          </p>
          <p className="text-charcoal/80">
            If you don&apos;t see your question listed or are ready to schedule a free consult,{" "}
            <a href="#booking" className="text-terracotta underline underline-offset-4 hover:text-terracotta-dark">
              book a consultation
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="rounded-xl border border-gold/40 bg-ivory overflow-hidden">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between text-left px-6 py-5">
                  <h3 className="font-serif-heading text-lg pr-4">{item.q}</h3>
                  <Plus size={20} className={`shrink-0 text-terracotta transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-charcoal/80 px-6 pb-5">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}