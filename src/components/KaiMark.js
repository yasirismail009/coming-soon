export default function KaiMark({ size = 56, className = '' }) {
  const rem = `${size / 16}rem`;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/kai/kai-light-bg.svg"
        alt=""
        width={size}
        height={size}
        style={{ width: rem, height: rem }}
        className={`dark:hidden ${className}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/kai/kai-dark-bg.svg"
        alt=""
        width={size}
        height={size}
        style={{ width: rem, height: rem }}
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}
