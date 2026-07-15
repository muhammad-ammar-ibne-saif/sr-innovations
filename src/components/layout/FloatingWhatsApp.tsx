import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/config/site";

export const FloatingWhatsApp = () => (
  <a
    href={SITE.whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)]/70 animate-pulse-ring" aria-hidden />
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-elegant transition-transform group-hover:scale-105">
      <FaWhatsapp className="size-7" />
    </span>
    <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-semibold shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
      Chat with us
    </span>
  </a>
);