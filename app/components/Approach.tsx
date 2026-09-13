import Image from "next/image";

export default function Approach() {
  return (
    <section id="approach" className="bg-ivory-warm py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -z-10 -bottom-6 -right-6 w-56 h-56 bg-gold/25 rounded-[50%_50%_35%_65%/60%_40%_60%_40%]" />
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-sage-light/30 shadow-lg">
            <Image
              src="/images/approach.jpg"
              alt="Warm, grounded therapy session space in Santa Monica"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="inline-block rounded-full bg-sage/10 text-sage text-[11px] tracking-[0.15em] uppercase px-3 py-1 mb-4">
            Evidence-Based Care
          </span>
          <p className="text-xs tracking-[0.25em] uppercase text-sage mb-4">
            My Approach
          </p>
          <h2 className="font-serif-heading text-3xl md:text-4xl mb-5">
            Practical tools, with real depth.
          </h2>
          <p className="text-charcoal/80 mb-4">
            I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
          </p>
          <p className="text-charcoal/80">
            I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques — helping you understand both the emotional and physiological sides of what you&apos;re experiencing.
          </p>
        </div>
      </div>
    </section>
  );
}