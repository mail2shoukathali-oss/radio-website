import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://radio-website-mu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Radio POS | POS Machines, Billing Software & Setup",
    template: "%s | Radio POS",
  },
  description:
    "Radio POS provides POS machines, billing software, barcode setup, inventory control, installation, training and support for retail, food and service businesses across the Middle East.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Radio POS | Complete POS Solutions",
    description:
      "POS machines, billing software, barcode setup, inventory control, cloud reports, installation, training and support for retail, food and service businesses.",
    url: siteUrl,
    siteName: "Radio POS",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Radio POS | Complete POS Solutions",
    description:
      "POS machines, billing software, barcode setup, inventory control, installation, training and support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
