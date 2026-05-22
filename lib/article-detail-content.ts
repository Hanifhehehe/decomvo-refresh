import type { RelatedArticle } from "@/components/article-detail-page";

export type ArticleDetailContent = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  heroImage: string;
  heroImageAlt: string;
  paragraphs: string[];
  quoteLabel: string;
  quoteText: string;
  quoteFooter: string;
  sectionHeading: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  secondaryCaption: string;
  relatedArticles: RelatedArticle[];
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uh4HZq2EDdK5yVlK19jRdxpGsDorEM6mqY4bI7uyu8Uq5JMWwiEeTCGBxZ5TnI5Jtntoy2yCTzrW509s2-eepeakoNBMMZe0N5HQaBcbWZwQwXClbVaMRyPyCsmrS84b8-uP5JnyFXettFFdnDrIsmDrGpxWthm356EN4nQ-0yIAB_SoBy92jrKhX-kgrg_ADGION0wBpoRvIXOg2vV9xFMNJ-XL3X_k8mxBkbF3Xy4MO1qWyJ-0IMqnfw";

const SECONDARY_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uhIfnIt67D4ZDq4JU7BJn-s-9AmeV24EpwaG81Sp_DHqWERozqLvLRAGLHNhXGz4EK_2uBbMMWEFsKdAX3sfw8Bp5Qu2lQaZRhHwqKWpZubYbYYdHBoCReWMsmEvzfWHyc-Ih-A9JTYEsN410O61qwn-KirSPf0GowdWKVfQE37if7YxtVGSAeXuLSp-nVnL6BHNlBHC5IuDOWf5J4vC0M8s8B5WUE7CNPC_QpNnn9-3hCK81xx7_rY4b0";

export const PROJECT_ARTICLES: Record<string, ArticleDetailContent> = {
  "architecture-of-decolonization": {
    slug: "architecture-of-decolonization",
    title: "The Architecture of Decolonization",
    excerpt:
      "Re-examining the structural foundations of public spaces and the historical narratives they silently uphold in modern urban environments.",
    author: "Dr. Elena Rostova",
    date: "24 Oct 2024",
    heroImage: HERO_IMAGE,
    heroImageAlt: "Architectural representation",
    paragraphs: [
      "The physical structures that define our urban centers are rarely neutral. They are the calcified remains of historical intent, shaping not just how we move through space, but who feels they belong within it. The architecture of decolonization demands a critical unpacking of these built environments.",
      "It begins with acknowledging that spatial design has historically been utilized as a tool for segregation, control, and the projection of imperial power. Monumental public squares, imposing administrative buildings, and even the seemingly innocuous layout of residential grids often carry the DNA of a specific worldview—one that prioritized order and assimilation over organic community development.",
      "Modern interventions seek to disrupt this syntax. This involves introducing elements of friction and complexity into spaces designed for streamlined control. It means creating architectural interventions that invite multiple uses, encourage spontaneous gathering, and physically manifest the pluralistic nature of contemporary society.",
      "Furthermore, the materials themselves tell a story. The reliance on imported, highly processed materials often reflects an extractive relationship with other regions. A decolonized approach emphasizes local materiality, recognizing the environmental and cultural impact of the supply chain.",
      "Ultimately, the goal is not a new, rigid dogma of design, but a continuous process of questioning. It is an editorial act performed on the built environment, erasing the oppressive lines and writing in a more inclusive, adaptable narrative.",
    ],
    quoteLabel: "Key Statement",
    quoteText:
      "To decolonize architecture is not merely to tear down statues; it is to fundamentally rewire the spatial syntax of power.",
    quoteFooter: "— Dr. Elena Rostova, 2024",
    sectionHeading: "The Syntax of Power in Public Spaces",
    secondaryImage: SECONDARY_IMAGE,
    secondaryImageAlt: "Minimalist surface detail",
    secondaryCaption:
      "Proposed intervention material textures, focusing on localized sourcing.",
    relatedArticles: [
      {
        category: "Urban Design",
        title: "Restructuring the Commons: Beyond Neo-Liberal Grids",
        description:
          "Exploring how new-age community layouts can bypass traditional capital-driven spatial logics.",
        href: "/projekte/architecture-of-decolonization",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD3P4JsZvYiSSP5D9sRfAtQ_3vPFviPsKKDZvxbZNAK930hevE-S9gNhriDgrYwqJZTGFCYrLcpWwYSEDw_l1zT27-t-MbhyIXEyaM0iFj-TCdJxgOBj5liJF93Ymr4YrZ8ZDbeaEqJ5wAKFLTrpcFZut6cI9OzX8pkpoHF4gXjKdPO0ZFlWcJGvaAkBD5-9Nzp8YBuEeO5DINeQhU-g6IK3C0_xDDYsLw-6pYhQKt2zJinSD7RtzWaPyY07JdZjQ9OMK0WHPsrxfY",
        imageAlt: "Related Article 1",
        ctaLabel: "Read Analysis",
      },
      {
        category: "Spatial Theory",
        title: "Localized Materiality: The Texture of Resistance",
        description:
          "How utilizing local resources creates a sustainable and culturally grounded architectural identity.",
        href: "/beitrage/community-archives-and-memory",
        image: SECONDARY_IMAGE,
        imageAlt: "Related Article 2",
        ctaLabel: "Read Analysis",
      },
    ],
  },
};

