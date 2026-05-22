import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
