// import { Questrial } from 'next/font/google'

import "@fonts/css/switzer.css";
import "./globals.css";

import "@fonts/font-awesome.min.css";

import "@css/plugins/bootstrap-grid.css";

import "@css/plugins/swiper.min.css";

import "@css/plugins/magnific-popup.css";

import Script from "next/script";
import Preloader from "@/layouts/Preloader";
import "@css/style.css";

// const secondary_font = Questrial({
//   weight: ['400'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-secondary',
//   display: 'swap',
//   adjustFontFallback: false,
// })
const secondary_font = { variable: 'font-sans' } // Fallback to avoid build error

export const metadata = {
  title: "Growsin - Invest with Clarity.",
  description: "SEBI-registered investment advisory & research firm delivering personalised financial planning and portfolio solutions backed by data and independent research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yeoglfar42");
            `,
          }}
        />
      </head>
      <body>
        {/* <Preloader /> */}
        {children}
      </body>
    </html>
  );
}