export const BEITRAGE_ARTICLES: Record<string, ArticleDetailContent> = {
  "community-archives-and-memory": {
    slug: "community-archives-and-memory",
    title: "Community Archives and Memory",
    excerpt:
      "A field note on how collective memory becomes infrastructure when communities document themselves on their own terms.",
    author: "Mina Albrecht",
    date: "12 Nov 2024",
    heroImage: HERO_IMAGE,
    heroImageAlt: "Archival representation",
    paragraphs: [
      "Community archives do more than preserve records. They shift who gets to author history in the first place, turning everyday documentation into a civic practice rather than an institutional privilege.",
      "The most powerful collections often begin informally: a folder of flyers, recorded interviews, photographs from a demonstration, or handwritten notes from a neighborhood meeting. Together, these fragments form an alternative public memory.",
      "The archive as commons asks us to think beyond ownership. It emphasizes access, stewardship, and the obligation to maintain context around the material so it can remain meaningful to the people it describes.",
      "This is not a neutral exercise. Decisions about cataloging, naming, and visibility are always political, because they shape what can be found, cited, and remembered later.",
      "When communities hold their own records, they also create a living infrastructure for future organizing. The archive then becomes both a repository and a rehearsal space for collective action.",
    ],
    quoteLabel: "Field Note",
    quoteText:
      "An archive becomes radical when it is treated not as a vault, but as a shared civic language.",
    quoteFooter: "— Mina Albrecht, 2024",
    sectionHeading: "Reading the Archive as Commons",
    secondaryImage: SECONDARY_IMAGE,
    secondaryImageAlt: "Archival detail",
    secondaryCaption:
      "An archival fragment from a neighborhood scan, showing the value of local preservation practices.",
    relatedArticles: [
      {
        category: "Memory Work",
        title: "Collective Catalogues and Shared Stewardship",
        description:
          "How community-maintained records create durable public memory beyond institutional limits.",
        href: "/beitrage/community-archives-and-memory",
        image: SECONDARY_IMAGE,
        imageAlt: "Related Article 1",
        ctaLabel: "Read Analysis",
      },
      {
        category: "Civic Media",
        title: "Editing the Public Record",
        description:
          "A close look at how documentation practices shape who is seen and who is missing from history.",
        href: "/projekte/architecture-of-decolonization",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD3P4JsZvYiSSP5D9sRfAtQ_3vPFviPsKKDZvxbZNAK930hevE-S9gNhriDgrYwqJZTGFCYrLcpWwYSEDw_l1zT27-t-MbhyIXEyaM0iFj-TCdJxgOBj5liJF93Ymr4YrZ8ZDbeaEqJ5wAKFLTrpcFZut6cI9OzX8pkpoHF4gXjKdPO0ZFlWcJGvaAkBD5-9Nzp8YBuEeO5DINeQhU-g6IK3C0_xDDYsLw-6pYhQKt2zJinSD7RtzWaPyY07JdZjQ9OMK0WHPsrxfY",
        imageAlt: "Related Article 2",
        ctaLabel: "Read Analysis",
      },
    ],
  },
};

export function getProjectArticle(slug: string) {
  return PROJECT_ARTICLES[slug] ?? null;
}

export function getBeitrageArticle(slug: string) {
  return BEITRAGE_ARTICLES[slug] ?? null;
}

export function getProjectArticleSlugs() {
  return Object.keys(PROJECT_ARTICLES);
}

export function getBeitrageArticleSlugs() {
  return Object.keys(BEITRAGE_ARTICLES);
}
