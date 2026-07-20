import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { ContactForm } from "@/components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";
import {
  SITE,
  SERVICES,
  INDUSTRY_CATEGORIES,
  VIDEO_TESTIMONIALS,
} from "@/config/site";

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

const heroServiceChips = [
  { i: "Monitor", t: "Website Design", to: "/services/website-design" },
  { i: "Search", t: "SEO", to: "/services/seo-services" },
  { i: "Share2", t: "Social Media", to: "/services/social-media-marketing" },
  { i: "Target", t: "Google Ads", to: "/services/google-ads-management" },
];

const whyChoose = [
  { i: "Zap", t: "Fast Response Times", d: "Most enquiries get a real reply within the hour, by email or WhatsApp." },
  { i: "Users", t: "Dedicated Marketing Team", d: "A senior team across design, SEO, ads and social, all working on your account." },
  { i: "TrendingUp", t: "Results Focused Strategy", d: "Every decision is judged on real enquiries, calls and customers, not vanity metrics." },
  { i: "ShieldCheck", t: "UK Registered Business", d: "A real UK limited company you can verify, built for long term client relationships." },
];

const reviews = [
  { name: "James W.", role: "Owner, Capital Plumbers", text: "The phone hasn't stopped ringing since the Google Ads campaign went live. Real return on investment within the first month.", rating: 5 },
  { name: "Priya S.", role: "Founder, Glow Studio", text: "The new website and branding made us look like a proper national brand. Bookings tripled in 90 days.", rating: 5 },
  { name: "Daniel M.", role: "Partner, Northbridge Law", text: "Professional from day one. Our SEO traffic is up massively and the case enquiries are far higher quality.", rating: 5 },
  { name: "Aaron K.", role: "Drive & Detail", text: "Strategic, fast and honest. They genuinely care about results, not just deliverables.", rating: 5 },
];

const testimonialCovers = [
  "from-indigo-700 via-violet-700 to-slate-900",
  "from-sky-700 via-blue-800 to-slate-900",
  "from-rose-600 via-pink-700 to-zinc-900",
];

