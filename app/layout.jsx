import { site } from '@/lib/site';
import { bodyClasses } from '@/lib/bodyClasses';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import LegacyScripts from '@/components/LegacyScripts';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  robots: { index: true, follow: true },
  verification: {
    google: 'nGqxGaQDBleLEUBNFdRzhcHrX7fBHyhHI7Tut5TaHEc',
    other: { 'trustpilot-one-time-domain-verification-id': 'd7be7aa2-67dc-4077-9d40-ad265753934d' },
  },
  icons: {
    icon: [
      { url: '/assets/img/fav/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/img/fav/favicon.ico' },
    ],
    apple: '/assets/img/fav/apple-touch-icon.png',
  },
};

export const viewport = { width: 'device-width', initialScale: 1 };

// Same <body class="..."> per page as the old header.php, set before the first paint.
const bodyClassScript = `(function(m){var p=location.pathname.replace(/\\.php$/,'').replace(/\\/+$/,'')||'/';document.body.className=m[p]||'home';})(${JSON.stringify(bodyClasses)});`;

const fonts = [
  ['/assets/css/fonts/TK3iWkUHHAIjg752GT8G.woff2', 'font/woff2'],
  ['/assets/css/fonts/pxiEyp8kv8JHgFVrJJfecg.woff2', 'font/woff2'],
  ['/assets/css/fonts/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2', 'font/woff2'],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {fonts.map(([href, type]) => (
          <link key={href} rel="preload" as="font" type={type} href={href} crossOrigin="anonymous" />
        ))}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/css/intlTelInput.min.css" precedence="default" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" precedence="default" />
        <link rel="stylesheet" href="/assets/css/vendorf730.css?20-04-25_12:13:03" precedence="default" />
        <link rel="stylesheet" href="/assets/css/stylef730.css?20-04-25_12:13:03" precedence="default" />
        <link rel="stylesheet" href="/assets/css/theme.css?v=1" precedence="default" />
      </head>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: bodyClassScript }} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <QuoteModal />
        <LegacyScripts />
      </body>
    </html>
  );
}
