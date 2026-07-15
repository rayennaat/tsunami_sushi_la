"use client";

import { ArrowLeft, Clock3 } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, RefObject } from "react";
import { useLanguage } from "../i18n";
import { LanguagePicker } from "../components/Header";

const aboutImage = "/pic1.png";
const aboutImage2 = "/about22.png";
const branchNameFont = Montserrat({ subsets: ["latin"], weight: "700" });

const branchHours = [
  {
    name: "Tsunami Sushi Jardin d’El Menzah 2",
    schedule: [
      ["Monday – Saturday", "11:30–22:45"],
      ["Sunday", "Closed"]
    ]
  },
  {
    name: "Tsunami Sushi l’Aouina",
    schedule: [["Monday – Sunday", "11:30–23:30"]]
  },
  {
    name: "Tsunami Sushi Lab Menzah 5",
    schedule: [["Monday – Sunday", "11:30–23:00"]]
  }
];

type SlideDirection = "left" | "right";

function slideStyle(visible: boolean, direction: SlideDirection, delay = 0): CSSProperties {
  const offset = direction === "left" ? "-48px" : "48px";
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : `translateX(${offset})`,
    transition: `opacity 0.8s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms`
  };
}

function WrittenParagraph({
  text,
  visible,
  baseDelay = 0,
  className = ""
}: {
  text: string;
  visible: boolean;
  baseDelay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: `opacity 0.45s ease-out ${baseDelay + index * 26}ms, transform 0.45s ease-out ${
              baseDelay + index * 26
            }ms`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}

export default function AboutPage() {
  const { text } = useLanguage();
  const introParagraphs = [text.aboutPage[1], text.aboutPage[2]];
  const introRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  const [introVisible, setIntroVisible] = useState(false);
  const [heroImageVisible, setHeroImageVisible] = useState(false);
  const [secondImageVisible, setSecondImageVisible] = useState(false);
  const [hoursVisible, setHoursVisible] = useState(false);

  useEffect(() => {
    const targets: Array<[RefObject<HTMLDivElement | null>, (visible: boolean) => void]> = [
      [introRef, setIntroVisible],
      [heroImageRef, setHeroImageVisible],
      [secondImageRef, setSecondImageVisible],
      [hoursRef, setHoursVisible]
    ];

    const observers = targets.map(([ref, setVisible]) => {
      const node = ref.current;
      if (!node) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );
      observer.observe(node);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const secondParagraphDelay = introParagraphs[0].split(" ").length * 26 + 200;

  return (
    <main className="min-h-dvh bg-rice text-ink">
      <header className="px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-rice transition hover:bg-tuna focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {text.common[0]}
          </Link>
          <div className="flex items-center gap-2"><LanguagePicker /><a href="/reservation" className="hidden min-h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-bold text-soy transition hover:border-tuna hover:text-tuna sm:inline-flex">{text.common[1]}</a></div>
        </div>
      </header>

      <section className="px-5 pb-20 pt-8 sm:px-8 lg:pb-28 lg:pt-16">
        <div className="mx-auto pt-16 grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div ref={introRef} style={slideStyle(introVisible, "left")}>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tuna">
              {text.aboutPage[0]}
            </p>
            <div className="mt-7 space-y-5 text-lg leading-8 text-soy/78">
              <WrittenParagraph text={introParagraphs[0]} visible={introVisible} baseDelay={150} />
              <WrittenParagraph
                text={introParagraphs[1]}
                visible={introVisible}
                baseDelay={150 + secondParagraphDelay}
              />
            </div>
          </div>

          <div
            ref={heroImageRef}
            style={slideStyle(heroImageVisible, "right", 90)}
            className="overflow-hidden rounded-lg bg-ink shadow-soft"
          >
            <div className="relative min-h-[360px] sm:min-h-[480px]">
              <Image
                src={aboutImage}
                alt="Sushi chef preparing nigiri at a restaurant counter"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center pt-16">
          <div
            ref={secondImageRef}
            style={slideStyle(secondImageVisible, "left")}
            className="overflow-hidden rounded-lg bg-ink shadow-soft"
          >
            <div className="relative min-h-[360px] sm:min-h-[480px]">
              <Image
                src={aboutImage2}
                alt="Sushi chef preparing nigiri at a restaurant counter"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div ref={hoursRef} style={slideStyle(hoursVisible, "right", 90)}>
            <div className="flex items-center gap-3">
                <Clock3 className="size-5" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-tuna">
                  {text.aboutPage[3]}
                </p>
              </div>
            </div>

            <div className="mt-7 divide-y divide-ink/25 border-y border-ink/25">
              {branchHours.map((branch) => (
                <section
                  key={branch.name}
                  className="py-6"
                >
                  <h3 className={`${branchNameFont.className} text-lg font-bold leading-tight text-ink`}>
                    {branch.name}
                  </h3>
                  <dl className="mt-3 divide-y divide-ink/10 text-sm">
                    {branch.schedule.map(([days, time]) => {
                      const translatedDays = days === "Monday – Saturday" ? text.aboutPage[4] : days === "Sunday" ? text.aboutPage[5] : text.aboutPage[6];
                      const translatedTime = time === "Closed" ? text.aboutPage[7] : time;
                      return (
                      <div
                        key={days}
                        className="grid gap-1 py-2.5 sm:grid-cols-[1fr_auto] sm:items-center"
                      >
                        <dt className="font-semibold text-soy/75">{translatedDays}</dt>
                        <dd className={time === "Closed" ? "font-bold text-tuna" : "font-bold text-soy"}>
                          {translatedTime}
                        </dd>
                      </div>
                    )})}
                  </dl>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
