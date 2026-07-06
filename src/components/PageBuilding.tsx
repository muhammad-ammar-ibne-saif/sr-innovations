import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

export const PageHero = ({ eyebrow, title, subtitle, children }: { eyebrow: string; title: React.ReactNode; subtitle?: string; children?: React.ReactNode }) => (
  <section className="relative surface-dark overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="absolute -top-32 -left-32 size-[420px] rounded-full bg-primary/25 blur-3xl" />
    <div className="absolute -bottom-32 -right-32 size-[420px] rounded-full bg-primary-glow/20 blur-3xl" />
    <div className="container-wide relative py-20 md:py-28">
      <div className="max-w-3xl space-y-5 animate-fade-in-up">
        <span className="eyebrow-dark">{eyebrow}</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.05]">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-white/75 max-w-2xl">{subtitle}</p>}
        {children}
      </div>
    </div>
  </section>
);

export const CtaBand = () => (
  <section className="py-16 md:py-20">
    <div className="container-wide">
      <div className="rounded-[2rem] bg-gradient-primary p-8 md:p-14 text-primary-foreground shadow-elegant relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight">Ready to turn your marketing into a lead machine?</h3>
            <p className="text-primary-foreground/85 mt-2">Free 30 minute audit. No hard sell. Just honest, practical growth advice.</p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="gold" size="lg"><Link to="/contact">Start your project</Link></Button>
            <Button asChild variant="outline-light" size="lg"><a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer"><Icons.MessageCircle className="size-4" /> WhatsApp</a></Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ContactBand = ({ defaultService }: { defaultService?: string }) => (
  <section className="py-20 md:py-24 bg-surface">
    <div className="container-wide grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-5">
        <span className="eyebrow">Contact</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Tell us about <span className="text-gradient">your goals.</span></h2>
        <p className="text-muted-foreground">We reply within one working day. Or WhatsApp us for an instant response.</p>
        <div className="space-y-3 pt-2">
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm hover:text-primary"><Icons.Mail className="size-4 text-primary" /> {SITE.email}</a>
          <a href={SITE.ukPhoneHref} className="flex items-center gap-3 text-sm hover:text-primary"><Icons.Phone className="size-4 text-primary" /> UK {SITE.ukPhone}</a>
          <a href={SITE.auPhoneHref} className="flex items-center gap-3 text-sm hover:text-primary"><Icons.Phone className="size-4 text-primary" /> AU {SITE.auPhone}</a>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft">
          <ContactForm defaultService={defaultService} />
        </div>
      </div>
    </div>
  </section>
);

export const FeatureGrid = ({ items }: { items: { icon: string; title: string; text: string }[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((f) => (
      <div key={f.title} className="rounded-2xl border border-border bg-card p-6 hover-lift">
        <div className="size-11 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center mb-4"><Icon name={f.icon} className="size-5" /></div>
        <h3 className="font-display font-semibold">{f.title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{f.text}</p>
      </div>
    ))}
  </div>
);

export const FAQ = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className="max-w-3xl mx-auto space-y-3">
    {items.map((f, i) => (
      <details key={i} className="group rounded-2xl border border-border bg-card p-5 open:shadow-soft">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="font-display font-semibold text-base md:text-lg">{f.q}</span>
          <Icons.Plus className="size-5 text-primary group-open:rotate-45 transition-transform" />
        </summary>
        <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
      </details>
    ))}
  </div>
);
