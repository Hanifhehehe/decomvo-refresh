import Image from "next/image";
import { ArrowRightIcon, OpenInNewIcon } from "./site-icons";
import { PROJECTS } from "./site-data";
import type { ProjectCardProps } from "@/types/site";

function ProjectCard({
  index,
  category,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaIcon,
  variant,
  reverse,
  image,
  stampImage,
}: ProjectCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`archive-entry reveal-section reveal-hidden flex flex-col border-b border-charcoal md:col-span-12 md:flex-row group ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      <div
        className={`relative overflow-hidden border-charcoal ${reverse ? "md:w-[65%] md:border-l" : "md:w-[45%] md:border-r"
          } ${reverse ? "h-[600px]" : "h-[500px]"} ${isDark ? "bg-charcoal" : "bg-archival"}`}
      >
        <Image
          alt="Projekt Image"
          className="parallax-target grayscale transition-all duration-700 group-hover:grayscale-0"
          fill
          sizes="(max-width: 768px) 100vw, 65vw"
          src={image}
        />
        {/* High performance color overlay (removed mix-blend-overlay to reduce painting complexity) */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div
        className={`reveal-section reveal-hidden reveal-delay-1 flex flex-col justify-center p-8 md:p-24 ${reverse ? "md:w-[35%]" : "md:w-[55%]"
          } ${isDark ? "bg-primary text-white" : "bg-white"}`}
      >
        <div className="mb-12 flex items-center gap-6">
          <span
            className={`font-headline text-6xl font-black tracking-tighter transition-colors duration-500 ${isDark ? "text-white/20 group-hover:text-white/40" : "text-primary/10 group-hover:text-primary/30"
              }`}
          >
            {index}
          </span>
          {category ? (
            <div>
              <p
                className={`font-headline text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-white/70" : "text-archival"
                  }`}
              >
                {category}
              </p>
              <div className="mt-1 h-[2px] w-24 bg-primary transition-all duration-500 group-hover:w-32" />
            </div>
          ) : (
            <div className="h-[2px] w-24 bg-primary transition-all duration-500 group-hover:w-32" />
          )}
        </div>

        <h3
          className={`mb-8 font-headline text-4xl font-extrabold uppercase leading-tight tracking-tighter transition-colors duration-500 md:text-7xl ${isDark ? "text-white" : "group-hover:text-primary"
            }`}
        >
          {title.map((line, idx) => (
            <span key={`${line}-${idx}`}>
              {line}
              {idx < title.length - 1 ? <br /> : null}
            </span>
          ))}
        </h3>

        <p
          className={`mb-12 max-w-xl font-body leading-relaxed ${isDark ? "text-white/80 text-xl" : "text-secondary text-2xl"
            }`}
        >
          {description}
        </p>

        <a
          className={`btn-hover-effect inline-flex w-fit items-center gap-4 border-4 font-headline font-black uppercase transition-all ${isDark
              ? "btn-hover-effect-inverse border-white px-6 py-4 text-xs tracking-widest"
              : "border-charcoal px-10 py-5 text-sm tracking-[0.3em]"
            }`}
          href={ctaHref}
        >
          {ctaLabel}
          <span className="arrow-move">
            {ctaIcon === "arrow" ? (
              <ArrowRightIcon className="h-4 w-4" />
            ) : (
              <OpenInNewIcon className="h-4 w-4" />
            )}
          </span>
        </a>

        {stampImage ? (
          <div className="mt-auto pt-12">
            <div
              className="h-32 w-24 border-2 border-white/30 p-1 opacity-50 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
              data-parallax="true"
              data-parallax-speed="0.05"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  alt="Projekt Image"
                  className="object-cover"
                  fill
                  sizes="96px"
                  src={stampImage}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative border-b border-charcoal">
      <div className="top-[89px] z-10 flex items-center justify-between border-b border-charcoal bg-primary p-8 text-white transition-all duration-300">
        <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">
          Index 01: Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.index}
            category={project.category}
            ctaHref={project.ctaHref}
            ctaIcon={project.ctaIcon}
            ctaLabel={project.ctaLabel}
            description={project.description}
            image={project.image}
            index={project.index}
            reverse={project.reverse}
            stampImage={project.stampImage}
            title={project.title}
            variant={project.variant}
          />
        ))}
      </div>
    </section>
  );
}
