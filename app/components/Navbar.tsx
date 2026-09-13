"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "#office", label: "Our Office" },
  { href: "#faq", label: "FAQs" },
  { href: "#footer-contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#anxiety-panic", label: "Anxiety & Panic" },
  { href: "#trauma-recovery", label: "Trauma Recovery" },
  { href: "#burnout-perfectionism", label: "Burnout & Perfectionism" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-gold/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif-heading text-xl text-charcoal">Dr. Maya Reynolds</span>
          <span className="text-[11px] tracking-[0.2em] uppercase text-sage">PsyD, Clinical Psychologist</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <a href="#about" className="relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100">
            About
          </a>
          <a href="#approach" className="relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100">
            My Approach
          </a>

          <div className="relative group">
            <a href="#services" className="relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100">
              Services
            </a>
            <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              <div className="w-60 rounded-xl border border-gold/40 bg-ivory shadow-lg py-2">
                {serviceLinks.map((service) => (
                  <a key={service.href} href={service.href} className="block px-4 py-2.5 text-sm text-charcoal hover:bg-ivory-warm hover:text-terracotta transition-colors">
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#booking" className="hidden sm:inline-block rounded-full border border-terracotta px-5 py-2 text-sm transition-all duration-300 hover:bg-terracotta hover:text-ivory hover:shadow-md">
            Book a Consultation
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-terracotta/40 text-terracotta"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gold/40 bg-ivory px-6 py-4 space-y-1">
          <a href="#about" onClick={() => setMobileOpen(false)} className="block py-3 text-sm border-b border-gold/20">
            About
          </a>
          <a href="#approach" onClick={() => setMobileOpen(false)} className="block py-3 text-sm border-b border-gold/20">
            My Approach
          </a>

          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-3 text-sm border-b border-gold/20">
              Services
              <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-2">
                {serviceLinks.map((service) => (
                  <a key={service.href} href={service.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-charcoal/70">
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm border-b border-gold/20">
              {link.label}
            </a>
          ))}

          <a href="#booking" onClick={() => setMobileOpen(false)} className="block mt-4 text-center rounded-full bg-terracotta text-ivory px-5 py-3 text-sm">
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}