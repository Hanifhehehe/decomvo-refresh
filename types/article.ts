export type ArticleCategory = "projekte" | "beitrage" | "beiträge";

export type ArticleRoute = "projekte" | "beitrage";

export type Article = {
  _id: string;
  _createdAt: string;
  title: string;
  category: ArticleCategory;
  route: ArticleRoute;
  slug: string;
  image: string | null;
  excerpt: string | null;
  url: string | null;
  content: unknown;
  publishedAt: string | null;
};

