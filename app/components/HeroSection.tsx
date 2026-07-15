"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Yusei_Magic } from "next/font/google";
import { useLanguage } from "../i18n";

const japaneseDisplay = Yusei_Magic({ subsets: ["latin"], weight: "400" });

type HeroSectionProps = {
  heroImage: string;
};

export function HeroSection({ heroImage }: HeroSectionProps) {
  const { text } = useLanguage();
  const titleWords = text.hero[1].split(" ");
  return (
    <section id="top" className="hero-stage relative min-h-dvh overflow-hidden bg-ink text-rice">
      <div className="hero-media absolute inset-0">
        <Image
          src={heroImage}
          alt="Assorted sushi rolls and nigiri arranged on a dark serving plate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/74 to-ink/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(215,68,62,0.22),transparent_31rem),radial-gradient(circle_at_82%_22%,rgba(255,248,236,0.11),transparent_24rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/82 to-transparent" />

      <div className="hero-glint absolute inset-y-0 left-[-35%] w-1/3 bg-gradient-to-r from-transparent via-rice/10 to-transparent" />

      <div
        className={`${japaneseDisplay.className} hero-stamp pointer-events-none absolute right-5 top-28 z-10 hidden rounded-full border border-tuna/70 bg-ink/55 px-6 py-5 text-5xl text-tuna shadow-2xl sm:block lg:right-16 lg:top-32`}
        aria-hidden="true"
      >
        寿司
      </div>

      <div className="hero-line absolute left-5 top-28 z-10 hidden h-px w-40 origin-left bg-rice/40 sm:left-8 sm:block lg:left-16" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl items-center px-5 pb-14 pt-32 sm:px-8">
        <div className="max-w-3xl">
          <p className="hero-kicker mb-5 inline-flex rounded-full border border-rice/20 bg-rice/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-rice/80">
            {text.hero[0]}
          </p>

          <h1
            className={`${japaneseDisplay.className} pb-8 text-6xl leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-8xl`}
          >
            {titleWords.map((word, index) => (
              <span key={`${word}-${index}`} className="hero-word-wrap mr-[0.18em] inline-block overflow-hidden pb-2">
                <span className="hero-word inline-block" style={{ "--word-delay": `${360 + index * 62}ms` } as React.CSSProperties}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-copy max-w-xl text-lg leading-8 text-rice/75 sm:text-xl">
            {text.hero[2]}
          </p>

          <div className="hero-actions mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/reservation"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-tuna px-7 text-base font-bold text-white shadow-[0_18px_45px_rgba(215,68,62,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#bd332e] focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-ink"
            >
              {text.hero[3]}
              <ArrowRight className="size-5 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-rice/30 bg-rice/10 px-7 text-base font-bold text-rice transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-rice hover:text-ink focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-ink"
            >
              {text.hero[4]}
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-rice/50 sm:flex">
        <span>{text.hero[5]}</span>
        <span className="relative h-12 w-px overflow-hidden bg-rice/20">
          <span className="hero-scroll-line absolute left-0 top-0 h-6 w-px bg-rice" />
        </span>
      </div>
    </section>
  );
}
