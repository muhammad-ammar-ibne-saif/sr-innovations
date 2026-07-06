import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { CASE_STUDIES, SITE } from "@/config/site";
import * as Icons from "lucide-react";

const CaseStudies = () => (
  <>
    <Seo title="Case Studies — The SR Innovations" description="Real client growth stories from our UK digital growth agency: websites, SEO, Google Ads, social and branding." path="/case-studies" />
    <PageHero eyebrow="Case studies" title={<>Real UK clients. <span className="text-gradient">Real growth stories.</span></>} subtitle="A look at recent UK businesses we've helped across legal, automotive, aesthetics and home services." />
    <section className="py-16 md:py-20">
      <div className="container-wide space-y-8">
        {CASE_STUDIES.map((c) => (
          <article key={c.slug} className="rounded-3xl border border-border bg-card overflow-hidden hover-lift">
            <div className="grid lg:grid-cols-12">
              <div className={`lg:col-span-4 bg-gradient-to-br ${c.color} text-white p-8 md:p-10 relative grid-bg`}>
                <div className="text-xs uppercase tracking-wider opacity-90">{c.industry}</div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">{c.name}</h2>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold rounded-full bg-white/15 border border-white/20 px-3 py-1.5 hover:bg-white/25 transition">
                  <Icons.Globe className="size-3.5" /> Visit live site <Icons.ArrowUpRight className="size-3" />
                </a>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {c.services.map((s) => <span key={s} className="text-[11px] font-semibold rounded-full bg-white/15 border border-white/20 px-2.5 py-1">{s}</span>)}
                </div>
                <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-4">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold mb-1">Trust</div>
                  <div className="text-xs">{SITE.legalName}</div>
                  <div className="text-xs opacity-80">UK Registered · Company No. {SITE.companyNo}</div>
                </div>
              </div>
              <div className="lg:col-span-8 p-8 md:p-10 space-y-5">
                <div><div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Client overview</div><p>{c.overview}</p></div>
                <div><div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Challenges</div><p>{c.challenges}</p></div>
                <div><div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Services provided</div><p>{c.solution}</p></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Results achieved</div>
                  <ul className="space-y-1.5">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm"><Icons.Check className="size-4 mt-0.5 text-primary shrink-0" /> {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    <CtaBand />
    <ContactBand />
  </>
);
export default CaseStudies;
