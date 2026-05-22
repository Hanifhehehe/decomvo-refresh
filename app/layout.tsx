import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "DeComVo - Decolonized Community Voices (YOLO variant)",
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
      className="light h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-body overflow-x-hidden selection:bg-primary-container selection:text-white">
        <SiteHeader />
        <main className="w-full overflow-x-hidden bg-white">{children}</main>
        <SiteFooter />
        <ScrollEffects />
      </body>
    </html>
  );
}
