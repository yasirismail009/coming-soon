'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import LaptopFrame from '@/components/LaptopFrame';

function Shot({ id, alt, className = '' }) {
  const { theme } = useTheme();
  return (
    <Image
      src={resolveDashboardImage(id, theme)}
      alt={alt}
      width={1600}
      height={900}
      className={`block h-auto w-full ${className}`}
      sizes="(max-width: 1240px) 100vw, 1240px"
    />
  );
}

function Check({ children }) {
  return (
    <div className="flex items-start gap-[0.8125rem]">
      <span className="mt-[0.1875rem] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(75,149,240,0.2)]">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#8CC0FF" strokeWidth="3.2" strokeLinecap="round" aria-hidden>
          <path d="M4 12l5 5L20 6" />
        </svg>
      </span>
      <span className="text-[0.96875rem] leading-relaxed text-[var(--km-muted)]">{children}</span>
    </div>
  );
}

function Framed({ id, alt, url }) {
  const { theme } = useTheme();
  return (
    <LaptopFrame url={url}>
      <Image
        src={resolveDashboardImage(id, theme)}
        alt={alt}
        fill
        className="object-cover object-left-top"
        sizes="(max-width: 1240px) 100vw, 1240px"
      />
    </LaptopFrame>
  );
}

export default function ProductTour() {
  return (
    <>
      <section className="km-wrap pt-28">
        <div className="mb-11 max-w-[40em]">
          <div className="km-kicker">Trends</div>
          <h2 className="km-h2">Nine metrics, one glance, any window</h2>
          <p className="km-lead">
            Revenue, spend, ROAS, conversions, impressions, clicks, CTR, CPC and CPA each carry their own sparkline. Filter to Google or Meta and the whole board re-reads for that platform.
          </p>
        </div>
        <Framed
          id="trends"
          url="app.kampalo.com/trends"
          alt="Trends view with sparkline cards for revenue, spend, ROAS, conversions and more"
        />
      </section>

      <section className="km-wrap pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[3.75rem]">
          <div className="overflow-hidden rounded-2xl border border-[var(--km-border)] shadow-[0_2.5rem_5rem_-2.1875rem_rgba(0,0,0,0.35)] dark:shadow-[0_2.5rem_5rem_-2.1875rem_rgba(0,0,0,0.9)]">
            <Shot id="kpis" alt="KPI comparison of Google Ads against Meta Ads across ROAS, revenue, spend and CPA" />
          </div>
          <div>
            <div className="km-kicker">KPI comparison</div>
            <h2 className="km-h2">Settle the Google-versus-Meta argument</h2>
            <p className="km-lead mb-[1.625rem]">
              Put two platforms, two accounts or two campaigns beside each other and read ROAS, revenue, spend and CPA on the same bars. Currencies stay labelled rather than silently converted.
            </p>
            <div className="grid gap-4">
              <Check>Best value in each row highlighted automatically</Check>
              <Check>Tick two accounts on Accounts &amp; Campaigns to compare them the same way</Check>
              <Check>Campaign detail breaks down by gender, age, location, device and placement</Check>
            </div>
          </div>
        </div>
      </section>

      <section className="km-wrap pt-28">
        <div className="mb-11 max-w-[42em]">
          <div className="km-kicker">Accounts &amp; campaigns</div>
          <h2 className="km-h2">Tick two boxes to compare anything</h2>
          <p className="km-lead">
            One account selected drills into it. Two or more drops them into a comparison table — accounts or campaigns, Google or Meta, in whatever currency each one reports.
          </p>
        </div>
        <div className="mb-5">
          <Framed
            id="accountsCampaigns"
            url="app.kampalo.com/accounts"
            alt="Accounts and campaigns screen with selectable account cards and a campaign table"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="km-card overflow-hidden p-0">
            <Shot id="accountsComparison" alt="Account comparison table with best values highlighted" />
          </div>
          <div className="km-card overflow-hidden p-0">
            <Shot id="campaignsComparison" alt="Campaign comparison table with spend, revenue, ROAS, CPA and conversions" />
          </div>
        </div>
      </section>

      <section className="km-wrap pt-28">
        <div className="mb-11 max-w-[42em]">
          <div className="km-kicker">Campaign detail</div>
          <h2 className="km-h2">Five breakdowns behind every campaign</h2>
          <p className="km-lead">
            Open any campaign for spend, impressions, clicks and CTR, then read it by gender and age, location, device or placement. Each tab leads with the headline finding rather than a wall of rows.
          </p>
        </div>
        <div className="mb-5">
          <Framed
            id="campaignDetail"
            url="app.kampalo.com/campaign"
            alt="Campaign detail overview with spend, impressions, clicks and CTR"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="km-card overflow-hidden p-0">
            <Shot id="campaignGender" alt="Demographic performance by age and gender" />
          </div>
          <div className="km-card overflow-hidden p-0">
            <Shot id="campaignDevices" alt="Device performance insights" />
          </div>
          <div className="km-card overflow-hidden p-0">
            <Shot id="campaignPlacement" alt="Publisher platform performance for Facebook and Instagram" />
          </div>
        </div>
      </section>

      <section className="km-wrap pt-28">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="km-card overflow-hidden rounded-[1.25rem] px-[2.25rem] pt-[2.375rem]">
            <div className="km-kicker">Analytics</div>
            <h3 className="mb-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.025em]">GA4, without the report builder</h3>
            <p className="mb-7 text-base leading-relaxed text-[var(--km-muted)]">
              Audience, acquisition, engagement and live traffic for any property and range, with a prior-period delta on every metric and Search Console sitting next to it.
            </p>
            <Shot
              id="analytics"
              alt="Google Analytics view with views, events, sessions and engagement rate"
              className="rounded-t-xl border border-b-0 border-[var(--km-border)]"
            />
          </div>
          <div className="km-card overflow-hidden rounded-[1.25rem] px-[2.25rem] pt-[2.375rem]">
            <div className="km-kicker">SEO Suite</div>
            <h3 className="mb-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.025em]">A full audit on a schedule</h3>
            <p className="mb-7 text-base leading-relaxed text-[var(--km-muted)]">
              Lighthouse category scores, Core Web Vitals and a ranked list of failing audits, beside clicks, impressions and average position from Search Console.
            </p>
            <Shot
              id="seoAuditScore"
              alt="Website audit with performance, accessibility, best practices and SEO scores"
              className="rounded-t-xl border border-b-0 border-[var(--km-border)]"
            />
          </div>
        </div>
      </section>

      <section className="km-wrap pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[3.75rem]">
          <div>
            <div className="km-kicker">Organic insights</div>
            <h2 className="km-h2">The half of the picture that is not paid</h2>
            <p className="km-lead mb-[1.625rem]">
              Page fans, views and post engagement from Facebook, reach, saves and profile taps from Instagram. Read on separate insight tokens, shown next to the ads numbers but never mixed into them.
            </p>
            <a href="#cta" className="km-btn-ghost km-btn-sm">
              See it on your accounts
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--km-border)]">
            <Shot id="organicInsights" alt="Organic insights showing Facebook Pages and Instagram connection status and metrics" />
          </div>
        </div>
      </section>
    </>
  );
}

