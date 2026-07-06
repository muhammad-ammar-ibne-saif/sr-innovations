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
  message: z.string().trim().min(10, "A short message please").max(1500),
});

interface Props { defaultService?: string; compact?: boolean; }

export const ContactForm = ({ defaultService, compact }: Props) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "", email: "", phone: "",
    service: defaultService ?? "", message: "",
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
    const subject = encodeURIComponent(`Growth audit enquiry — ${values.service}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\n\n${values.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setSent(true);
      setSubmitting(false);
      toast({ title: "Opening your email app", description: "We reply within one working day." });
    }, 300);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-6 text-center">
        <CheckCircle2 className="size-10 text-success mx-auto mb-3" />
        <h3 className="font-display font-semibold text-lg">Thanks — your message is on its way.</h3>
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
          <Label htmlFor="service">Service</Label>
          <Select value={values.service} onValueChange={(v) => set("service")(v)}>
            <SelectTrigger id="service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => <SelectItem key={s.key} value={s.title}>{s.title}</SelectItem>)}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" rows={5} value={values.message} onChange={(e) => set("message")(e.target.value)} placeholder="Tell us about your business and goals…" required maxLength={1500} />
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Get my free growth audit"}
      </Button>
      <p className="text-xs text-muted-foreground">We reply within one working day. Or WhatsApp us on <a className="underline" href={SITE.whatsappLink}>{SITE.ukPhone}</a>.</p>
    </form>
  );
};
