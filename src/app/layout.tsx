import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIVOK | Professional Uniform Solutions",
  description:
    "Discover professional and customized uniform solutions by DIVOK, Perinthalmanna, Kerala.",
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
