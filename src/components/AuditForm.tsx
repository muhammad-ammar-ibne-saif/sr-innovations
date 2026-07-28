// src/components/AuditForm.tsx
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SERVICES, SITE } from "@/config/site";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  service: z.string().min(1, "Choose a service"),
  website: z.string().trim().max(200).optional(),
  budget: z.string().min(1, "Choose a budget range"),
  challenge: z.string().min(1, "Tell us your biggest challenge"),
  message: z.string().trim().min(10, "A short message please").max(1500),
});

interface Props { defaultService?: string; compact?: boolean; }

const BUDGET_OPTIONS = [
  "Under £500/month",
  "£500 – £2,000/month",
  "£2,000 – £5,000/month",
  "£5,000+/month",
  "Not sure yet",
];

const CHALLENGE_OPTIONS = [
  "Not enough enquiries",
  "Website looks outdated",
  "No time to manage marketing",
  "Ads aren't converting",
  "Just exploring options",
  "Other",
];

export const AuditForm = ({ defaultService, compact }: Props) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "", email: "", phone: "",
    service: defaultService ?? "",
    website: "", budget: "", challenge: "", message: "",
  });

  const set = (k: keyof typeof values) => (v: string) => setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      toast({ title: "Please check the form", description: result.error.issues[0]?.message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
try {
  const res = await fetch("http://localhost:4000/api/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error("Send failed");
  setSent(true);
  toast({ title: "Message sent", description: "We'll review your details and reply within one working day." });
} catch {
  toast({ title: "Something went wrong", description: "Please try again or WhatsApp us.", variant: "destructive" });
} finally {
  setSubmitting(false);
}
}

  if (sent) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-6 text-center">
        <CheckCircle2 className="size-10 text-success mx-auto mb-3" />
        <h3 className="font-display font-semibold text-lg">Thanks , we're preparing your audit.</h3>
        <p className="text-sm text-muted-foreground mt-1">If your email app didn't open, email us at <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "space-y-5"} noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" value={values.name} onChange={(e) => set("name")(e.target.value)} placeholder="Jane Smith" required maxLength={80} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" value={values.email} onChange={(e) => set("email")(e.target.value)} placeholder="you@company.com" required maxLength={160} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" value={values.phone} onChange={(e) => set("phone")(e.target.value)} placeholder="+44 7000 000 000" required maxLength={30} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="website">Current website (if any)</Label>
          <Input id="website" value={values.website} onChange={(e) => set("website")(e.target.value)} placeholder="yourbusiness.com" maxLength={200} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="service">Service you're most interested in</Label>
          <Select value={values.service} onValueChange={(v) => set("service")(v)}>
            <SelectTrigger id="service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => <SelectItem key={s.key} value={s.title}>{s.title}</SelectItem>)}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="budget">Monthly marketing budget</Label>
          <Select value={values.budget} onValueChange={(v) => set("budget")(v)}>
            <SelectTrigger id="budget"><SelectValue placeholder="Choose a range" /></SelectTrigger>
            <SelectContent>
              {BUDGET_OPTIONS.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="challenge">Biggest challenge right now</Label>
        <Select value={values.challenge} onValueChange={(v) => set("challenge")(v)}>
          <SelectTrigger id="challenge"><SelectValue placeholder="Choose one" /></SelectTrigger>
          <SelectContent>
            {CHALLENGE_OPTIONS.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Anything else we should know?</Label>
        <Textarea id="message" rows={4} value={values.message} onChange={(e) => set("message")(e.target.value)} placeholder="Tell us about your business and goals…" required maxLength={1500} />
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Get my free growth audit"}
      </Button>
      <p className="text-xs text-muted-foreground">We reply within one working day. Or WhatsApp us on <a className="underline" href={SITE.whatsappLink}>{SITE.ukPhone}</a>.</p>
    </form>
  );
};