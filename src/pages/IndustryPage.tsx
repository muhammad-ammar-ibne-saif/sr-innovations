import { useParams, Navigate, Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { PageHero, CtaBand, ContactBand, FAQ } from "@/components/PageBuilding";
import { INDUSTRIES, SERVICES, SITE } from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

const IndustryPage = () => {
  const { industry } = useParams<{ industry: string }>();
  const i = INDUSTRIES.find((x) => x.key === industry);
  if (!i) return <Navigate to="/industries" replace />;
  const recommended = SERVICES.filter((s) => i.recommended.includes(s.key));
  const faq = [
    { q: `How quickly can ${i.title.toLowerCase()} see results?`, a: "Most clients see their first qualified leads within 7 to 30 days, depending on the channel mix." },
    { q: "Do you work with my size of business?", a: "Yes. We work with sole traders all the way up to multi location businesses." },
    { q: "What does it cost?", a: "Projects start from around £950, with retainers from £750/month. We'll always quote upfront." },
  ];

  return (
    <>
      <Seo
        title={`${i.page} , The SR Innovations`}
        description={`${i.short} UK registered digital growth agency for ${i.title.toLowerCase()}.`}
        path={`/industries/${i.key}`}
      />
      <PageHero
        eyebrow={`Marketing for ${i.title.toLowerCase()}`}
        title={<>Marketing for {i.title} <span className="text-gradient">that brings real jobs.</span></>}
        subtitle={i.short}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get free growth audit</Link></Button>
          <Button asChild variant="outline-light" size="lg"><a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer"><Icons.MessageCircle className="size-4" /> WhatsApp</a></Button>
        </div>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-5">
            <span className="eyebrow">Common problems</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Why marketing for {i.title.toLowerCase()} usually fails.</h2>
            <ul className="space-y-3 pt-2">
              {i.problems.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"><Icons.AlertTriangle className="size-5 text-destructive mt-0.5 shrink-0" /><span className="text-foreground/85">{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 space-y-5">
            <span className="eyebrow">How we help</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">A growth plan built around <span className="text-gradient">your customers.</span></h2>
            <ul className="space-y-3 pt-2">
              {["Local SEO and Google Business optimisation","Conversion focused website and landing pages","Google Ads campaigns with call tracking","Reviews and reputation system","Monthly reporting tied to revenue"].map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"><Icons.Check className="size-5 text-success mt-0.5 shrink-0" /><span className="text-foreground/85">{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Recommended services</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Services that work best for <span className="text-gradient">{i.title}.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommended.map((s) => (
              <div key={s.key} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="size-11 rounded-xl bg-gradient-primary text-primary-foreground inline-flex items-center justify-center mb-4"><Icon name={s.icon} className="size-5" /></div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
                {s.hasPage && <Link to={`/services/${s.key}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <Icons.ArrowRight className="size-4" /></Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow">Example results</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Real outcomes for businesses like yours.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { m: "+184%", l: "Website enquiries in 90 days" },
              { m: "£4.10", l: "Cost per qualified phone call" },
              { m: "6×", l: "More jobs booked per week" },
            ].map((r) => (
              <div key={r.l} className="rounded-2xl border border-border bg-card p-7 text-center hover-lift">
                <div className="font-display font-bold text-4xl text-gradient">{r.m}</div>
                <div className="text-sm text-muted-foreground mt-2">{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">FAQs</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Answers for {i.title.toLowerCase()}.</h2>
          </div>
          <FAQ items={faq} />
        </div>
      </section>

      <CtaBand />
      <ContactBand />
    </>
  );
};

export default IndustryPage;
