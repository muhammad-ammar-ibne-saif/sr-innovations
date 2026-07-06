import { useEffect, useState } from "react";
import { Activity, X } from "lucide-react";

const MESSAGES = [
  "Website audit requested",
  "SEO consultation booked",
  "Google Ads enquiry received",
  "New website project enquiry",
  "Social media audit requested",
  "Digital marketing consultation booked",
  "Branding project enquiry received",
  "Website redesign enquiry received",
];

const TIME_AGO = ["just now", "a minute ago", "2 minutes ago", "moments ago", "a few minutes ago"];

export const ActivityPopup = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let timer: ReturnType<typeof setTimeout>;
    const showOne = () => {
      setIndex((i) => (i + 1) % MESSAGES.length);
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
        timer = setTimeout(showOne, 22000 + Math.random() * 8000);
      }, 6500);
    };
    const start = setTimeout(showOne, 6000);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed left-4 bottom-24 md:bottom-6 z-40 max-w-[19rem] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3 rounded-2xl bg-card border border-border shadow-elegant px-4 py-3 backdrop-blur">
        <span className="relative flex size-9 shrink-0 rounded-xl bg-primary/10 text-primary items-center justify-center">
          <Activity className="size-4" />
          <span className="absolute top-1 right-1 size-2 rounded-full bg-success animate-pulse" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-foreground leading-tight">{MESSAGES[index]}</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">
            {TIME_AGO[index % TIME_AGO.length]} · United Kingdom
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notification"
          className="text-muted-foreground hover:text-foreground transition shrink-0"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};
