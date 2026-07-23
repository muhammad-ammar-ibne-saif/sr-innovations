import { CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageBuilding";
import { AuditForm } from "@/components/AuditForm";
import { SITE } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";

const whatYouGet = [
  "A full review of your current website and where you're losing enquiries",
  "A look at how you rank on Google against local competitors",
  "3–5 clear, practical actions you can take, whether you work with us or not",
  "An honest view on where your marketing budget is best spent",
];

const Audit = () => (
  <>
    <Seo
      title="Free Growth Audit , The SR Innovations | UK Digital Growth Agency"
      description="Get a free, honest audit of your website, SEO and ads. No sales script, just practical advice on how to bring in more enquiries."
      path="/audit"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Free Growth Audit",
        provider: { "@type": "Organization", name: SITE.name },
        url: "/audit",
      }}
    />
    <PageHero
      eyebrow="Free growth audit"
      title={<>Find out what's stopping <span className="text-gradient">more enquiries</span> coming in.</>}
      subtitle="Free 30 minute growth audit. No sales script, no obligation. We reply within one working day."
    />
    <section className="py-16 md:py-20">
      <div className="container-wide grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-display text-2xl font-bold">What you'll get</h2>
          <ul className="space-y-3">
            {whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-success/30 bg-success/5 p-5 hover-lift"
          >
            <FaWhatsapp className="size-5 text-success mt-0.5" />
            <div>
              <div className="font-semibold">Prefer WhatsApp?</div>
              <div className="text-sm text-muted-foreground">Message us directly , usually replies within minutes.</div>
            </div>
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft">
            <AuditForm />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Audit;