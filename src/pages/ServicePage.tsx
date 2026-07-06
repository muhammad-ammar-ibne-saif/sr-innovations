import { useParams, Navigate, Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { PageHero, CtaBand, ContactBand, FAQ } from "@/components/PageBuilding";
import { SERVICES, SITE, ServiceKey } from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

const COPY: Record<ServiceKey, { problem: string; what: string[]; why: string[]; faq: { q: string; a: string }[] }> = {
  "website-design": {
    problem: "Most service business websites look fine — but they don't convert. Slow load times, weak headlines and unclear calls to action mean visitors leave without enquiring.",
    what: ["Conversion focused homepage and service pages", "Mobile first, fast loading code", "Clear lead capture and call buttons", "SEO ready foundations and analytics", "Copy that speaks to your ideal customer", "Trust building elements: reviews, badges, results"],
    why: ["Every section is built around one outcome: more enquiries.", "Premium UK agency design at a fair price.", "Honest tracking so you know exactly what's working."],
    faq: [
      { q: "How long does a website take?", a: "Most projects take 3 to 6 weeks from kick off to launch, depending on scope and content readiness." },
      { q: "Do you write the copy?", a: "Yes. Conversion focused copywriting is included in every project." },
      { q: "Will I be able to edit it?", a: "Yes. We build on a CMS so you can update text, images and pages without code." },
    ],
  },
  "social-media-marketing": {
    problem: "Posting without a plan burns time and budget. Most service businesses get likes — not customers.",
    what: ["Monthly content strategy and calendar", "Reels, posts and stories tailored to your audience", "Paid social campaigns on Meta and TikTok", "Community management and DMs", "Monthly performance reports", "Influencer and partnership outreach"],
    why: ["Content is built around customer questions, not vanity trends.", "Every campaign is tracked back to leads and revenue.", "Premium creative that makes you look bigger than you are."],
    faq: [
      { q: "Which platforms do you cover?", a: "Instagram, TikTok, Facebook and LinkedIn — chosen based on where your customers actually are." },
      { q: "Do you film content?", a: "Yes. We can arrange shoots or coach you to film high quality content yourself." },
    ],
  },
  "seo-services": {
    problem: "If you're not on page 1 of Google, you're invisible to ready to buy customers. Most SEO agencies report on rankings — not on revenue.",
    what: ["Technical SEO audit and fixes", "Local and national keyword strategy", "On page optimisation and content programme", "Authority link building", "Google Business Profile optimisation", "Monthly reporting tied to leads and revenue"],
    why: ["Strategy first — no template work.", "Focus on commercial keywords that bring buyers.", "Transparent reporting every single month."],
    faq: [
      { q: "How long until I see results?", a: "Local SEO can show movement in 6 to 8 weeks. Competitive national SEO usually takes 3 to 6 months." },
      { q: "Do you guarantee rankings?", a: "Anyone who guarantees rankings is lying. We guarantee a real strategy and transparent reporting." },
    ],
  },
  "google-ads-management": {
    problem: "Most Google Ads accounts waste 40 to 60 percent of budget on the wrong searches. Calls come in — but the quality is poor.",
    what: ["Account audit and rebuild", "Search, call and Performance Max campaigns", "Conversion focused landing pages", "Call and form tracking", "Weekly optimisation and bid management", "Transparent monthly reporting"],
    why: ["Phone calls and enquiries within the first 7 days.", "Negative keywords and audience controls cut wasted spend.", "Tracking that ties every lead back to revenue."],
    faq: [
      { q: "What budget do I need?", a: "Most clients start at £750 to £2,000 per month in ad spend. We'll recommend the right level for your market." },
      { q: "Do you charge a percentage of spend?", a: "No. We charge a flat monthly fee so you keep more of your budget for actual ads." },
    ],
  },
  "branding-design": {
    problem: "Looking small costs you money. Premium brands attract premium clients — and can charge significantly more.",
    what: ["Brand strategy and positioning", "Logo, identity and typography system", "Colour palette and brand guidelines", "Marketing collateral and templates", "Pitch decks and proposal templates", "Photography and visual direction"],
    why: ["Brand systems built to scale across every channel.", "Clear, premium identity that commands higher prices.", "Editable templates so your team stays on brand."],
    faq: [
      { q: "Do you redesign existing brands?", a: "Yes. Most of our branding work is for businesses ready to level up from DIY logos to a real identity." },
      { q: "Will the brand work in print and digital?", a: "Yes. Every brand we build comes with print and digital ready assets and a full guidelines document." },
    ],
  },
  "graphic-design": { problem: "", what: [], why: [], faq: [] },
  "ecommerce-websites": { problem: "", what: [], why: [], faq: [] },
  "mobile-app-development": { problem: "", what: [], why: [], faq: [] },
};

const ServicePage = () => {
  const { service } = useParams<{ service: ServiceKey }>();
  const s = SERVICES.find((x) => x.key === service);
  if (!s || !s.hasPage) return <Navigate to="/services" replace />;
  const copy = COPY[s.key];

  return (
    <>
      <Seo
        title={`${s.title} — The SR Innovations`}
        description={`${s.short} UK registered digital growth agency.`}
        path={`/services/${s.key}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          provider: { "@type": "Organization", name: SITE.legalName, identifier: `Company No. ${SITE.companyNo}` },
          areaServed: ["United Kingdom", "Australia"],
          description: s.short,
        }}
      />
      <PageHero
        eyebrow={s.title}
        title={<>{s.title} <span className="text-gradient">that drives leads.</span></>}
        subtitle={s.short}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get free audit</Link></Button>
          <Button asChild variant="outline-light" size="lg"><a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer"><Icons.MessageCircle className="size-4" /> WhatsApp</a></Button>
        </div>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="eyebrow">The problem</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Why most {s.title.toLowerCase()} fails to bring real customers.</h2>
            <p className="text-muted-foreground text-lg">{copy.problem}</p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8">
              <ul className="space-y-3">
                {["Visitors leave without enquiring", "Marketing budget is wasted", "Leads are low quality", "No clear tracking or accountability"].map((p) => (
                  <li key={p} className="flex items-start gap-3"><Icons.X className="size-5 text-destructive mt-0.5 shrink-0" /><span className="text-foreground/85">{p}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">What we do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Everything included in our <span className="text-gradient">{s.title}</span> service.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {copy.what.map((w) => (
              <div key={w} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <Icons.CheckCircle2 className="size-6 text-primary mb-3" />
                <div className="font-display font-semibold">{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Why it works</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 leading-tight">A method built on <span className="text-gradient">measurable outcomes.</span></h2>
            <ul className="mt-6 space-y-4">
              {copy.why.map((w) => (
                <li key={w} className="flex items-start gap-3"><Icons.Check className="size-5 text-primary mt-0.5 shrink-0" /><span className="text-foreground/85">{w}</span></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {[{n:"01",t:"Audit"},{n:"02",t:"Strategy"},{n:"03",t:"Build"},{n:"04",t:"Launch"},{n:"05",t:"Optimise"},{n:"06",t:"Report"}].map((p) => (
                <div key={p.n} className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display font-bold text-2xl text-primary/30">{p.n}</div>
                  <div className="font-display font-semibold mt-1">{p.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">{s.title} questions, answered.</h2>
          </div>
          <FAQ items={copy.faq} />
        </div>
      </section>

      <CtaBand />
      <ContactBand defaultService={s.title} />
    </>
  );
};

export default ServicePage;
