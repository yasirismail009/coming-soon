'use client';

import { useState } from 'react';
import AppLink from '@/components/AppLink';
import { PLANS, formatPlanPrice } from '@/lib/plans';

function CheckMark() {
  return (
    <span
      className="mt-[0.15rem] flex h-[1.125rem] w-[1.125rem] flex-none items-center justify-center rounded-full bg-[rgba(52,211,153,0.16)] text-[#059669] dark:text-[#34D399]"
      aria-hidden
    >
      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M2 6.2 L4.6 8.8 L10 3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function AbsentMark() {
  return (
    <span
      className="mt-[0.15rem] flex h-[1.125rem] w-[1.125rem] flex-none items-center justify-center rounded-full bg-black/[0.05] text-[var(--km-faint)] dark:bg-white/[0.06]"
      aria-hidden
    >
      <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3 L9 9 M9 3 L3 9" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function cardClass(emphasis) {
  if (emphasis === 'premium') {
    return 'relative border-[0.09375rem] border-[rgba(167,139,250,0.55)] bg-[linear-gradient(165deg,rgba(109,74,255,0.22)_0%,rgba(75,149,240,0.1)_42%,rgba(255,255,255,0.02)_100%)] shadow-[0_2.5rem_5.625rem_-2.25rem_rgba(109,74,255,0.75)] md:-mt-3 md:mb-3 md:px-[2.15rem] md:py-[2.5rem]';
  }
  if (emphasis === 'popular') {
    return 'relative border-[0.09375rem] border-[rgba(140,192,255,0.4)] bg-[linear-gradient(165deg,rgba(75,149,240,0.14)_0%,rgba(255,255,255,0.02)_100%)]';
  }
  return 'opacity-[0.96]';
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const annual = billingPeriod === 'yearly';

  return (
    <section id="pricing" className="km-wrap pt-28">
      <div className="mb-9 max-w-[40em]">
        <div className="km-kicker">Pricing</div>
        <h2 className="km-h2">Priced by connections, not by seat</h2>
        <p className="km-lead mb-3.5">
          Billed in GBP. Kai, Grok Bot, and the MCP server are on Starter and Basic, not Free. Google
          Ads, GA4 and Search Console count as one connection; Meta ads, Facebook Page and Instagram
          count as one.
        </p>
      </div>
      <div className="mb-8 flex flex-wrap items-center gap-3.5">
        <div className="km-pill-track">
          <button type="button" className={`km-pill ${!annual ? 'is-on' : ''}`} onClick={() => setBillingPeriod('monthly')}>
            Monthly
          </button>
          <button type="button" className={`km-pill ${annual ? 'is-on' : ''}`} onClick={() => setBillingPeriod('yearly')}>
            Annual
          </button>
        </div>
        <span className="text-[0.84375rem] font-bold text-[#34D399]">
          {annual ? 'Billed yearly — two months free' : 'Save two months on annual billing'}
        </span>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {PLANS.map((plan) => {
          const amount = annual ? plan.price_yearly : plan.price_monthly;
          const price = formatPlanPrice(amount);
          const premium = plan.emphasis === 'premium';
          return (
            <div
              key={plan.id}
              className={`km-card flex h-full flex-col px-[2rem] py-[2.25rem] ${cardClass(plan.emphasis)}`}
            >
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <div>
                  <p className="m-0 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--km-faint)]">
                    {plan.productLine}
                  </p>
                  <h3 className="m-0 text-[1.375rem] font-extrabold">{plan.name}</h3>
                </div>
                {plan.badge ? (
                  <span
                    className={`shrink-0 rounded-full px-[0.75rem] py-[0.25rem] text-[0.6875rem] font-bold uppercase tracking-[0.1em] ${
                      premium
                        ? 'bg-[rgba(167,139,250,0.28)] text-[#5B21B6] dark:text-[#DDD6FE]'
                        : 'bg-[rgba(140,192,255,0.22)] text-[#215F8C] dark:text-[#C6E0FF]'
                    }`}
                  >
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mb-[1.25rem] min-h-[3.2em] text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">
                {plan.description}
              </p>
              <div className="mb-1 flex items-baseline gap-1.5">
                <span className="text-[2.75rem] font-extrabold tracking-[-0.04em]">{price}</span>
                {price !== 'Free' ? (
                  <span className="text-[0.9375rem] text-[var(--km-faint)]">GBP / {annual ? 'year' : 'month'}</span>
                ) : null}
              </div>
              <div className="mb-6 text-sm text-[var(--km-faint)]">
                Up to {plan.max_connections} platform connection{plan.max_connections === 1 ? '' : 's'}
                {plan.max_clients > 1 ? ` · ${plan.max_clients} brand clients` : ''}
              </div>
              <div className="mb-8 grid flex-1 content-start gap-[0.625rem] text-[0.90625rem]">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-[0.625rem] text-[var(--km-ink)]">
                    <CheckMark />
                    <span>{f}</span>
                  </div>
                ))}
                {(plan.excluded || []).map((f) => (
                  <div key={f} className="flex items-start gap-[0.625rem] text-[var(--km-faint)] line-through decoration-[var(--km-border)]">
                    <AbsentMark />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <AppLink
                href="/contact"
                className={premium ? 'km-btn-primary km-btn-sm mt-auto w-full' : 'km-btn-ghost km-btn-sm mt-auto w-full'}
              >
                {plan.cta}
              </AppLink>
            </div>
          );
        })}
      </div>
      <p className="mt-7 text-[0.90625rem] text-[var(--km-faint)]">
        Grok Bot pauses are two-step (propose, then you confirm). In-app Kai stays read-only. Starter
        and Basic include the MCP server at be.kampalo.com/mcp.{' '}
        <AppLink href="/kai/grok-bot" className="font-semibold text-[var(--km-link)] hover:underline">
          Grok Bot
        </AppLink>
        {' · '}
        <AppLink href="/kai/mcp" className="font-semibold text-[var(--km-link)] hover:underline">
          MCP server
        </AppLink>
      </p>
    </section>
  );
}