export function ReportsTour() {
  return (
    <>
      <section id="reports" className="km-wrap pt-28">
        <div className="mb-12 max-w-[42em]">
          <div className="km-kicker">Report templates</div>
          <h2 className="km-h2">Four templates, your logo, their inbox</h2>
          <p className="km-lead">
            Pick a template, a date range and a data scope. Kampalo renders a branded PDF in your client&apos;s colours, logo and footer — or a CSV if they would rather have the rows.
          </p>
        </div>
        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Performance summary', body: 'Spend, revenue, ROAS and conversions with the revenue-against-spend chart.', tag: 'Monthly retainer' },
            { title: 'Platform breakdown', body: 'Google against Meta with totals, for the budget conversation.', tag: 'Quarterly review' },
            { title: 'Client report', body: 'Every platform for one client, scoped to their assigned ad accounts.', tag: 'White label' },
            { title: 'Campaign breakdown', body: 'Top campaigns ranked by spend and ROAS, with CPA on every line.', tag: 'Optimisation call' },
          ].map((card) => (
            <div key={card.title} className="km-card px-[1.625rem] py-7">
              <h3 className="mb-2 text-[1.0625rem] font-extrabold">{card.title}</h3>
              <p className="mb-4 text-[0.90625rem] leading-relaxed text-[var(--km-muted)]">{card.body}</p>
              <div className="text-[0.71875rem] font-bold uppercase tracking-[0.12em] text-[var(--km-faint)]">{card.tag}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Framed
            id="reports"
            url="app.kampalo.com/reports"
            alt="Report builder with report type, date range, data scope and PDF generation"
          />
          <div className="flex flex-col gap-5">
            <div className="km-card overflow-hidden px-[1.875rem] pt-[1.875rem]">
              <h3 className="mb-2 text-[1.1875rem] font-extrabold">Branding per client</h3>
              <p className="mb-[1.375rem] text-[0.90625rem] leading-relaxed text-[var(--km-muted)]">
                Company name, three colours, light and dark logos and a centred footer line — saved against each brand client.
              </p>
              <Shot
                id="reportBranding"
                alt="Report branding settings with company name, primary, secondary and accent colours"
                className="rounded-t-[0.625rem] border border-b-0 border-[var(--km-border)]"
              />
            </div>
            <div className="km-card overflow-hidden px-[1.875rem] pt-[1.875rem]">
              <h3 className="mb-2 text-[1.1875rem] font-extrabold">Send it without you</h3>
              <p className="mb-[1.375rem] text-[0.90625rem] leading-relaxed text-[var(--km-muted)]">
                Schedule any template and Kampalo generates and delivers it on time, every period.
              </p>
              <Shot
                id="reportScheduler"
                alt="Report scheduler"
                className="rounded-t-[0.625rem] border border-b-0 border-[var(--km-border)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="km-wrap pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[3.75rem]">
          <div className="overflow-hidden rounded-2xl border border-[var(--km-border)]">
            <Shot id="connect" alt="Connect screen showing Google and Meta connections, scopes and connection quota" />
          </div>
          <div>
            <div className="km-kicker">Access &amp; permissions</div>
            <h2 className="km-h2">We only request the access we need</h2>
            <p className="km-lead mb-[1.625rem]">
              One connection per provider covers its whole family — Ads, Analytics and Search Console under Google; Ads, Page Insights and Instagram under Meta. Token health, renewal dates and your connection quota stay visible.
            </p>
            <div className="grid gap-[1.125rem]">
              <div>
                <div className="mb-1 text-base font-bold">Read-only insight scopes</div>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">Organic insights use page access tokens with insight scopes, separate from ads data.</p>
              </div>
              <div>
                <div className="mb-1 text-base font-bold">Roles per workspace</div>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">Invite your team, assign brand clients, and keep each client&apos;s accounts scoped to them.</p>
              </div>
              <div>
                <div className="mb-1 text-base font-bold">Disconnect at any time</div>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">One click revokes a provider and stops the sync. Account deletion removes the workspace outright.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="km-wrap pt-28">
        <div className="mb-11 max-w-[42em]">
          <div className="km-kicker">Workspaces &amp; team</div>
          <h2 className="km-h2">A workspace per client, one login for your team</h2>
          <p className="km-lead">
            Switch between all clients, your own company and each brand client from the sidebar. Invite colleagues, set roles, and let each brand carry its own accounts, branding and report settings.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr]">
          <div className="km-card overflow-hidden p-0">
            <Shot id="clients" alt="Client workspace management" />
          </div>
          <div className="km-card overflow-hidden p-0">
            <Shot id="team" alt="Team members with roles and invite control" />
          </div>
        </div>
      </section>
    </>
  );
}
