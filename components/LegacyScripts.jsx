'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/*
 * The site's original jQuery / GSAP / slick scripts.
 * They are loaded one after another, in the same order as the old footer.php,
 * and only after React has finished, so they never fight with React over the page.
 * Links between pages are normal <a> links, so every page loads these fresh.
 */
const COMMON = [
  '/assets/js/jquery-3.7.0.min.js',
  '/assets/js/plugin.js',
  '/assets/js/lozad.min.js',
  '/assets/js/gsap.min.js',
  '/assets/js/ScrollSmoother.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js',
  '/assets/js/ScrollToPlugin.min.js',
  '/assets/js/ScrollTrigger.min.js',
  '/assets/js/global489a.js',
  '/assets/js/custom489a.js',
];
const HOME_ONLY = ['/assets/js/home489a.js'];
const AFTER = [
  '/assets/js/case-studiesacb1.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js',
  '/assets/js/init.js',
];

function load(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = resolve; // one failed script must not stop the rest
    document.body.appendChild(s);
  });
}

export default function LegacyScripts() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.__tebScripts) return;
    window.__tebScripts = true;
    const list = [...COMMON, ...(pathname === '/' ? HOME_ONLY : []), ...AFTER];
    list.reduce((p, src) => p.then(() => load(src)), Promise.resolve());
  }, [pathname]);

  return null;
}
