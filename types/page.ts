import type { Article } from "@/types/article";

export type ArtikelPageProps = {
  projekte: Article[];
  beitrage: Article[];
};

export type ArticleRoutePageProps = {
  params: Promise<{ slug: string }>;
};

