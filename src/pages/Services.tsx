import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE } from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

const Services = () => (
  <>
    <Seo
      title="Services — The SR Innovations | UK Digital Growth Agency"
      description="Websites, SEO, Google Ads, social media and branding. Lead generation services for UK service businesses."
      path="/services"
    />
    <PageHero
      eyebrow="Services"
      title={<>The full digital growth stack — <span className="text-gradient">under one roof.</span></>}
      subtitle="From the first click to the booked job. Pick a single service or a complete growth retainer."
    />
    <section className="py-20 md:py-28">
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div key={s.key} className="rounded-2xl border border-border bg-card p-7 hover-lift flex flex-col">
            <div className="size-12 rounded-xl bg-gradient-primary text-primary-foreground inline-flex items-center justify-center mb-5"><Icon name={s.icon} className="size-6" /></div>
            <h3 className="font-display font-semibold text-xl">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {s.bullets.map((b) => <li key={b} className="flex items-start gap-2"><Icons.Check className="size-4 text-primary mt-0.5" /> {b}</li>)}
            </ul>
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
              {s.hasPage
                ? <Button asChild variant="hero" size="sm"><Link to={`/services/${s.key}`}>Learn more</Link></Button>
                : <Button asChild variant="outline" size="sm"><Link to="/contact">Enquire</Link></Button>}
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary inline-flex items-center gap-1"><Icons.MessageCircle className="size-3.5" /> WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <CtaBand />
    <ContactBand />
  </>
);
export default Services;
