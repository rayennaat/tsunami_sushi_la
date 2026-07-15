"use client";

import { Check, Languages, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Language, useLanguage } from "../i18n";

const anchors = ["about", "menu", "reservation", "reviews", "socials"];

const languageNames: Record<Language, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية"
};

export function LanguagePicker() {
  const { language, setLanguage, text } = useLanguage();
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  return (
    <div ref={pickerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`${text.language}: ${languageNames[language]}`}
        aria-expanded={open}
        aria-haspopup="menu"
        className="grid size-11 cursor-pointer place-items-center rounded-full border border-soy/15 bg-rice/90 text-ink shadow-sm backdrop-blur transition hover:bg-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-tuna"
      >
        <Languages className="size-5" aria-hidden="true" />
      </button>

      {open && (
        <div role="menu" aria-label={text.language} className="absolute end-0 top-[calc(100%+0.5rem)] z-50 min-w-40 overflow-hidden rounded-2xl border border-soy/10 bg-rice p-1.5 shadow-soft">
          {(Object.keys(languageNames) as Language[]).map((item) => (
            <button
              key={item}
              type="button"
              role="menuitemradio"
              aria-checked={language === item}
              onClick={() => { setLanguage(item); setOpen(false); }}
              className={`flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tuna ${language === item ? "bg-ink text-rice" : "text-soy hover:bg-soy/10"}`}
            >
              <span>{languageNames[item]}</span>
              {language === item && <Check className="size-4" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { text } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div data-reveal className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex min-h-11 items-center gap-2 rounded-full bg-rice/90 px-3 text-ink shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-tuna" aria-label="Tsunami Sushi home">
          <Image src="/logo2.png" alt="" width={40} height={40} className="size-10 rounded-full object-cover" aria-hidden="true" />
          <span className="hidden font-display text-xl font-bold min-[390px]:inline">Tsunami Sushi</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-rice/90 p-1 text-sm font-semibold text-soy shadow-sm backdrop-blur lg:flex" aria-label="Primary navigation">
          {anchors.map((anchor, index) => <a key={anchor} href={`#${anchor}`} className="rounded-full px-3 py-3 transition hover:bg-soy hover:text-rice focus:outline-none focus:ring-2 focus:ring-tuna">{text.nav[index]}</a>)}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguagePicker />
          <a href="/reservation" className="flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-rice transition hover:bg-tuna focus:outline-none focus:ring-2 focus:ring-tuna">
            <Phone className="size-4" aria-hidden="true" />{text.reserve}
          </a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? text.closeNav : text.openNav} className="grid size-11 place-items-center rounded-full bg-rice/90 text-ink shadow-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-tuna md:hidden">
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>

        {open && (
          <div ref={panelRef} id="mobile-navigation" className="absolute inset-x-5 top-[5.25rem] rounded-[1.5rem] border border-soy/10 bg-rice/95 p-3 text-ink shadow-soft backdrop-blur-xl sm:inset-x-8 md:hidden">
            <nav className="grid" aria-label="Mobile navigation">
              {anchors.map((anchor, index) => <a key={anchor} href={`#${anchor}`} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between rounded-xl px-4 font-bold transition hover:bg-soy/8 focus:outline-none focus:ring-2 focus:ring-tuna"><span>{text.nav[index]}</span><Check className="size-4 opacity-0" /></a>)}
            </nav>
            <a href="/reservation" className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-tuna px-5 font-bold text-white"><Phone className="size-4" />{text.reserve}</a>
            <div className="mt-4 flex justify-end border-t border-soy/10 pt-4"><LanguagePicker /></div>
          </div>
        )}
      </div>
    </header>
  );
}
