import type { ProjectCtaIcon, ProjectVariant } from "@/types/site";

export const NAV_ITEMS = [
  { label: "[ 01 ] Startseite", href: "/" },
  { label: "[ 02 ] Über Uns", href: "/ueber-uns" },
  { label: "[ 03 ] Artikel", href: "/artikel" },
  { label: "[ 04 ] Kontakt", href: "/kontakt" },
] as const;

export const PROJECTS = [
  {
    index: "#01",
    category: "Social-Economic Analysis",
    title: ["Profit oder Planet!?", "Zwischen Wunsch und Widerspruch"],
    description:
      "Interaktiver Workshop in dem ökologische, soziale und menschenrechtliche Implikationen des Kapitalismus untersucht werden.",
    ctaLabel: "Dossier Öffnen",
    ctaHref: "/projekte/profit-oder-planet",
    ctaIcon: "arrow",
    variant: "light" as ProjectVariant,
    reverse: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvBVjfINkHFDsBi7NgF3wFYWYu0Ixs432jvVVvniMHxE9b-QciH0Rr-tGSYRLYeVBUM1MMlz3beNI8cCfXQ3UK2QVUxXN-4ul_RQvLlIaCeOlIaedgfEBl6zgYpJ11G3UH8I_-mLVklg33vTvlpJ8n2LhW95mswCil5EoTq3QDLShGVQF5lPHEEjlGtGJLZhMlIjUMjZaM5FXjTnizL4QIyGAW46WTWTIRtX3HfxUhvbOTGB4AZus5sWARyGMic-HaGe1LwK_09l4",
    stampImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvBVjfINkHFDsBi7NgF3wFYWYu0Ixs432jvVVvniMHxE9b-QciH0Rr-tGSYRLYeVBUM1MMlz3beNI8cCfXQ3UK2QVUxXN-4ul_RQvLlIaCeOlIaedgfEBl6zgYpJ11G3UH8I_-mLVklg33vTvlpJ8n2LhW95mswCil5EoTq3QDLShGVQF5lPHEEjlGtGJLZhMlIjUMjZaM5FXjTnizL4QIyGAW46WTWTIRtX3HfxUhvbOTGB4AZus5sWARyGMic-HaGe1LwK_09l4",
  },
  {
    index: "#02",
    category: "",
    title: ["Postkolonialer Lesekreis"],
    description:
      "Monatlich stattfindender Lesekreis in dem postkoloniale Themen und Bücher diskutiert werden.",
    ctaLabel: "Öffnen",
    ctaHref: "/projekte/postkolonialer-lesekreis",
    ctaIcon: "open",
    variant: "dark" as ProjectVariant,
    reverse: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKuJlekdQAygQ_NTir0dt7oL0jhw4-NBWE5TENosDWskXY_bWS82_VO1TNQQXnDF0_HUypLPpWCbQz-M9JpKaMAkT6MkFVlh70NfGGm6GezvgYZYABk8Q8Dx9u4Lf2osxzWMBT9tmhTM1S1BXipKD496-KrEMRzn3HuV3CSBDu0qVhcbjGgBcbOE1dTzch6Qi-rENzZgNh92-Kq4dOUHpHPOT0mnAHil6SN3-z-CQJfobCfvbnByfnRiKUzOhhMzp0fVsN9VRBes0",
    stampImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKuJlekdQAygQ_NTir0dt7oL0jhw4-NBWE5TENosDWskXY_bWS82_VO1TNQQXnDF0_HUypLPpWCbQz-M9JpKaMAkT6MkFVlh70NfGGm6GezvgYZYABk8Q8Dx9u4Lf2osxzWMBT9tmhTM1S1BXipKD496-KrEMRzn3HuV3CSBDu0qVhcbjGgBcbOE1dTzch6Qi-rENzZgNh92-Kq4dOUHpHPOT0mnAHil6SN3-z-CQJfobCfvbnByfnRiKUzOhhMzp0fVsN9VRBes0",
  },
] satisfies Array<{
  index: string;
  category: string;
  title: string[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaIcon: ProjectCtaIcon;
  variant: ProjectVariant;
  reverse: boolean;
  image: string;
  stampImage?: string;
}>;

export const LEGAL_ITEMS = [
  { label: "App. A: Kooperation", href: "/kooperation" },
  { label: "App. B: Datenschutz", href: "/datenschutz" },
  { label: "App. C: Impressum", href: "/impressum" },
  { label: "App. D: Kontakt", href: "/kontakt" },
] as const;
