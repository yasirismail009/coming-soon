'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import { sendEmailJs } from '@/utils/emailjsClient';

const accent = '#174A6E';

const services = [
  {
    label: 'Product demo',
    description: 'See KAMPALO live or start a trial',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
        <circle cx="16" cy="16" r="16" fill={accent} />
        <path
          d="M16 8v8l6 3"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Sales & enterprise',
    description: 'Pricing, plans, and custom rollout',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
        <circle cx="16" cy="16" r="16" className="fill-slate-200 dark:fill-slate-600" />
        <path
          d="M10 20h12M16 12v8"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Support & integrations',
    description: 'Technical help and platform connections',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
        <circle cx="16" cy="16" r="16" className="fill-slate-200 dark:fill-slate-600" />
        <rect x="12" y="12" width="8" height="8" rx="2" fill={accent} />
      </svg>
    ),
  },
];

const MARKETING_QUOTES = [
  {
    text: 'One dashboard finally showed us which channel actually drives revenue—not just clicks.',
    attribution: 'Growth lead',
    context: 'Multi-channel retail',
  },
  {
    text: 'We stopped living in spreadsheets. Reporting went from hours to minutes every Monday.',
    attribution: 'Marketing ops',
    context: 'B2B SaaS',
  },
  {
    text: 'Unified analytics means our agency and in-house team speak the same language on ROI.',
    attribution: 'Performance marketing',
    context: 'Agency partner',
  },
  {
    text: 'When Google and Meta live in one place, budget decisions get a lot less noisy.',
    attribution: 'CMO',
    context: 'E-commerce',
  },
];

const OFFICE_HOURS = 'Monday – Friday, 9:00 am – 6:00 pm (local time)';
const CONTACT_BLURB =
  'Questions about unified marketing analytics, integrations, or enterprise plans? Tell us what you need—we will route your message to the right team.';

const QUOTE_INTERVAL_MS = 6500;

export default function ContactPageClient() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const emailJsReady = Boolean(serviceId && templateId && publicKey);

  useEffect(() => {
    const t = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % MARKETING_QUOTES.length);
    }, QUOTE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailJsReady) {
      setSubmitStatus({
        type: 'error',
        message:
          'Contact form is not configured yet. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateParams = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone || '—',
        message: form.message,
        service_type: services[selectedService].label,
      };

      await sendEmailJs({
        serviceId,
        templateId,
        publicKey,
        templateParams,
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon.',
      });
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setSelectedService(0);
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong sending your message. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuote = MARKETING_QUOTES[quoteIndex];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Contact form */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 px-6 md:px-10 py-10 md:py-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white leading-tight">
              Let&apos;s work together
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              {CONTACT_BLURB}
            </p>

            <div className="mb-6 md:mb-8">
              <div className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">
                What can we help you with?
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {services.map((service, idx) => {
                  const active = selectedService === idx;
                  return (
                    <button
                      key={service.label}
                      type="button"
                      className={`flex flex-row sm:flex-col items-center text-left sm:text-center border rounded-xl px-4 py-3 w-full sm:w-[9.5rem] transition-all duration-150 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800 ${
                        active
                          ? 'border-[#174A6E] bg-[#174A6E]/10 dark:bg-[#174A6E]/20 ring-2 ring-[#174A6E]/25 text-[#174A6E] dark:text-blue-200'
                          : 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-500'
                      }`}
                      onClick={() => setSelectedService(idx)}
                      aria-pressed={active}
                    >
                      <span className="mr-3 sm:mr-0 sm:mb-2 flex shrink-0 items-center justify-center">
                        {service.icon}
                      </span>
                      <span className="sm:mt-0">
                        <span className="block font-semibold leading-snug">{service.label}</span>
                        <span className="mt-0.5 block text-xs font-normal opacity-80 sm:hidden">
                          {service.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="hidden sm:block mt-2 text-xs text-slate-500 dark:text-slate-400">
                {services[selectedService].description}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} autoComplete="on">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="flex-1 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-[#174A6E] focus:ring-1 focus:ring-[#174A6E] outline-none placeholder:text-slate-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="flex-1 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-[#174A6E] focus:ring-1 focus:ring-[#174A6E] outline-none placeholder:text-slate-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Work email"
                className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-[#174A6E] focus:ring-1 focus:ring-[#174A6E] outline-none placeholder:text-slate-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-[#174A6E] focus:ring-1 focus:ring-[#174A6E] outline-none placeholder:text-slate-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-[#174A6E] focus:ring-1 focus:ring-[#174A6E] outline-none min-h-[100px] placeholder:text-slate-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white resize-y"
                value={form.message}
                onChange={handleChange}
                required
              />

              {!emailJsReady && (
                <p className="text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg px-3 py-2">
                  EmailJS env vars are missing. Add them to <code className="font-mono">.env.local</code> to enable
                  sending.
                </p>
              )}

              {submitStatus.message ? (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 dark:bg-green-950/40 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#174A6E] hover:bg-[#0f3451] text-white font-bold rounded-xl py-3 mt-1 transition-colors text-base shadow-md tracking-wide ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Product story: quotes + screenshots (parallel column) */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 md:p-8 overflow-hidden">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#174A6E] dark:text-blue-300 mb-4">
                Why teams choose unified analytics
              </p>
              <div className="relative min-h-[140px] md:min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={quoteIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <blockquote className="border-l-4 border-[#174A6E] pl-4 md:pl-5">
                      <p className="text-lg md:text-xl text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                        &ldquo;{currentQuote.text}&rdquo;
                      </p>
                      <footer className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {currentQuote.attribution}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500"> · {currentQuote.context}</span>
                      </footer>
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex gap-1.5 mt-6 justify-center" aria-hidden>
                {MARKETING_QUOTES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === quoteIndex ? 'w-6 bg-[#174A6E]' : 'w-1.5 bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

         

            <div className="rounded-2xl bg-gradient-to-br from-[#174A6E] to-[#0B3049] px-6 py-5 text-white shadow-lg">
              <div className="font-semibold text-sm mb-1">Office hours</div>
              <div className="text-xs text-white/90 leading-relaxed mb-4">{OFFICE_HOURS}</div>
              <div className="font-semibold text-sm mb-1">Help center</div>
              <div className="text-xs text-white/90 leading-relaxed">
                Prefer self-serve?{' '}
                <a href="/help" className="underline underline-offset-2 font-medium hover:text-white">
                  Visit Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
