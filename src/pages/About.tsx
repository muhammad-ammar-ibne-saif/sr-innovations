import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { SITE, FOUNDER } from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

const About = () => (
  <>
    <Seo title="About — The SR Innovations | UK Digital Growth Agency" description="UK registered digital growth agency founded by Saqib Rasheed. Helping service businesses generate more leads with websites, SEO, Google Ads, social and branding." path="/about" />
    <PageHero
      eyebrow="About us"
      title={<>A UK registered agency built on <span className="text-gradient">measurable growth.</span></>}
      subtitle="We help service businesses generate more leads through websites, SEO, Google Ads, social media and branding — with honest reporting and a real partnership."
    />

    {/* Founder */}
    <section className="py-20 md:py-24">
      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-primary blur-2xl opacity-25 rounded-[2rem]" />
            <div className="relative h-full rounded-[2rem] overflow-hidden bg-gradient-dark shadow-elegant">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-44 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold text-7xl shadow-elegant">SR</div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="text-xs uppercase tracking-wider opacity-80">{FOUNDER.title}</div>
                <div className="font-display font-bold text-2xl">{FOUNDER.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-5">
          <span className="eyebrow">About the founder</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Founded by <span className="text-gradient">{FOUNDER.name}.</span></h2>
          <p className="text-muted-foreground text-lg">
            The SR Innovations was founded by {FOUNDER.name}, a {FOUNDER.age} year old entrepreneur and the owner of {SITE.legalName} — a UK registered company built to help service businesses grow online.
          </p>
          <p className="text-muted-foreground">{FOUNDER.bio}</p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {FOUNDER.pillars.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-4 flex gap-3">
                <span className="size-9 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center shrink-0"><Icon name={p.i} className="size-4" /></span>
                <div>
                  <div className="font-display font-semibold text-sm">{p.t}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-wide">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Our team</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">An experienced team behind <span className="text-gradient">every campaign.</span></h2>
          <p className="text-muted-foreground mt-3 text-lg">Specialists across design, SEO, advertising and social media — all working under one accountable point of contact.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: "Monitor", t: "Design & Web", d: "Conversion-led websites built for speed, clarity and SEO." },
            { i: "Search", t: "SEO Specialists", d: "Local and national SEO that earns first-page rankings." },
            { i: "Target", t: "Paid Ads", d: "Google Ads and paid social campaigns built around real lead data." },
            { i: "Share2", t: "Social & Content", d: "Reels, posts and creative that build trust and bring customers." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <span className="size-11 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center mb-4"><Icon name={x.i} className="size-5" /></span>
              <div className="font-display font-semibold">{x.t}</div>
              <p className="text-sm text-muted-foreground mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
    <ContactBand />
  </>
);
export default About;
