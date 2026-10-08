import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "FRAME",
  description:
    "An AI speaking app for practicing on camera, reviewing delivery, and tracking progress over time.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18501674274"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18501674274');
          `}
        </Script>
      </body>
    </html>
  );
}
