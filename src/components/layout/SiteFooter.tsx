import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Linkedin, Globe2 } from "lucide-react";
import { SITE, INDUSTRY_CATEGORIES } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "/footer-logo.png";

const FOOTER_SERVICES = [
  { t: "Website Design", to: "/services/website-design" },
  { t: "SEO", to: "/services/seo-services" },
  { t: "Social Media Marketing", to: "/services/social-media-marketing" },
  { t: "Google Ads", to: "/services/google-ads-management" },
  { t: "Branding & Design", to: "/services/branding-design" },
];

export const SiteFooter = () => {
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="container-wide relative py-16 md:pt-12 md:pb-3">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="SR Innovations" className="h-11 w-11 md:h-32 md:w-72" />
              
            </Link>
            <p className="text-sm text-white/70 max-w-sm">
              A UK based digital growth agency helping service businesses get more enquiries with websites, SEO, Google Ads, social media and branding. Australia office available for our clients down under.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {[
                { i: Instagram, href: "https://instagram.com/thesrinnovations", label: "Instagram" },
                { i: Facebook, href: "#", label: "Facebook" },
                { i: Linkedin, href: "#", label: "LinkedIn" },
                { i: FaWhatsapp, href: SITE.whatsappLink, label: "WhatsApp" },
              ].map(({ i: I, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-9 rounded-full bg-white/8 border border-white/15 inline-flex items-center justify-center text-white/85 hover:bg-white/15 hover:text-white transition"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold text-white mb-4">Services</div>
            <ul className="space-y-2 text-sm text-white/70">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.to}><Link to={s.to} className="hover:text-white">{s.t}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Industries */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-white mb-4">Industries</div>
            <ul className="space-y-2 text-sm text-white/70">
              {INDUSTRY_CATEGORIES.map((i) => (
                <li key={i.key}>
                  {i.link ? (
                    <Link to={`/industries/${i.link}`} className="hover:text-white">{i.title}</Link>
                  ) : (
                    <Link to="/industries" className="hover:text-white">{i.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-white mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-primary-glow" /><a href={SITE.ukPhoneHref} className="hover:text-white">UK {SITE.ukPhone}</a></li>
              <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-primary-glow" /><a href={SITE.auPhoneHref} className="hover:text-white">AU {SITE.auPhone}</a></li>
              <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-primary-glow" /><a href={`mailto:${SITE.email}`} className="hover:text-white break-all">{SITE.email}</a></li>
              <li className="flex gap-3"><MessageCircle className="size-4 mt-0.5 text-primary-glow" /><a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp {SITE.whatsappDisplay}</a></li>
              <li className="flex gap-3"><MapPin className="size-6 mt-0.5 text-primary-glow" /><span>{SITE.ukAddress}</span></li>
              <li className="flex gap-3"><MapPin className="size-8 mt-0.5 text-primary-glow" /><span>{SITE.auAddress}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-7 space-y-1.5">
              <div className="text-sm font-display font-bold text-white tracking-wide uppercase">{SITE.legalName}</div>
              <div className="text-xs text-white/60">
                Company Number: <a href={SITE.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-4 hover:underline">{SITE.companyNo}</a>
              </div>
              <div className="text-xs text-white/70 pt-1">UK Registered Digital Growth Agency</div>
              <div className="text-xs text-white/55 inline-flex items-center gap-2">
                <Globe2 className="size-3.5" /> Australia Office Available · Helping Businesses Across The UK and Beyond
              </div>
            </div>
            <div className="md:col-span-5 flex flex-wrap md:justify-end gap-5 text-xs text-white/55">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/industries" className="hover:text-white">Industries</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="mt-6 text-[11px] text-white/40">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
