import { useState } from "react";
import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { CASE_STUDIES } from "@/config/site";

type Item = {
  cat: string;
  name: string;
  industry: string;
  result: string;
  color: string;
  services: string[];
  url?: string;
  initials: string;
};

const realClients: Item[] = CASE_STUDIES.map((c) => ({
  cat: "Websites",
  name: c.name,
  industry: c.industry,
  result: c.services.join(" · "),
  color: c.color,
  services: c.services,
  url: c.url,
  initials: c.name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase(),
}));

const additional: Item[] = [
  { cat: "Google Ads", name: "Capital Plumbers", industry: "Plumbing — London", result: "Search & call campaigns", color: "from-amber-500 to-orange-500", services: ["Google Ads"], initials: "CP" },
  { cat: "SEO", name: "Northbridge Law", industry: "Law Firm — UK", result: "Practice area SEO", color: "from-fuchsia-500 to-pink-500", services: ["SEO", "Website"], initials: "NL" },
  { cat: "Social Media", name: "Glow Studio", industry: "Beauty — UK", result: "Content & paid social", color: "from-rose-500 to-red-500", services: ["Social Media", "Branding"], initials: "GS" },
  { cat: "Branding", name: "Drive&Detail", industry: "Automotive — UK", result: "Full rebrand & website", color: "from-sky-500 to-blue-500", services: ["Branding", "Website"], initials: "DD" },
  { cat: "Websites", name: "Harbour Dental", industry: "Medical Clinic — UK", result: "Booking-focused website", color: "from-cyan-500 to-blue-500", services: ["Website"], initials: "HD" },
];

const items: Item[] = [...realClients, ...additional];

const cats = ["All", "Websites", "Social Media", "SEO", "Google Ads", "Branding"];

const PreviewCard = ({ p }: { p: Item }) => {
  const domain = (p.url ?? `${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "")}.co.uk`).replace(/^https?:\/\//, "").replace(/\/$/, "");
  const Wrapper: any = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Wrapper {...wrapperProps} className="group rounded-3xl overflow-hidden border border-border bg-card hover-lift animate-fade-in block">
      {/* Browser chrome */}
      <div className="bg-foreground/5 border-b border-border px-3 py-2 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 rounded-md bg-background border border-border px-2 py-0.5 text-[10px] text-muted-foreground truncate">{domain}</div>
      </div>
      <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-white/95 text-foreground rounded-full px-2.5 py-1">{p.cat}</div>
        <div className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase bg-black/40 backdrop-blur text-white border border-white/20 rounded-full px-2.5 py-1">Project Preview</div>

        {/* Initials monogram — clean, honest placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-24 rounded-2xl bg-white/15 backdrop-blur border border-white/25 text-white font-display font-bold text-4xl flex items-center justify-center shadow-elegant">
            {p.initials}
          </div>
        </div>

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="font-display font-bold text-lg leading-tight">{p.name}</div>
          <div className="text-xs text-white/85">{p.industry}</div>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="text-sm"><span className="text-muted-foreground">Project:</span> <span className="font-semibold">{p.result}</span></div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {p.services.map((s) => <span key={s} className="text-[11px] font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1">{s}</span>)}
          </div>
          {p.url && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Visit site <Icons.ArrowUpRight className="size-3.5" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((i) => i.cat === filter);
  return (
    <>
      <Seo title="Portfolio — The SR Innovations" description="Recent websites, SEO, Google Ads, social media and branding work from our UK digital growth agency." path="/portfolio" />
      <PageHero eyebrow="Portfolio" title={<>Selected work for <span className="text-gradient">real UK businesses.</span></>} subtitle="Live client websites and ongoing projects. Filter by category below." />
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`text-xs font-semibold rounded-full px-4 py-2 border transition ${filter === c ? "bg-foreground text-background border-foreground" : "border-border text-foreground/70 hover:border-foreground/40"}`}>{c}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((p) => <PreviewCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>
      <CtaBand />
      <ContactBand />
    </>
  );
};
export default Portfolio;
