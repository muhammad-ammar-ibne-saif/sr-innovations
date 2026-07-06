import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ActivityPopup } from "@/components/ActivityPopup";

export const SiteLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1"><Outlet /></main>
      <SiteFooter />
      <FloatingWhatsApp />
      <ActivityPopup />
    </div>
  );
};
