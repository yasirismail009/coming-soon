import BrandLogo from '@/components/BrandLogo';
import AppLink from '@/components/AppLink';

const footerLinks = {
  product: [
    { name: 'Platform', href: '/#platform' },
    { name: 'Kai', href: '/kai' },
    { name: 'Reports', href: '/#reports' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Compare platforms', href: '/compare' },
    { name: 'Google + Meta dashboard', href: '/google-ads-meta-dashboard' },
    { name: 'Kai MCP', href: '/kai/mcp' },
  ],
  integrations: [
    { name: 'All integrations', href: '/integrations' },
    { name: 'Google Ads', href: '/integrations/google-ads' },
    { name: 'Meta Ads', href: '/integrations/meta' },
    { name: 'Analytics 4', href: '/#platform' },
    { name: 'Search Console', href: '/#platform' },
  ],
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Tekreign', href: 'https://tekreign.com', external: true },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Help Center', href: '/help' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Data deletion', href: '/data-deletion' },
  ],
};

function Col({ title, links }) {
  return (
    <div className="flex flex-col gap-[0.6875rem] text-[0.90625rem]">
      <div className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--km-faint)]">
        {title}
      </div>
      {links.map((link) => (
        <AppLink
          key={link.name}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-[var(--km-muted)] hover:text-[var(--km-ink)] transition-colors"
        >
          {link.name}
        </AppLink>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--km-border)] bg-[var(--km-bg)]">
      <div className="km-wrap grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo className="mb-3.5" />
          <p className="m-0 max-w-[24em] text-[0.90625rem] leading-relaxed text-[var(--km-faint)]">
            Ask. Automate. Grow.
          </p>
        </div>
        <Col title="Product" links={footerLinks.product} />
        <Col title="Integrations" links={footerLinks.integrations} />
        <Col title="Company" links={footerLinks.company} />
      </div>
      <div className="km-wrap pb-11">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--km-border)] pt-[1.375rem]">
          <span className="text-[0.84375rem] text-[var(--km-faint)]">
            © {new Date().getFullYear()} Kampalo
          </span>
          <nav className="flex flex-wrap items-center gap-x-[1.25rem] gap-y-[0.5rem] text-[0.84375rem]">
            {footerLinks.legal.map((link) => (
              <AppLink
                key={link.name}
                href={link.href}
                className="text-[var(--km-faint)] hover:text-[var(--km-ink)] transition-colors"
              >
                {link.name}
              </AppLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
