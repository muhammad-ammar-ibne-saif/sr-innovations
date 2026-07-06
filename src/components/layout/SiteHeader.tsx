import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { LOGO_URL, NAV, SITE } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft" : "bg-transparent"
    )}>
      <div className="container-wide flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" aria-label={SITE.name}>
          <img src={LOGO_URL} alt="SR Innovations logo" className="h-9 w-9 md:h-10 md:w-10 object-contain" />
          <div className="leading-none">
            <div className="font-display font-bold text-base md:text-lg">The SR Innovations</div>
            <div className="text-[10px] tracking-wider uppercase text-muted-foreground hidden sm:block">Digital Growth Agency</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) => cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive ? "text-primary" : "text-foreground/75 hover:text-foreground"
              )}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.ukPhoneHref} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary">
            <Phone className="size-4" />
            {SITE.ukPhone}
          </a>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Free Growth Audit</Link>
          </Button>
          <button
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-wide py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) => cn(
                  "px-3 py-3 rounded-md text-base font-medium",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                )}
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/contact">Free Growth Audit</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
