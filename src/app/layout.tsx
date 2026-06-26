import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radio POS | POS Machines, Billing Software & Setup in UAE",
  description:
    "Radio POS provides POS machines, billing software, barcode setup, inventory control, installation, training and support for retail, food and service businesses in UAE. حلول نقاط بيع وبرامج مبيعات للمحلات والمطاعم والأنشطة التجارية في الإمارات.",
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
