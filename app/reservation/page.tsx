"use client";

import { ArrowLeft, ExternalLink, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Montserrat, Yusei_Magic } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const japaneseDisplay = Yusei_Magic({ subsets: ["latin"], weight: "400" });
const locationNameFont = Montserrat({ subsets: ["latin"], weight: "700" });

const locations = [
  {
    name: "Tsunami Sushi Jardin d'El Menzah 2",
    phone: "46666099",
    href: "tel:+21646666099",
    map: "https://www.google.com/maps/place/Tsunami+Sushi+jardin+d%E2%80%99El+Menzah2/@36.8612703,10.1301701,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd336befcaa3ab:0x72d95bf56df7bd3a!8m2!3d36.8612703!4d10.1301701!16s%2Fg%2F11z7ptwttj!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D",
    embed: "https://www.google.com/maps?q=36.8612703,10.1301701&z=17&output=embed"
  },
  {
    name: "Tsunami Sushi l'Aouina",
    phone: "26990555",
    href: "tel:+21626990555",
    map: "https://www.google.com/maps/place/Tsunami+Sushi+l%E2%80%99Aouina,+R%C3%A9sidence+le+Concorde,+Magasin+n%C2%B03,+2045/data=!4m2!3m1!1s0x12e2cb6be195fdd9:0xfd184bc7b99d86db?entry=gps&coh=192189&g_ep=CAESCjExLjE0OC4xMDUYACDXggMqfiw5NDIwNzQ4Myw5NDI0MjYwNCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICVE4%3D",
    embed: "https://www.google.com/maps?q=Tsunami%20Sushi%20l'Aouina%20Residence%20le%20Concorde%20Magasin%203%202045&output=embed"
  },
  {
    name: "Tsunami Sushi Lab Menzah 5",
    phone: "23023333",
    href: "tel:+21623023333",
    map: "https://www.google.com/maps/place/Tsunami+Sushi+Lab/@36.8500815,10.1762091,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd35295996bac3:0xe11ce40fc71097a6!8m2!3d36.8500815!4d10.1762091!16s%2Fg%2F11mbnbwcbp?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D",
    embed: "https://www.google.com/maps?q=36.8500815,10.1762091&z=17&output=embed"
  }
];

function fadeUpStyle(visible: boolean, delay = 0): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms`
  };
}

function zoomStyle(visible: boolean, delay = 0): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0.92)",
    transition: `opacity 0.7s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,0.84,0.44,1) ${delay}ms`
  };
}

export default function ReservationPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() => locations.map(() => false));

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = cardRefs.current.indexOf(entry.target as HTMLElement);
          if (index === -1) return;

          setVisibleCards((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-dvh bg-rice text-ink">
      <header className="px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-rice transition hover:bg-tuna focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back home
          </Link>
        </div>
      </header>

      <section className="px-5 pb-20 pt-8 sm:px-8 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div ref={titleRef} style={fadeUpStyle(titleVisible)} className="mx-auto max-w-3xl text-center">
            <h1 className={`${japaneseDisplay.className} text-4xl tracking-[0.08em] text-tuna sm:text-5xl`}>
              Reservation
            </h1>
            <p className="mt-20 text-lg leading-8 text-soy/78">
              Select the branch you want, check the map preview, then call the matching number to reserve your table.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-7">
            {locations.map((location, index) => (
              <section
                key={location.phone}
                aria-labelledby={location.phone}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={zoomStyle(visibleCards[index], index * 90)}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex min-h-20 items-center gap-3">
  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-tuna text-white transition-transform duration-300 group-hover:scale-110">
    <MapPin className="size-5" aria-hidden="true" />
  </span>
  <h2 id={location.phone} className={`${locationNameFont.className} text-xl font-bold leading-tight text-ink`}>
    {location.name}
  </h2>
</div>

                <div className="mt-5 aspect-square overflow-hidden rounded-lg border border-soy/12 bg-white shadow-soft transition-shadow duration-300 group-hover:shadow-lg">
                  <iframe
                    title={location.name + " map"}
                    src={location.embed}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-soy/10 pt-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-soy/50">
                      Reservation number
                    </p>
                    <a
                      href={location.href}
                      className="mt-1 inline-flex text-3xl font-black tracking-wide text-ink transition hover:text-tuna focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <a
                      href={location.href}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-tuna px-6 font-bold text-white transition hover:bg-[#bd332e] focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      Call to reserve
                    </a>
                    <a
                      href={location.map}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-soy/15 bg-white/60 px-6 font-bold text-soy transition hover:border-tuna hover:text-tuna focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
                    >
                      Open map
                      <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}