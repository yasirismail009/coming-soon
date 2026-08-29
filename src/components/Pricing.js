'use client';

import { useState } from 'react';
import Link from 'next/link';

const plansData = [
  {
    id: 1,
    name: 'Free Plan',
    plan_type: 'free',
    description: 'One business, exploring the workspace.',
    price_monthly: '0.00',
    price_yearly: '0.00',
    max_connections: 1,
    is_popular: false,
    features: ['Dashboard, Trends and KPI comparison', 'Google and Meta ads data', 'Kai, unlimited questions', 'PDF and CSV reports'],
  },
  {
    id: 2,
    name: 'Premium Plan',
    plan_type: 'premium',
    description: 'Growing teams and white-labelled reporting.',
    price_monthly: '3.00',
    price_yearly: '30.00',
    max_connections: 4,
    is_popular: true,
    features: ['Everything in Free', 'More ad accounts and connections', 'Branded reports & scheduling', 'Organic Insights & moderation'],
  },
  {
    id: 3,
    name: 'Enterprise Plan',
    plan_type: 'enterprise',
    description: 'Agencies, large portfolios and internal teams.',
    price_monthly: '8.00',
    price_yearly: '80.00',
    max_connections: 10,
    is_popular: false,
    features: ['Everything in Premium', 'Unlimited brand clients', 'Role-based team access', 'Onboarding and priority support'],
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const annual = billingPeriod === 'yearly';

  const getPrice = (plan) => {
    const raw = annual ? plan.price_yearly : plan.price_monthly;
    const n = parseFloat(raw);
    if (n === 0) return 'Free';
    return `$${n.toFixed(0)}`;
  };

  return (
    <section id="pricing" className="km-wrap pt-28">
      <div className="mb-9 max-w-[40em]">
        <div className="km-kicker">Pricing</div>
        <h2 className="km-h2">Priced by connections, not by seat</h2>
        <p className="km-lead mb-3.5">Every plan includes Kai, all six surfaces and unlimited reports.</p>
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
          {annual ? 'Billed yearly' : 'Save on annual billing'}
        </span>
      </div>
      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">
        {plansData.map((plan) => {
          const price = getPrice(plan);
          return (
            <div
              key={plan.id}
              className={`km-card flex flex-col px-[2rem] py-[2.25rem] ${
                plan.is_popular
                  ? 'relative border-[0.09375rem] border-[rgba(140,192,255,0.45)] bg-[linear-gradient(165deg,rgba(75,149,240,0.18)_0%,rgba(109,74,255,0.12)_45%,rgba(255,255,255,0.02)_100%)] shadow-[0_2.5rem_5.625rem_-2.5rem_rgba(75,149,240,0.7)]'
                  : ''
              }`}
            >
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <h3 className="m-0 text-[1.375rem] font-extrabold">{plan.name}</h3>
                {plan.is_popular ? (
                  <span className="rounded-full bg-[rgba(140,192,255,0.22)] px-[0.75rem] py-[0.25rem] text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[#215F8C] dark:text-[#C6E0FF]">
                    Most chosen
                  </span>
                ) : null}
              </div>
              <p className="mb-[1.375rem] text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">{plan.description}</p>
              <div className="mb-1 flex items-baseline gap-1.5">
                <span className="text-[2.75rem] font-extrabold tracking-[-0.04em]">{price}</span>
                {price !== 'Free' ? (
                  <span className="text-[0.9375rem] text-[var(--km-faint)]">/ {annual ? 'year' : 'month'}</span>
                ) : null}
              </div>
              <div className="mb-7 text-sm text-[var(--km-faint)]">
                Up to {plan.max_connections} platform connection{plan.max_connections === 1 ? '' : 's'}
              </div>
              <div className="mb-8 grid gap-[0.6875rem] text-[0.9375rem] text-[var(--km-muted)]">
                {plan.features.map((f) => (
                  <div key={f}>{f}</div>
                ))}
              </div>
              <Link
                href="/contact"
                className={plan.is_popular ? 'km-btn-primary km-btn-sm mt-auto w-full' : 'km-btn-ghost km-btn-sm mt-auto w-full'}
              >
                {plan.plan_type === 'enterprise' ? 'Talk to sales' : 'Start free trial'}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
