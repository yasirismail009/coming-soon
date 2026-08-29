'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import BrandLogo from '@/components/BrandLogo';

const APP_URL = 'https://app.kampalo.com';

const nav = [
  { href: '/#platform', label: 'Platform' },
  { href: '/#kai', label: 'Kai' },
  { href: '/#reports', label: 'Reports' },
  { href: '/#pricing', label: 'Pricing' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentTheme = theme || 'dark';

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--km-border)] bg-[var(--km-header)] backdrop-blur-[1.125rem] saturate-150">
      <div className="km-wrap flex h-[4.75rem] items-center justify-between gap-8">
        <BrandLogo />

        <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-[var(--km-border)] bg-black/[0.03] dark:bg-white/[0.04] p-[0.3125rem] text-[0.90625rem] font-semibold">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-[1rem] py-[0.5rem] text-[var(--km-nav-idle)] hover:bg-black/[0.05] hover:text-[var(--km-ink)] dark:hover:bg-white/[0.07] dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--km-nav-idle)] hover:text-[var(--km-ink)] hover:bg-black/[0.05] dark:hover:bg-white/[0.07] transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <a
            href={APP_URL}
            className="text-[0.90625rem] font-semibold text-[var(--km-nav-idle)] hover:text-[var(--km-ink)] transition-colors"
          >
            Sign in
          </a>
          <Link href="/contact" className="km-btn-primary km-btn-sm">
            Contact us
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--km-nav-idle)]"
            aria-label="Toggle theme"
          >
            {currentTheme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[var(--km-ink)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-[var(--km-border)]"
          >
            <div className="km-wrap py-[1rem] space-y-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-[1rem] py-[0.625rem] text-[var(--km-muted)] hover:text-[var(--km-ink)] hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={APP_URL}
                className="block rounded-xl px-[1rem] py-[0.625rem] text-[var(--km-muted)]"
              >
                Sign in
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="km-btn-primary km-btn-sm mt-2 w-full"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
