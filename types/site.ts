export type ProjectVariant = "light" | "dark";

export type ProjectCtaIcon = "arrow" | "open";

export type ProjectCardProps = {
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
};

export type IconProps = {
  className?: string;
};

