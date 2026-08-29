'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sendEmailJs } from '@/utils/emailjsClient';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';

const topics = [
  { id: 'sales', label: 'Pricing and plans' },
  { id: 'migrate', label: 'Moving from another tool' },
  { id: 'support', label: 'Product support' },
  { id: 'partner', label: 'Partnerships' },
];

const faqs = [
  {
    q: 'How quickly will someone reply?',
    a: 'Within one business day, usually the same afternoon if you write before midday. Support enquiries from existing customers go to the front of the queue.',
  },
  {
    q: 'Can you help us migrate our reporting?',
    a: 'Yes. Tell us which tool you are on and how many clients you report for. We will rebuild your templates against your connected accounts before you commit to a plan.',
  },
  {
    q: 'Do you offer custom pricing above 50 accounts?',
    a: 'We do. Volume pricing, role-based team access and onboarding are handled case by case on the Enterprise plan.',
  },
  {
    q: 'Where is our data stored?',
    a: 'Provider tokens are encrypted at rest and you can revoke any connection from the Connect screen, which deletes the synced data for that account. See Privacy for details.',
  },
];

const fieldClass =
  'h-[3.125rem] w-full rounded-xl border border-[var(--km-border)] bg-black/[0.03] px-[4%] text-[0.96875rem] text-[var(--km-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--km-faint)] focus:border-[rgba(95,166,255,0.75)] focus:shadow-[0_0_0_0.25rem_rgba(75,149,240,0.16)] dark:bg-white/[0.04]';

