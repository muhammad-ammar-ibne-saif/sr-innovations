import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";
import {
  adminContactTemplate,
  adminAuditTemplate,
  clientConfirmationTemplate,
} from "./emailTemplates";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.FROM_EMAIL!;
const ADMIN = process.env.ADMIN_EMAIL!;

// ---------- CONTACT FORM ----------
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: ADMIN,
        replyTo: email,
        subject: `New enquiry — ${service}`,
        html: adminContactTemplate({ name, email, phone, service, message }),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "We've received your message",
        html: clientConfirmationTemplate({ name, email, phone, service, message }),
      }),
    ]);
    res.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    res.status(500).json({ error: "Failed to send" });
  }
});

// ---------- AUDIT FORM ----------
app.post("/api/audit", async (req, res) => {
  const { name, email, phone, service, website, budget, challenge, message } = req.body;

  if (!name || !email || !phone || !service || !budget || !challenge || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: ADMIN,
        replyTo: email,
        subject: `New growth audit request — ${service}`,
        html: adminAuditTemplate({ name, email, phone, service, website, budget, challenge, message }),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Your growth audit request is in",
        html: clientConfirmationTemplate({ name, email, phone, service, website, budget, challenge, message }),
      }),
    ]);
    res.json({ ok: true });
  } catch (err) {
    console.error("Audit form send failed:", err);
    res.status(500).json({ error: "Failed to send" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));