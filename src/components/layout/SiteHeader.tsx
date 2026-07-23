import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ArrowRight, Clock } from "lucide-react";
import * as Icons from "lucide-react";
import { LOGO_URL, NAV, SITE, SERVICES } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const I = (Icons as any)[name] ?? Icons.Sparkles;
  return <I className={className} />;
};

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const visibleServices = SERVICES.filter((s) => s.hasPage);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft" : "bg-transparent"
    )}>
      <div className="container-wide flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label={SITE.name}>
          <img
            src={LOGO_URL}
            alt="SR Innovations logo"
            className="h-24 w-24 md:h-48 md:w-48 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) =>
            n.label === "Services" ? (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  className={cn(
                    "relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 group",
                    servicesOpen || location.pathname.startsWith("/services")
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground"
                  )}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  {n.label}
                  <ChevronDown
                    className={cn("size-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
                  />
                  <span
                    className={cn(
                      "pointer-events-none absolute left-3 right-3 -bottom-px h-[2px] rounded-full bg-primary origin-left transition-transform duration-300",
                      servicesOpen || location.pathname.startsWith("/services")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full pt-3 transition-all duration-200",
                    "w-[min(640px,calc(100vw-2rem))]",
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl p-5">
                    <div className="grid grid-cols-2 gap-1">
                      {visibleServices.map((s) => (
                        <Link
                          key={s.key}
                          to={`/services/${s.key}`}
                          className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                            <ServiceIcon name={s.icon} className="size-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                              {s.title}
                              <ArrowRight className="size-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                            </span>
                            <span className="block text-xs text-foreground/60 mt-0.5 leading-snug">
                              {s.short}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-xs text-foreground/60">
                        <Clock className="size-3.5" />
                        Free growth audit for every new enquiry
                      </span>
                      <Link
                        to="/services"
                        className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        View all services <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) => cn(
                  "relative px-3 py-2 rounded-md text-sm font-medium transition-colors group",
                  isActive ? "text-primary" : "text-foreground/75 hover:text-foreground"
                )}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    <span
                      className={cn(
                        "pointer-events-none absolute left-3 right-3 -bottom-px h-[2px] rounded-full bg-primary origin-left transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.ukPhoneHref}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="size-4" />
            {SITE.ukPhone}
          </a>
          <Button
            asChild
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Link to="/growth-audit">Free Growth Audit</Link>
          </Button>
          <button
            className="xl:hidden relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/60 transition-colors hover:bg-muted active:scale-95"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "xl:hidden fixed inset-0 z-50 bg-background transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "h-full w-full overflow-y-auto transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <div className="h-16" />

          <div className="container-wide py-6 flex flex-col gap-1 min-h-[calc(100%-4rem)]">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) => cn(
                  "px-3 py-3 rounded-md text-lg font-medium transition-colors",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                )}
              >
                {n.label}
              </NavLink>
            ))}

            <div className="mt-2 rounded-md bg-muted/40 p-2">
              <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Services
              </p>
              {visibleServices.map((s) => (
                <Link
                  key={s.key}
                  to={`/services/${s.key}`}
                  className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted"
                >
                  <ServiceIcon name={s.icon} className="size-4 text-primary shrink-0" />
                  {s.title}
                </Link>
              ))}
            </div>

            <a
              href={SITE.ukPhoneHref}
              className="mt-4 flex items-center gap-2 px-3 text-base font-semibold text-foreground/80"
            >
              <Phone className="size-4" />
              {SITE.ukPhone}
            </a>

            <Button asChild variant="hero" size="lg" className="mt-4">
              <Link to="/contact">Free Growth Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};