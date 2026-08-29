import Link from 'next/link';

export default function BrandLogo({ href = '/', className = '', markSize = 26 }) {
  const rem = `${markSize / 16}rem`;
  const inner = (
    <span className={`inline-flex items-center gap-[0.6875rem] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/mark/kampalo-mark-navy-purple-dot.svg"
        alt=""
        width={markSize}
        height={markSize}
        style={{ width: rem, height: rem }}
        className="dark:hidden shrink-0"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/mark/kampalo-mark-white.svg"
        alt=""
        width={markSize}
        height={markSize}
        style={{ width: rem, height: rem }}
        className="hidden dark:block shrink-0"
      />
      <span className="text-[1.1875rem] font-extrabold tracking-[-0.02em] text-[var(--km-ink)]">
        Kampalo
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex items-center hover:opacity-90 transition-opacity">
      {inner}
    </Link>
  );
}
