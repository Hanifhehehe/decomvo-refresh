import type { Metadata } from "next";
import { Manrope, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-headline",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeComVo - Decolonized Community Voices",
  description: "Decolonized Community Voices landing page in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`light h-full antialiased ${manrope.variable} ${crimsonPro.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-body overflow-x-hidden selection:bg-primary-container selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