export default function ContactPageClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    accounts: '6-20',
    topic: 'sales',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const emailJsReady = Boolean(serviceId && templateId && publicKey);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError('Please add your name.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
      return setError('Please add a valid work email.');
    }
    if (form.message.trim().length < 10) {
      return setError('Please tell us a little more in the message.');
    }

    if (!emailJsReady) {
      setError(
        'Contact form is not configured yet. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment.'
      );
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const topicLabel = topics.find((t) => t.id === form.topic)?.label || form.topic;
      await sendEmailJs({
        serviceId,
        templateId,
        publicKey,
        templateParams: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: '—',
          message: [
            form.message.trim(),
            '',
            `Company: ${form.company || '—'}`,
            `Ad accounts: ${form.accounts}`,
            `Topic: ${topicLabel}`,
          ].join('\n'),
          service_type: topicLabel,
        },
      });
      setSent(true);
    } catch {
      setError('Something went wrong sending your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstName = form.name.split(' ')[0] || '';

  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(130%_90%_at_50%_-20%,#c5d7ea_0%,#edf0f6_42%,#edf0f6_100%)] dark:bg-[radial-gradient(130%_90%_at_50%_-20%,#17395e_0%,#0a1526_42%,#05080f_100%)]">
        <div
          aria-hidden
          className="km-glow km-orb-wide top-[-18%] left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(closest-side, var(--km-glow-blue), transparent)' }}
        />
        <div className="km-wrap relative grid items-start gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--km-border)] bg-white/50 px-[1.125rem] py-[0.4375rem] text-[0.8125rem] font-semibold text-[var(--km-muted)] backdrop-blur-md dark:bg-white/5">
              <span aria-hidden className="km-pulse h-1.5 w-1.5 rounded-full bg-[#34D399]" />
              Replies within one business day
            </div>
            <h1 className="mb-5 km-h1 font-extrabold leading-[1.03] tracking-[-0.042em] text-balance">
              Talk to the team behind <span className="km-gradient-text">Kampalo</span>
            </h1>
            <p className="mb-10 max-w-[30em] text-[1.125rem] leading-[1.65] text-[var(--km-muted)] text-pretty">
              Tell us how many accounts you run and what you report on today. We will come back with a straight answer on fit, pricing and what a migration looks like.
            </p>

            <div className="mb-9 flex flex-col gap-3.5">
              <div className="km-card flex items-start gap-4 px-[1.375rem] py-5">
                <span className="flex h-[2.375rem] w-[2.375rem] shrink-0 items-center justify-center rounded-[0.6875rem] bg-[linear-gradient(135deg,#4B95F0,#6D4AFF)]">
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--km-faint)]">Email</div>
                  <a href={`mailto:${TEKREIGN_CONTACT.contactEmail}`} className="text-[1.03125rem] font-bold text-[var(--km-ink)] hover:text-[var(--km-link)]">
                    {TEKREIGN_CONTACT.contactEmail}
                  </a>
                </div>
              </div>
              <div className="km-card flex items-start gap-4 px-[1.375rem] py-5">
                <span className="flex h-[2.375rem] w-[2.375rem] shrink-0 items-center justify-center rounded-[0.6875rem] border border-[var(--km-border)] bg-black/[0.04] dark:bg-white/[0.08]">
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#8CC0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                </span>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--km-faint)]">Office</div>
                  <div className="text-[1.03125rem] font-bold">{TEKREIGN_CONTACT.addressLine1}</div>
                  <div className="mt-0.5 text-sm text-[var(--km-faint)]">{TEKREIGN_CONTACT.addressLine2}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[0.84375rem] text-[var(--km-faint)]">
              <span>Prefer self-serve?</span>
              <Link href="/help" className="font-bold text-[var(--km-link)]">
                Visit the Help Center
              </Link>
            </div>
          </div>

          <div className="relative rounded-[1.625rem] bg-[linear-gradient(160deg,rgba(140,192,255,0.35),rgba(109,74,255,0.14)_45%,rgba(255,255,255,0.04))] p-[0.125rem]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(237,240,246,0.98))] px-[1.75rem] py-8 shadow-[0_3.75rem_8.125rem_-3.125rem_rgba(15,23,42,0.35)] backdrop-blur-md dark:bg-[linear-gradient(180deg,rgba(16,24,40,0.96),rgba(8,13,24,0.98))] sm:px-[2.375rem] sm:py-[2.375rem]">
              {sent ? (
                <div className="px-[0.5rem] py-[2rem] text-center">
                  <div
                    aria-hidden
                    className="mx-auto mb-[1.375rem] flex h-[3.875rem] w-[3.875rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#4B95F0,#6D4AFF)] shadow-[0_1.125rem_2.75rem_-0.875rem_rgba(109,74,255,0.9)]"
                  >
                    <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </div>
                  <h2 className="mb-3 text-[1.75rem] font-extrabold tracking-[-0.03em]">Message sent</h2>
                  <p className="mx-auto mb-7 max-w-[26em] text-base leading-relaxed text-[var(--km-muted)]">
                    Thanks {firstName}. Someone from the team will reply to {form.email} within one business day.
                  </p>
                  <button
                    type="button"
                    className="km-btn-ghost km-btn-sm"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', company: '', accounts: '6-20', topic: 'sales', message: '' });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="mb-2 text-2xl font-extrabold tracking-[-0.03em]">Send us a message</h2>
                  <p className="mb-7 text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">
                    Fields marked with an asterisk are required.
                  </p>

                  <div className="mb-[1.125rem] grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2">
                    <label className="flex flex-col gap-[0.5625rem]">
                      <span className="text-[0.8125rem] font-bold tracking-[0.02em] text-[var(--km-muted)]">Full name *</span>
                      <input name="name" value={form.name} onChange={onChange} placeholder="Alex Whitfield" className={fieldClass} required />
                    </label>
                    <label className="flex flex-col gap-[0.5625rem]">
                      <span className="text-[0.8125rem] font-bold tracking-[0.02em] text-[var(--km-muted)]">Work email *</span>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="alex@agency.com" className={fieldClass} required />
                    </label>
                  </div>

                  <div className="mb-[1.125rem] grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2">
                    <label className="flex flex-col gap-[0.5625rem]">
                      <span className="text-[0.8125rem] font-bold tracking-[0.02em] text-[var(--km-muted)]">Company</span>
                      <input name="company" value={form.company} onChange={onChange} placeholder="Northline Media" className={fieldClass} />
                    </label>
                    <label className="flex flex-col gap-[0.5625rem]">
                      <span className="text-[0.8125rem] font-bold tracking-[0.02em] text-[var(--km-muted)]">Ad accounts you manage</span>
                      <select name="accounts" value={form.accounts} onChange={onChange} className={`${fieldClass} cursor-pointer`}>
                        <option value="1-5">1 to 5</option>
                        <option value="6-20">6 to 20</option>
                        <option value="21-50">21 to 50</option>
                        <option value="50+">More than 50</option>
                      </select>
                    </label>
                  </div>

                  <div className="mb-5">
                    <div className="mb-[0.6875rem] text-[0.8125rem] font-bold tracking-[0.02em] text-[var(--km-muted)]">What is this about?</div>
                    <div className="flex flex-wrap gap-[0.5625rem]">
                      {topics.map((topic) => (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, topic: topic.id }))}
                          className={`h-[2.375rem] rounded-full px-[1rem] text-sm font-semibold transition-colors ${
                            form.topic === topic.id ? 'km-pill is-on' : 'km-pill border border-[var(--km-border)]'
                          }`}
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="mb-5 flex flex-col gap-[0.5625rem]">
                    <span className="text-[0.8125rem] font-bold tracking-[0.02em] text-[var(--km-muted)]">Message *</span>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="We run 14 client accounts across Google and Meta and rebuild the same reports every month."
                      className="w-full resize-y rounded-xl border border-[var(--km-border)] bg-black/[0.03] px-[4%] py-[0.875rem] text-[0.96875rem] leading-relaxed text-[var(--km-ink)] outline-none placeholder:text-[var(--km-faint)] focus:border-[rgba(95,166,255,0.75)] focus:shadow-[0_0_0_0.25rem_rgba(75,149,240,0.16)] dark:bg-white/[0.04]"
                      required
                    />
                  </label>

                  {error ? (
                    <div className="mb-[1.125rem] rounded-xl border border-[rgba(255,95,87,0.35)] bg-[rgba(255,95,87,0.1)] px-[1rem] py-[0.75rem] text-sm font-semibold text-[#b42318] dark:text-[#FFB4AE]">
                      {error}
                    </div>
                  ) : null}

                  <button type="submit" disabled={isSubmitting} className="km-btn-primary w-full disabled:opacity-70">
                    {isSubmitting ? 'Sending…' : 'Send message'}
                  </button>
                  <p className="mt-4 text-center text-[0.8125rem] leading-relaxed text-[var(--km-faint)]">
                    We use your details to answer this enquiry only. No newsletter, no sharing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="km-wrap pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-[3.75rem]">
          <h2 className="km-h2 m-0">
            Before you
            <br />
            write in
          </h2>
          <div className="border-t border-[var(--km-border)]">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-[var(--km-border)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.125rem] font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 text-[1.375rem] font-normal text-[var(--km-faint)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mb-6 max-w-[44em] text-base leading-[1.7] text-[var(--km-muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-[6.5rem] overflow-hidden border-t border-[var(--km-border)] bg-[radial-gradient(110%_130%_at_50%_110%,#c5d7ea_0%,#edf0f6_50%,#edf0f6_100%)] dark:bg-[radial-gradient(110%_130%_at_50%_110%,#1b3e68_0%,#0c1526_50%,#05080f_100%)]">
        <div
          aria-hidden
          className="km-glow km-orb bottom-[-25%] left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(closest-side, rgba(109,74,255,0.34), transparent)' }}
        />
        <div className="km-wrap relative py-24 text-center">
          <h2 className="mx-auto mb-[1.125rem] max-w-[13em] km-h2 font-extrabold leading-[1.06] tracking-[-0.04em] text-balance">
            Would rather see it first?
          </h2>
          <p className="mx-auto mb-[2.125rem] max-w-[32em] text-[1.125rem] leading-[1.65] text-[var(--km-muted)]">
            The platform pages walk through the dashboard, Kai and the report builder with real screens.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/#platform" className="km-btn-primary">
              See the platform
            </Link>
            <Link href="/#pricing" className="km-btn-ghost">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
