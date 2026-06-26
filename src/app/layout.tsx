import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radio POS | POS Machines, Billing Software & Setup",
  description:
    "Radio POS provides POS machines, billing software, barcode setup, inventory control, installation, training and support for retail, food and service businesses across the Middle East. حلول نقاط بيع وبرامج مبيعات للمحلات والمطاعم والأنشطة التجارية.",
  icons: {
    icon: "/icon.svg",
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
