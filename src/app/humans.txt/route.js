import { SITE_URL } from '@/lib/site';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';

export async function GET() {
  const body = `/* TEAM */
Parent: ${TEKREIGN_CONTACT.parentCompany}
Product: Kampalo
Contact: ${TEKREIGN_CONTACT.contactEmail}
Location: ${TEKREIGN_CONTACT.addressLine1}, ${TEKREIGN_CONTACT.addressLine2}

/* SITE */
Standards: HTML5, Schema.org JSON-LD
Software: Next.js
URL: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
RSS: ${SITE_URL}/blog/rss.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
