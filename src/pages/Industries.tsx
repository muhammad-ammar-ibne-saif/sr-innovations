import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { INDUSTRIES } from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

const Industries = () => (
  <>
    <Seo
      title="Industries We Help , The SR Innovations"
      description="Marketing for plumbers, cleaners, automotive, coaches, law firms, medical clinics, massage and home services."
      path="/industries"
    />
    <PageHero
      eyebrow="Industries we help"
      title={<>Marketing built for <span className="text-gradient">service businesses.</span></>}
      subtitle="We know the searches, ad creatives, websites and offers that work in each industry. Pick yours below."
    />
    <section className="py-20 md:py-28">
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {INDUSTRIES.map((i) => (
          <Link key={i.key} to={`/industries/${i.key}`} className="group rounded-2xl border border-border bg-card p-6 hover-lift">
            <div className="size-11 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition"><Icon name={i.icon} className="size-5" /></div>
            <div className="font-display font-semibold">{i.title}</div>
            <p className="text-sm text-muted-foreground mt-1.5">{i.short}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">View More <Icons.ArrowRight className="size-3.5" /></div>
          </Link>
        ))}
      </div>
    </section>
    <CtaBand />
    <ContactBand />
  </>
);
export default Industries;
