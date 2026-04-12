'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import LaptopFrame from '@/components/LaptopFrame';

const SCREENSHOTS = {
  disconnect: {
    light: '/assets/disconnect_integrations.png',
    dark: '/assets/disconnect_integrations_dark.png',
    alt: 'KAMPALO Integrations page showing Disconnect on an integration card',
  },
  accountDeletion: {
    light: '/assets/account_deletion.png',
    dark: '/assets/account_deletion_dark.png',
    alt: 'KAMPALO Settings Security page showing Danger Zone and Delete account',
  },
};

/**
 * @param {{ variant: 'disconnect' | 'accountDeletion', caption: string }} props
 */
export default function DataDeletionScreenshot({ variant, caption }) {
  const { theme } = useTheme();
  const cfg = SCREENSHOTS[variant];
  const src = theme === 'dark' ? cfg.dark : cfg.light;

  return (
    <figure className="not-prose my-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#174A6E] dark:text-blue-300 mb-3">
        Where to find it in the app
      </p>
      <LaptopFrame className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        <Image
          key={src}
          src={src}
          alt={cfg.alt}
          fill
          className="object-contain object-top"
          sizes="(max-width: 768px) 100vw, 576px"
          priority={variant === 'disconnect'}
        />
      </LaptopFrame>
      <figcaption className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{caption}</figcaption>
    </figure>
  );
}
