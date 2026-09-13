const services = [
  {
    id: "anxiety-panic",
    number: "01",
    title: "Anxiety & Panic",
    text: "Constant worry, racing thoughts, or a body that never quite relaxes. We'll work together to understand what's underneath the anxiety and build tools to help you feel calmer, day to day.",
  },
  {
    id: "trauma-recovery",
    number: "02",
    title: "Trauma Recovery",
    text: "I work with adults navigating single-incident trauma as well as long-standing patterns rooted in childhood, relationships, or chronic stress — with an emphasis on safety and stabilization.",
  },
  {
    id: "burnout-perfectionism",
    number: "03",
    title: "Burnout & Perfectionism",
    text: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy becomes a space to slow down and build a sustainable way of living.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <h2 className="font-serif-heading text-3xl md:text-4xl mb-12">
        My <span className="font-script-accent text-terracotta text-5xl">Services</span> include...
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-28 group rounded-2xl border border-gold/30 bg-ivory p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-terracotta/40">
            <span className="font-script-accent text-4xl text-terracotta/50">{s.number}</span>
            <h3 className="font-serif-heading text-xl mt-2 mb-3">{s.title}</h3>
            <p className="text-sm text-charcoal/80 mb-4">{s.text}</p>
            <a href="#booking" className="text-xs tracking-[0.2em] uppercase text-terracotta border-b border-terracotta pb-1 transition-opacity duration-300 group-hover:opacity-70">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}