import type { Metadata } from "next";
import { ArtikelPage } from "@/components/artikel-page";
import { getArticle } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Artikel | DeComVo",
  description:
    "Archiv für Projekte und Beiträge von DeComVo in einer gemeinsamen Übersicht.",
};

export default async function ArtikelRoutePage() {
  const articles = await getArticle();
  const projekte = articles.filter((article) => article.route === "projekte");
  const beitrage = articles.filter((article) => article.route === "beitrage");

  return <ArtikelPage beitrage={beitrage} projekte={projekte} />;
}
