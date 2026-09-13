import Image from "next/image";
import { Sun, ShieldCheck, Car, Waves } from "lucide-react";

const features = [
  { icon: Sun, text: "Bright, naturally lit rooms" },
  { icon: ShieldCheck, text: "Private & soundproofed for confidentiality" },
  { icon: Car, text: "Free parking right outside" },
  { icon: Waves, text: "5 minutes from the Santa Monica coastline" },
];

export default function Office() {
  return (
    <section id="office" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-sage mb-4">Our Office</p>
          <h2 className="font-serif-heading text-3xl md:text-4xl mb-5 leading-snug">
            A calm space to <span className="font-script-accent text-terracotta text-5xl">Land</span>.
          </h2>
          <p className="text-charcoal/80 mb-4">
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.
          </p>
          <p className="text-charcoal/80 mb-8">
            Whether you visit in person or join a secure telehealth session from home, every part of our work together is designed around your safety, comfort, and privacy.
          </p>

          <ul className="space-y-4 mb-8">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-charcoal/80">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="inline-block rounded-xl border border-gold/50 px-5 py-4 text-sm">
            <p className="font-medium text-charcoal">123th Street 45 W</p>
            <p className="text-charcoal/70">Santa Monica, CA 90401</p>
          </div>
        </div>

        <div className="relative mb-16 md:mb-0">
          <div className="absolute -top-6 -left-6 h-full w-full rounded-3xl bg-gold/25 -z-10" />
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/office-1.jpg" alt="Dr. Maya Reynolds' calm, naturally lit Santa Monica therapy office" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-transparent" />
            <p className="absolute top-6 left-6 font-script-accent text-3xl text-ivory">Welcome.</p>
          </div>
          <div className="group absolute -bottom-10 -right-6 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory">
            <Image src="/images/office-2.jpg" alt="Comfortable, private seating area in the Santa Monica office" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}