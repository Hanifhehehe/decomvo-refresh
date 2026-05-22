import { createClient } from "@sanity/client";

type ArticleCategory = "projekte" | "beitrage" | "beiträge";
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

const routeByCategory: Record<ArticleCategory, ArticleRoute> = {
  projekte: "projekte",
  beitrage: "beitrage",
  beiträge: "beitrage",
};

const EXCERPT_LENGTH = 300;

function buildExcerpt(text: string | null | undefined): string | null {
  const normalized = text?.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return null;
  }

  return normalized.length > EXCERPT_LENGTH
    ? `${normalized.slice(0, EXCERPT_LENGTH).trimEnd()}…`
    : normalized;
}

export function articleSlug(article: Pick<Article, "slug" | "title">): string {
  if (article.slug?.trim()) return article.slug;

  return article.title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function articleHref(article: Pick<Article, "route" | "slug" | "title">): string {
  return `/${article.route}/${articleSlug(article)}`;
}

export async function getArticle(): Promise<Article[]> {
  const client = createClient({
    projectId: "3hf8g5le",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  const articles = await client.fetch(
    `*[_type == "article"] | order(publishedAt desc, _createdAt desc){
      _id,
      _createdAt,
      title,
      category,
      "slug": slug.current,
      "image": coverImage.asset->url,
      "excerpt": pt::text(content),
      url,
      content,
      publishedAt
    }`
  );

  return articles
    .filter(
      (
        article: Omit<Article, "route"> & {
          category?: string;
        }
      ): article is Omit<Article, "route"> =>
        article.category === "projekte" ||
        article.category === "beitrage" ||
        article.category === "beiträge"
    )
    .map((article: Omit<Article, "route">) => ({
      ...article,
      excerpt: buildExcerpt(article.excerpt),
      route: routeByCategory[article.category],
    }));
}

export async function getArticleByRouteAndSlug(
  route: ArticleRoute,
  slug: string
): Promise<Article | null> {
  const articles = await getArticle();
  const article = articles.find(
    (item) => item.route === route && articleSlug(item) === slug
  );

  return article ?? null;
}
