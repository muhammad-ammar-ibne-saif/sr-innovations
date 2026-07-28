interface BaseFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface AuditFields extends BaseFields {
  website?: string;
  budget?: string;
  challenge?: string;
}

const wrapper = (title: string, bodyHtml: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:#111827;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">${title}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background:#f9fafb;border-top:1px solid #eee;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">This email was sent automatically from your website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const row = (label: string, value?: string) =>
  value
    ? `<tr>
        <td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;vertical-align:top;">${label}</td>
        <td style="padding:8px 0;color:#111827;font-size:14px;">${value}</td>
      </tr>`
    : "";

// ---------- ADMIN NOTIFICATIONS ----------

export const adminContactTemplate = (f: BaseFields) =>
  wrapper(
    "📩 New Contact Form Enquiry",
    `
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", f.name)}
      ${row("Email", `<a href="mailto:${f.email}" style="color:#2563eb;">${f.email}</a>`)}
      ${row("Phone", f.phone)}
      ${row("Service", f.service)}
    </table>
    <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:8px;">
      <p style="margin:0 0 6px;color:#6b7280;font-size:13px;">Message</p>
      <p style="margin:0;color:#111827;font-size:14px;line-height:1.5;">${f.message.replace(/\n/g, "<br/>")}</p>
    </div>
    `
  );

export const adminAuditTemplate = (f: AuditFields) =>
  wrapper(
    "📩 New Growth Audit Request",
    `
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", f.name)}
      ${row("Email", `<a href="mailto:${f.email}" style="color:#2563eb;">${f.email}</a>`)}
      ${row("Phone", f.phone)}
      ${row("Service", f.service)}
      ${row("Website", f.website)}
      ${row("Budget", f.budget)}
      ${row("Challenge", f.challenge)}
    </table>
    <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:8px;">
      <p style="margin:0 0 6px;color:#6b7280;font-size:13px;">Additional details</p>
      <p style="margin:0;color:#111827;font-size:14px;line-height:1.5;">${f.message.replace(/\n/g, "<br/>")}</p>
    </div>
    `
  );

// ---------- CLIENT CONFIRMATIONS ----------

export const clientConfirmationTemplate = (f: BaseFields | AuditFields) =>
  wrapper(
    "Thanks for reaching out 👋",
    `
    <p style="margin:0 0 16px;color:#111827;font-size:15px;line-height:1.6;">
      Hi ${f.name.split(" ")[0]},
    </p>
    <p style="margin:0 0 16px;color:#374151;font-size:14px;line-height:1.6;">
      Thanks for getting in touch about <b>${f.service}</b>. We've received your details and one of our team will get back to you within one working day.
    </p>
    <div style="margin:20px 0;padding:16px;background:#f9fafb;border-radius:8px;">
      <p style="margin:0 0 6px;color:#6b7280;font-size:13px;">What you sent us</p>
      <p style="margin:0;color:#111827;font-size:14px;line-height:1.5;">${f.message.replace(/\n/g, "<br/>")}</p>
    </div>
    <p style="margin:16px 0 0;color:#374151;font-size:14px;line-height:1.6;">
      In the meantime, feel free to reply directly to this email if you have anything to add.
    </p>
    `
  );