const Home = () => {
  return (
    <>
      <Seo
        title="The SR Innovations | UK Digital Growth Agency"
        description="A UK registered digital growth agency helping service businesses get more enquiries with websites, SEO, Google Ads, social media and branding."
        path="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: SITE.legalName,
            alternateName: SITE.name,
            description: "UK registered digital growth agency for service based businesses.",
            telephone: SITE.ukPhone,
            email: SITE.email,
            url: "/",
            areaServed: ["United Kingdom", "Australia", "Worldwide"],
            identifier: `Company No. ${SITE.companyNo}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            itemReviewed: { "@type": "Organization", name: SITE.name },
            ratingValue: SITE.google.rating,
            reviewCount: String(SITE.google.reviewCount),
          },
        ]}
      />

      {/* 1. HERO */}
<section className="relative surface-dark overflow-hidden">
  <div className="absolute inset-0 grid-bg opacity-30" />
  <div className="absolute -top-40 -left-32 size-[420px] rounded-full bg-primary/15 blur-3xl" />
  <div className="absolute -bottom-40 -right-32 size-[480px] rounded-full bg-primary-glow/10 blur-3xl" />

  <div className="container-wide relative py-10 md:py-14 lg:py-10 min-h-[calc(100vh-5rem)] flex items-center">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
      <div className="lg:col-span-7 space-y-5 animate-fade-in-up">
        <a
          href={SITE.google.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs text-white hover:bg-white/15 transition w-fit"
        >
          <Icons.Star className="size-3.5 text-accent fill-current" />
          <span className="font-semibold">{SITE.google.rating} rated on Google</span>
        </a>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white">
          Most agencies talk strategy.{" "}
          <span className="text-gradient">We just get you booked out.</span>
        </h1>
        <p className="text-base md:text-lg text-white/75 max-w-xl">
          Websites that convert, Google Ads that ring the phone, and content people actually stop scrolling for. Run by a small senior team who replies when you message them.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl"><Link to="/growth-audit">Get Your Free Growth Audit <Icons.ArrowRight className="size-4" /></Link></Button>
          <Button asChild variant="whatsapp" size="xl"><a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="size-4" /> Message us on WhatsApp</a></Button>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-white/70">
          <span className="inline-flex items-center gap-2"><Icons.Check className="size-4 text-primary-glow" /> 30 min call, no sales script</span>
          <span className="inline-flex items-center gap-2"><Icons.Check className="size-4 text-primary-glow" /> Month to month, leave anytime</span>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="relative max-w-md mx-auto">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary blur-2xl opacity-20" />
          <div className="relative rounded-[2rem] bg-white shadow-elegant p-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Companies House</div>
                <div className="font-display font-bold text-base text-foreground leading-snug">{SITE.legalName}</div>
                <a href={SITE.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-semibold hover:underline">
                  No. {SITE.companyNo}, verify this
                </a>
              </div>
              <div className="size-11 rounded-2xl bg-gradient-primary text-primary-foreground inline-flex items-center justify-center shadow-soft shrink-0">
                <Icons.ShieldCheck className="size-5" />
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Where we can start</div>
              <div className="grid grid-cols-2 gap-2">
                {heroServiceChips.map((s) => (
                  <Link key={s.t} to={s.to} className="rounded-xl border border-border bg-card px-3 py-2.5 flex items-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition">
                    <Icon name={s.i} className="size-4 text-primary shrink-0" />
                    <span className="text-xs font-semibold text-foreground truncate">{s.t}</span>
                  </Link>
                ))}
              </div>
            </div>

            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-success/8 border border-success/20 p-3 hover:bg-success/12 transition">
              <FaWhatsapp className="size-7 text-success shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground">Prefer to just message?</div>
                <div className="text-xs text-muted-foreground truncate">We're usually online, {SITE.whatsappDisplay}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 2. TRUST BAR */}
<section className="border-y border-border bg-surface">
  <div className="container-wide py-6">
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
      {[
        { i: "ShieldCheck", t: "UK Registered Company" },
        { i: "Star", t: `${SITE.google.rating}★ Google Rating`, href: SITE.google.profileUrl },
        { i: "Users", t: "Senior Specialist Team" },
        { i: "Clock", t: "Fast Response Time" },
        { i: "whatsapp", t: "Direct WhatsApp Support", href: SITE.whatsappLink }, // flag instead of lucide name
        { i: "BadgeCheck", t: "Transparent Pricing" },
      ].map((x) => {
        const iconEl =
          x.i === "whatsapp" ? (
            <FaWhatsapp className="size-4 text-primary" />
          ) : (
            <Icon name={x.i} className="size-4 text-primary" />
          );

        return x.href ? (
          <a
            key={x.t}
            href={x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            {iconEl}
            <span className="font-medium text-foreground/85">{x.t}</span>
          </a>
        ) : (
          <div key={x.t} className="flex items-center gap-2">
            {iconEl}
            <span className="font-medium text-foreground/85">{x.t}</span>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* 3. SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow">What we do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Everything you need to bring in <span className="text-gradient">more enquiries</span> every month.</h2>
            <p className="text-muted-foreground mt-4 text-lg">From the first click on Google to the booked job in your diary, we cover the full digital growth journey so you can focus on running your business.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.key}
                to={s.hasPage ? `/services/${s.key}` : "/services"}
                className="group rounded-2xl border border-border bg-card p-6 hover-lift relative overflow-hidden block"
              >
                <div className="relative">
                  <div className="size-12 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                    <Icon name={s.icon} className="size-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80"><Icons.Check className="size-4 mt-0.5 text-primary shrink-0" /> {b}</li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <Icons.ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (4 cards) */}
      {/* <section className="py-20 md:py-28 bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow">Why businesses choose us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">A real team that <span className="text-gradient">picks up the phone</span> and gets things done.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((w, i) => (
              <div
                key={w.t}
                style={{ animationDelay: `${i * 90}ms` }}
                className="group rounded-2xl border border-border bg-card p-6 hover-lift animate-fade-in"
              >
                <span className="size-12 rounded-xl bg-gradient-primary text-primary-foreground inline-flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform">
                  <Icon name={w.i} className="size-5" />
                </span>
                <h3 className="font-display font-semibold text-base">{w.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 5. VIDEO TESTIMONIALS */}
      <section className="py-20 md:py-28 surface-dark">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="eyebrow-dark">Client video reviews</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-white leading-tight">Hear it straight from <span className="text-gradient">our clients.</span></h2>
              <p className="text-white/70 mt-3 text-lg">Real video reviews from real UK service businesses. Tap any card to watch.</p>
            </div>
            <a href={SITE.google.profileUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 px-5 py-3 hover:bg-white/15 transition">
              <div className="font-display font-bold text-2xl text-white">{SITE.google.rating}</div>
              <div>
                <div className="flex text-accent">{Array.from({ length: 5 }).map((_, i) => <Icons.Star key={i} className="size-4 fill-current" />)}</div>
                <div className="text-xs text-white/70">Verified on Google</div>
              </div>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
  {VIDEO_TESTIMONIALS.map((v, i) => (
    <a
      key={i}
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${v.name} on Instagram`}
      className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant hover:scale-[1.02] transition-transform"
    >
      {/* TODO: swap for your actual cover image import/path */}
      <img
        src={v.cover}
        alt={`${v.name} — ${v.business}`}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Premium cover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonialCovers[i % 3]} opacity-60`} />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -top-10 -right-10 size-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 size-48 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase bg-white text-foreground rounded-full px-2.5 py-1 shadow-soft">
        <Icons.Instagram className="size-3" /> Client Review
      </div>
      <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-black/55 backdrop-blur text-white rounded-full px-2.5 py-1 border border-white/20">
        <Icons.Video className="size-3" /> Watch Reel
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="size-20 rounded-full bg-white text-primary flex items-center justify-center shadow-elegant group-hover:scale-110 transition">
          <Icons.Play className="size-8 ml-1 fill-current" />
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 text-white">
        <div className="flex text-accent mb-2">{Array.from({ length: 5 }).map((_, k) => <Icons.Star key={k} className="size-3.5 fill-current" />)}</div>
        <div className="font-display font-bold text-lg leading-tight">"{v.summary}"</div>
        <div className="mt-3 pt-3 border-t border-white/20">
          <div className="text-sm font-semibold">{v.business}</div>
          <div className="text-xs text-white/75">{v.name}</div>
        </div>
      </div>
    </a>
  ))}
</div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline-light" size="lg"><Link to="/testimonials">See all testimonials</Link></Button>
          </div>
        </div>
      </section>

      {/* 6. ABOUT THE AGENCY */}
      {/* <section className="py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="eyebrow">About the agency</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">A friendly UK team obsessed with <span className="text-gradient">growing your business.</span></h2>
            <p className="text-muted-foreground text-lg">
              The SR Innovations is a UK based digital growth agency. We help service businesses get found on Google, look more professional online and turn website visitors into real paying customers.
            </p>
            <p className="text-muted-foreground">
              Our team brings websites, SEO, Google Ads, social media and branding together under one roof. That means one accountable partner driving your growth, not five separate suppliers passing the blame.
            </p>
            <p className="text-muted-foreground">
              We mainly work with UK service businesses, with an office in Australia for our clients down under and a small group of clients worldwide.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {[
                { i: "MapPin", t: "Based in the UK" },
                { i: "Users", t: "Senior in house team" },
                { i: "TrendingUp", t: "Growth focused" },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
                  <span className="text-primary"><Icon name={x.i} className="size-5" /></span>
                  <span className="text-sm font-semibold">{x.t}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button asChild variant="hero"><Link to="/about">More about us</Link></Button>
              <Button asChild variant="outline"><Link to="/services">Explore services</Link></Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant bg-gradient-dark grid-bg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group" aria-label="Play agency intro video">
                  <span className="size-20 rounded-full bg-white text-primary flex items-center justify-center shadow-elegant group-hover:scale-105 transition">
                    <Icons.Play className="size-7 ml-1 fill-current" />
                  </span>
                </button>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs uppercase tracking-wider opacity-80">Watch</div>
                <div className="font-display font-bold text-xl md:text-2xl">Inside The SR Innovations</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 7. INDUSTRIES */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow">Industries we help</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Marketing that fits <span className="text-gradient">your industry.</span></h2>
            <p className="text-muted-foreground mt-4 text-lg">Whatever you do, we know the searches, offers and creatives that actually bring customers through your door.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_CATEGORIES.map((c) => {
              const inner = (
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift relative overflow-hidden">
                  <div className="relative">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                      <Icon name={c.icon} className="size-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5">{c.short}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {c.industries.map((n) => (
                        <li key={n} className="text-[11px] font-medium rounded-full bg-primary/8 text-primary px-2.5 py-1">{n}</li>
                      ))}
                    </ul>
                    {c.link && (
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Explore More <Icons.ArrowRight className="size-4" />
                      </span>
                    )}
                  </div>
                </div>
              );
              return c.link ? (
                <Link key={c.key} to={`/industries/${c.link}`} className="group block">{inner}</Link>
              ) : (
                <div key={c.key} className="group block">{inner}</div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg"><Link to="/industries">All industries we serve</Link></Button>
          </div>
        </div>
      </section>

      {/* 8. GOOGLE REVIEWS */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow"><Icons.Star className="size-3.5 fill-current" /> Google Reviews</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Verified reviews from <span className="text-gradient">real clients.</span></h2>
            </div>
            <a href={SITE.google.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 hover-lift">
              <div className="font-display font-bold text-2xl">{SITE.google.rating}</div>
              <div>
                <div className="flex text-accent">{Array.from({ length: 5 }).map((_, i) => <Icons.Star key={i} className="size-4 fill-current" />)}</div>
                <div className="text-xs text-muted-foreground">Verified on Google</div>
              </div>
              <Icons.ArrowUpRight className="size-4 text-muted-foreground" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="flex items-center justify-between">
                  <div className="flex text-accent">{Array.from({ length: r.rating }).map((_, k) => <Icons.Star key={k} className="size-4 fill-current" />)}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Google</span>
                </div>
                <p className="text-sm text-foreground/85 mt-3">"{r.text}"</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg"><a href={SITE.google.profileUrl} target="_blank" rel="noopener noreferrer">Read all Google reviews <Icons.ArrowUpRight className="size-4" /></a></Button>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 md:py-28 surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/20 blur-3xl" />
        <div className="container-tight relative text-center text-white space-y-7">
          <span className="eyebrow-dark">Ready when you are</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">Ready to bring in <span className="text-gradient">more customers</span> every month?</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Book a free strategy call. We'll look at your business honestly and tell you exactly what we'd do to bring in more enquiries.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Book A Free Call</Link></Button>
            <Button asChild variant="whatsapp" size="xl"><a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="size-5" /> Chat on WhatsApp</a></Button>
          </div>
        </div>
      </section>

      {/* 10. CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="eyebrow">Contact us</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">Let's talk about <span className="text-gradient">your growth.</span></h2>
              <p className="text-muted-foreground mt-3 text-lg">Tell us a bit about your business and what you're hoping to achieve. We'll come back with honest, practical advice.</p>
            </div>
            <div className="space-y-4">
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 hover-lift">
                <Icons.Mail className="size-5 text-primary mt-0.5" />
                <div><div className="font-semibold text-sm">Email</div><div className="text-sm text-muted-foreground break-all">{SITE.email}</div></div>
              </a>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-success/30 bg-success/5 p-4 hover-lift">
                <Icons.MessageCircle className="size-5 text-success mt-0.5" />
                <div><div className="font-semibold text-sm">WhatsApp</div><div className="text-sm text-muted-foreground">{SITE.whatsappDisplay} · usually replies within minutes</div></div>
              </a>
              <a href={SITE.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 hover-lift">
                <Icons.ShieldCheck className="size-5 text-primary mt-0.5" />
                <div><div className="font-semibold text-sm">UK Registered Company</div><div className="text-sm text-muted-foreground">{SITE.legalName} · Company No. {SITE.companyNo}</div></div>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
