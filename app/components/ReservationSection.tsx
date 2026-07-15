"use client";

import { Clock3, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Yusei_Magic } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useLanguage } from "../i18n";

const japaneseDisplay = Yusei_Magic({ subsets: ["latin"], weight: "400" });

type ReservationSectionProps = {
  counterImage: string;
};

type SlideDirection = "left" | "right";

function slideStyle(visible: boolean, direction: SlideDirection, delay = 0): CSSProperties {
  const offset = direction === "left" ? "-48px" : "48px";
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : `translateX(${offset})`,
    transition: `opacity 0.8s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms`
  };
}

export function ReservationSection({ counterImage }: ReservationSectionProps) {
  const { text } = useLanguage();
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const targets: Array<[HTMLDivElement | null, (visible: boolean) => void]> = [
      [textRef.current, setTextVisible],
      [imageRef.current, setImageVisible]
    ];

    const observers = targets.map(([node, setVisible]) => {
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

  return (
    <section id="reservation" className="w-full bg-ink text-rice">
      <div className="grid w-full bg-ink lg:min-h-[630px] lg:grid-cols-2 py-6">
        <div
          ref={textRef}
          style={slideStyle(textVisible, "left")}
          className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-16 lg:py-12"
        >
          <p className={`${japaneseDisplay.className} text-3xl tracking-[0.08em] text-ginger`}>
            {text.reservation[0]}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-rice/75">
            {text.reservation[1]}
          </p>
          <div className="mt-8 grid gap-5 text-rice/82 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-ginger" aria-hidden="true" />
              <p>{text.reservation[2]}</p>
            </div>
            <div className="flex gap-3">
              <Clock3 className="mt-1 size-5 shrink-0 text-ginger" aria-hidden="true" />
              <p>{text.reservation[3]}</p>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/reservation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rice px-7 font-bold text-ink transition hover:bg-ginger focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-ink"
            >
              <Phone className="size-4" aria-hidden="true" />
              {text.reservation[4]}
            </a>
          </div>
        </div>

        <div
          ref={imageRef}
          style={slideStyle(imageVisible, "right", 90)}
          className="group relative min-h-[260px] overflow-hidden lg:min-h-full"
        >
          <Image
            src={counterImage}
            alt="Sushi chef preparing nigiri at a restaurant counter"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tuna/35 to-ink/35" />
        </div>
      </div>
    </section>
  );
}
