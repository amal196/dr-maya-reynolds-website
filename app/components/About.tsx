import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-ivory-warm py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-sage mb-4">I&apos;m Dr. Maya Reynolds, and I want to help</p>
            <h2 className="font-serif-heading text-3xl md:text-4xl text-charcoal leading-snug">
              You&apos;ve been holding it together for so long, it&apos;s hard to remember what ease feels like.
            </h2>
          </div>
          <div className="space-y-4 text-charcoal/80 relative">
            <span className="absolute -top-6 -left-2 font-serif-heading text-7xl text-terracotta/20 select-none">&ldquo;</span>
            <p className="relative">
              I&apos;m a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware — but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
          </div>
        </div>

        {/* Meet Dr. Maya - real headshot */}
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start bg-ivory rounded-2xl border border-gold/30 shadow-sm p-8 md:p-10 mb-12">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md">
            <Image src="/images/maya-headshot.png" alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica, CA" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-sage mb-3">Meet Your Therapist</p>
            <h3 className="font-serif-heading text-2xl md:text-3xl mb-1">Dr. Maya Reynolds, PsyD</h3>
            <p className="text-sm text-terracotta mb-5">Licensed Clinical Psychologist</p>
            <div className="space-y-4 text-charcoal/80 text-sm">
              <p>
                In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress.
              </p>
              <p>
                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California.
              </p>
            </div>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-charcoal/80">
          Together, we&apos;ll slow down, understand what&apos;s really going on beneath the surface, and build a more sustainable way of living and working — not just symptom relief, but a stronger relationship with yourself over time.
        </p>
      </div>
    </section>
  );
}