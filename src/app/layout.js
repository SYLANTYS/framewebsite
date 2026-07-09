import "./globals.css";

export const metadata = {
  title: "FRAME",
  description: "A focused workspace for topics, records, feedback, and analytics",
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
