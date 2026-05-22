import type { Metadata } from "next";
import { ArtikelPage } from "@/components/artikel-page";

export const metadata: Metadata = {
  title: "Artikel | DeComVo",
  description:
    "Archiv für Projekte und Beiträge von DeComVo in einer gemeinsamen Übersicht.",
};

export default function ArtikelRoutePage() {
  return <ArtikelPage />;
}
