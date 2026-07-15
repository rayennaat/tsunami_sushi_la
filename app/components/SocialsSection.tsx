"use client";

import { Facebook, Instagram, Mail, Music2, Waves } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../i18n";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/tsunami_sushilab/" },
  { name: "TikTok", icon: Music2, href: "https://www.tiktok.com/@tsunami.sushi.lab1" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=100064051177685" },
  { name: "Email", icon: Mail, href: "mailto:tsunamisushi2021@gmail.com" }
];

export function SocialsSection() {
  const { text } = useLanguage();
  const exploreLinks = ["about", "menu", "reservation", "reviews"];
  return (
    <footer id="socials" className="bg-ink px-5 pt-16 pb-8 text-rice sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="grid gap-10 border-b border-rice/10 pb-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/#top" className="inline-flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-tuna text-rice">
                <Waves className="size-4" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl font-bold">Tsunami Sushi</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-rice/60">
              {text.footer[0]}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-rice/40">
              {text.footer[1]}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {exploreLinks.map((item, index) => (
                <li key={item}>
                  <Link
                    href={`/#${item}`}
                    className="text-rice/70 transition hover:text-tuna"
                  >
                    {text.nav[index]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-rice/40">
              {text.footer[2]}
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="grid size-10 place-items-center rounded-full border motion-safe:hover:-translate-y-1 active:scale-95 border-rice/15 text-rice/75 transition hover:border-tuna hover:text-tuna focus:outline-none focus:ring-2 focus:ring-tuna"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-rice/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Tsunami Sushi. {text.footer[3]}</p>
          <p>{text.footer[4]}</p>
        </div>
      </div>
    </footer>
  );
}
