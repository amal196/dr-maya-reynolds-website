import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "My Approach" },
  { href: "#services", label: "Services" },
  { href: "#office", label: "Our Office" },
  { href: "#faq", label: "FAQs" },
  { href: "#footer-contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-ivory/80 py-14">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta via-gold to-sage" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif-heading text-xl text-ivory mb-1">Dr. Maya Reynolds</p>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">PsyD, Clinical Psychologist</p>
          <p className="text-sm">
            You&apos;re welcome to visit our Santa Monica office or schedule a virtual session from anywhere in California — whatever works best for you.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ivory after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="footer-contact" className="scroll-mt-24">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-terracotta shrink-0 mt-0.5" />
              <span>123th Street 45 W<br />Santa Monica, CA 90401</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-terracotta shrink-0" />
              <span>hello@mayareynoldstherapy.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-terracotta shrink-0" />
              <span>(310) 555-0134</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
        <p>Terms &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Disclaimer</p>
        <a href="#" className="flex items-center gap-2 rounded-full border border-ivory/20 px-4 py-2 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}