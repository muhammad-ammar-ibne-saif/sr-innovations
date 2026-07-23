import * as Icons from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageBuilding";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/config/site";

const Contact = () => (
  <>
    <Seo
      title="Contact , The SR Innovations | UK Digital Growth Agency"
      description="Get your free 30 minute growth audit. Email, phone or WhatsApp our team in London or Melbourne."
      path="/contact"
      schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact The SR Innovations",
        url: "/contact",
      }}
    />
    <PageHero
      eyebrow="Contact"
      title={<>Let's talk about <span className="text-gradient">your growth.</span></>}
      subtitle="Free 30 minute growth audit. We reply within one working day."
    />
    <section className="py-16 md:py-20">
      <div className="container-wide grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-display text-2xl font-bold">Get in touch</h2>
          <div className="space-y-4">
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <Icons.Mail className="size-5 text-primary mt-0.5" />
              <div><div className="font-semibold">Email</div><div className="text-sm text-muted-foreground break-all">{SITE.email}</div></div>
            </a>
            <a href={SITE.ukPhoneHref} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <Icons.Phone className="size-5 text-primary mt-0.5" />
              <div><div className="font-semibold">UK Office</div><div className="text-sm text-muted-foreground">{SITE.ukPhone}</div><div className="text-xs text-muted-foreground mt-1">{SITE.ukAddress}</div></div>
            </a>
            <a href={SITE.auPhoneHref} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <Icons.Phone className="size-5 text-primary mt-0.5" />
              <div><div className="font-semibold">Australia Office</div><div className="text-sm text-muted-foreground">{SITE.auPhone}</div><div className="text-xs text-muted-foreground mt-1">{SITE.auAddress}</div></div>
            </a>
            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-success/30 bg-success/5 p-5 hover-lift">
              <Icons.MessageCircle className="size-5 text-success mt-0.5" />
              <div><div className="font-semibold">WhatsApp</div><div className="text-sm text-muted-foreground">Chat with us , usually replies within minutes.</div></div>
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 text-sm">
            <div className="flex items-center gap-2 mb-2"><Icons.ShieldCheck className="size-4 text-primary" /> <span className="font-semibold">{SITE.legalName}</span></div>
            <div className="text-muted-foreground">UK Registered Company. Company No. {SITE.companyNo}.</div>
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
export default Contact;
