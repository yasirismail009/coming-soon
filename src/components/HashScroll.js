'use client';

import { useEffect } from 'react';

/** Scrolls to window.location.hash after load or hashchange (sticky header offset via CSS). */
export default function HashScroll() {
  useEffect(() => {
    const go = () => {
      const id = window.location.hash.replace(/^#/, '');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const timer = window.setTimeout(go, 50);
    window.addEventListener('hashchange', go);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('hashchange', go);
    };
  }, []);

  return null;
}
