import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 pb-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-xs tracking-[0.25em] uppercase text-sage mb-4">
          In-Person in Santa Monica & Telehealth Across California
        </p>
        <h1 className="font-serif-heading text-4xl md:text-5xl leading-tight text-charcoal">
          Steady, grounded support for anxiety, trauma, and{" "}
          <span className="font-script-accent text-terracotta text-5xl md:text-6xl">Burnout</span>.
        </h1>
        <p className="mt-6 text-charcoal/80 max-w-md">
          Individual therapy for high-achieving adults who feel overwhelmed, exhausted, or stuck in overthinking — even when everything looks fine on the outside.
        </p>
        <a href="#booking" className="inline-block mt-8 rounded-full bg-terracotta text-ivory px-7 py-3 text-sm tracking-wide shadow-md transition-all duration-300 hover:bg-terracotta-dark hover:shadow-xl hover:scale-[1.03]">
          Book a Free Consultation
        </a>
        <p className="mt-3 text-xs text-charcoal/50 tracking-wide">
          Free 15-minute call · No obligation
        </p>
      </div>

      <div className="relative">
        <div className="absolute -z-10 -top-10 -right-8 w-72 h-72 bg-gold/30 rotate-6 rounded-[60%_40%_55%_45%/45%_55%_40%_60%]" />
        <div className="absolute -z-10 -bottom-8 -left-6 w-48 h-48 bg-sage-light/25 -rotate-6 rounded-[45%_55%_40%_60%/60%_40%_55%_45%]" />

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden bg-sage-light/30 shadow-lg">
            <Image src="/images/hero-1.jpg" alt="Calm Santa Monica therapy client reflecting in natural light" fill className="object-cover" priority />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ivory/95 backdrop-blur px-4 py-2 text-xs font-medium text-charcoal shadow-lg">
              <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
              Now Accepting New Clients
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mt-10 bg-gold/30 shadow-lg">
            <Image src="/images/hero-2.jpg" alt="Santa Monica coastline, calm and grounding" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}