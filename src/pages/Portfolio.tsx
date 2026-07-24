import { useState } from "react";
import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand, ContactBand } from "@/components/PageBuilding";
import { PORTFOLIO_SITES, SOCIAL_MEDIA_SITES } from "@/config/site";

type Item = {
  cat: string;
  name: string;
  industry: string;
  result: string;
  color: string;
  services: string[];
  url?: string;
  screenshot?: string;
  initials: string;
  platform?: string;
};

// Icon shown inside each service pill
const SERVICE_ICONS: Record<string, keyof typeof Icons> = {
  "Website Design": "Monitor",
  "Custom App": "Code2",
  "Google Ads": "Target",
  SEO: "Search",
  "Social Media": "Share2",
  Branding: "Sparkles",
};

// Icon + color for the platform badge (WordPress / Wix / Custom Code)
const PLATFORM_ICONS: Record<string, keyof typeof Icons> = {
  WordPress: "Feather",
  Wix: "LayoutGrid",
  "Custom Code": "Terminal",
};

const PLATFORM_STYLES: Record<string, string> = {
  WordPress: "bg-blue-600/90",
  Wix: "bg-amber-500/90",
  "Custom Code": "bg-emerald-600/90",
};

const items: Item[] = [...PORTFOLIO_SITES, ...SOCIAL_MEDIA_SITES].map((p) => ({
  cat: p.cat,
  name: p.name,
  industry: p.industry,
  result: p.services.join(" · "),
  color: p.color,
  services: p.services,
  url: p.url,
  screenshot: p.screenshot,
  platform: (p as any).platform,
  initials: p.name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase(),
}));

const cats = ["All", "Websites", "Social Media"];

const ServicePill = ({ service }: { service: string }) => {
  const IconName = SERVICE_ICONS[service];
  const Icon = IconName ? (Icons[IconName] as any) : null;
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1">
      {Icon && <Icon className="size-3" />}
      {service}
    </span>
  );
};

const PreviewCard = ({ p }: { p: Item }) => {
  const domain = (p.url ?? `${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "")}.co.uk`)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  const Wrapper: any = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};
  const isSocial = p.cat === "Social Media";

  return (
    <Wrapper {...wrapperProps} className="group rounded-3xl overflow-hidden border border-border bg-card hover-lift animate-fade-in block">
      {/* Browser chrome */}
      {!isSocial && (
        <div className="bg-foreground/5 border-b border-border px-3 py-2 flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 flex-1 rounded-md bg-background border border-border px-2 py-0.5 text-[10px] text-muted-foreground truncate">
            {domain}
          </div>
        </div>
      )}

      <div className={`aspect-[4/3] relative overflow-hidden ${p.screenshot ? "bg-muted" : `bg-gradient-to-br ${p.color}`}`}>
        {p.screenshot ? (
          <>
            <img
              src={p.screenshot}
              alt={`${p.name} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 bg-black/15" />
          </>
        )}

        {/* Hidden fallback monogram, shown only if the <img> fails to load */}
        {p.screenshot && (
          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800">
            <div className="size-24 rounded-2xl bg-white/15 backdrop-blur border border-white/25 text-white font-display font-bold text-4xl flex items-center justify-center shadow-elegant">
              {p.initials}
            </div>
          </div>
        )}

        {!p.screenshot && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-24 rounded-2xl bg-white/15 backdrop-blur border border-white/25 text-white font-display font-bold text-4xl flex items-center justify-center shadow-elegant">
              {p.initials}
            </div>
          </div>
        )}

        <div className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-white/95 text-foreground rounded-full px-2.5 py-1">
          {p.cat}
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {!isSocial && p.platform && (
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase ${
                PLATFORM_STYLES[p.platform] ?? "bg-black/40"
              } backdrop-blur text-white border border-white/20 rounded-full px-2.5 py-1`}
            >
              {(() => {
                const PlatformIcon = Icons[PLATFORM_ICONS[p.platform] ?? "Globe"] as any;
                return PlatformIcon ? <PlatformIcon className="size-3" /> : null;
              })()}
              {p.platform}
            </span>
          )}
          {!isSocial && (
            <span className="text-[10px] font-bold tracking-wider uppercase bg-black/40 backdrop-blur text-white border border-white/20 rounded-full px-2.5 py-1">
              {p.screenshot ? "Live Site" : "Project Preview"}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="font-display font-bold text-lg leading-tight">{p.name}</div>
          <div className="text-xs text-white/85">{p.industry}</div>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="text-sm">
          <span className="text-muted-foreground">Project:</span> <span className="font-semibold">{p.result}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {p.services.map((s) => (
              <ServicePill key={s} service={s} />
            ))}
          </div>
          {p.url && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              {isSocial ? "Visit page" : "Visit site"}
              <Icons.ArrowUpRight className="size-3.5" />
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
      <Seo
        title="Portfolio — The SR Innovations"
        description="Recent websites, SEO, Google Ads, social media and branding work from our UK digital growth agency."
        path="/portfolio"
      />
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Selected work for <span className="text-gradient">real UK businesses.</span>
          </>
        }
        subtitle="Live client websites and ongoing projects. Filter by category below."
      />
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs font-semibold rounded-full px-4 py-2 border transition ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((p) => (
              <PreviewCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      <ContactBand />
    </>
  );
};

export default Portfolio;