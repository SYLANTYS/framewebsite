import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
