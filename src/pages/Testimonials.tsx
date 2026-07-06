import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { SITE, VIDEO_TESTIMONIALS } from "@/config/site";

const written = [
  { name: "James W.", role: "Owner, Capital Plumbers", text: "Phone hasn't stopped ringing since the Google Ads campaign went live. Real ROI within the first month." },
  { name: "Priya S.", role: "Founder, Glow Studio", text: "The website and branding made us look like a proper national brand. Bookings tripled in 90 days." },
  { name: "Daniel M.", role: "Partner, Northbridge Law", text: "Professional from day one. SEO traffic is up massively and the case enquiries are higher quality." },
  { name: "Aaron K.", role: "Drive&Detail", text: "Strategic, fast and honest. They genuinely care about results, not just deliverables." },
  { name: "Lara T.", role: "ProClean London", text: "We finally have a steady stream of qualified leads we can count on every week." },
  { name: "Mark B.", role: "QuickFix Roofing", text: "Best agency we've ever worked with. Transparent, sharp and always available." },
];

const Testimonials = () => (
  <>
    <Seo title="Testimonials — The SR Innovations" description="Video and written testimonials from real UK service businesses we've helped grow." path="/testimonials" />
    <PageHero eyebrow="Testimonials" title={<>Real words from <span className="text-gradient">real clients.</span></>} subtitle="Video and written reviews from UK service businesses we've worked with." />

    <section className="py-16 md:py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow"><Icons.Instagram className="size-3.5" /> Video stories</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold mt-3">Hear it from our clients.</h2>
          </div>
          <a href={SITE.google.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 hover-lift">
            <div className="font-display font-bold text-2xl">{SITE.google.rating}</div>
            <div>
              <div className="flex text-accent">{Array.from({ length: 5 }).map((_, i) => <Icons.Star key={i} className="size-4 fill-current" />)}</div>
              <div className="text-xs text-muted-foreground">Verified on Google</div>
            </div>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEO_TESTIMONIALS.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${v.name} on Instagram`}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-dark hover:scale-[1.02] transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-deep/30 to-transparent" />
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase bg-white/90 text-foreground rounded-full px-2.5 py-1">
                <Icons.Instagram className="size-3" /> Instagram Reel
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="size-16 rounded-full bg-white text-primary flex items-center justify-center shadow-elegant group-hover:scale-110 transition"><Icons.Play className="size-6 ml-1" /></span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-display font-semibold text-lg">{v.name}</div>
                <div className="text-xs text-white/70">{v.business}</div>
                <div className="mt-2 text-xs text-white/85">"{v.summary}"</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-surface">
      <div className="container-wide">
        <div className="mb-10">
          <span className="eyebrow"><Icons.Star className="size-3.5 fill-current" /> Google Reviews</span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mt-3">Written reviews.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {written.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="flex text-accent">{Array.from({ length: 5 }).map((_, k) => <Icons.Star key={k} className="size-4 fill-current" />)}</div>
              <p className="text-sm text-foreground/85 mt-3">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
    <ContactBand />
  </>
);
export default Testimonials;
