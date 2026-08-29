/**
 * Real <a> for every marketing URL.
 * next/link client nav has been dropping hashes and swallowing homepage clicks
 * (URL stays on /, overlay or router no-op). Full navigation is the reliable path.
 */
export default function AppLink({ href, className, children, ...rest }) {
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
