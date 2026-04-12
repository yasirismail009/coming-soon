const EMAILJS_API = 'https://api.emailjs.com/api/v1.0/email/send';

/**
 * Send mail via EmailJS REST API (no extra package; same as @emailjs/browser).
 * Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.
 */
export async function sendEmailJs({ serviceId, templateId, publicKey, templateParams }) {
  const res = await fetch(EMAILJS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(text || `EmailJS error (${res.status})`);
  }
  return text;
}
