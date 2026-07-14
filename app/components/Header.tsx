import { Menu, Phone } from "lucide-react";
import Image from "next/image";

const navItems = ["About", "Menu", "Reservation", "Reviews", "Socials"];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div data-reveal className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2 rounded-full bg-rice/90 px-3 text-ink shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
          aria-label="Tsunami Sushi home"
        >
            <Image src="/logo2.png" alt="" width={28} height={28} className="size-10 rounded-full object-cover" aria-hidden="true" />
          <span className="font-display text-xl font-bold pr-0">Tsunami Sushi</span>
        </a>

        <nav className="hidden items-center gap-2 rounded-full bg-rice/90 p-1 text-sm font-semibold text-soy shadow-sm backdrop-blur md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-3 transition hover:bg-soy hover:text-rice focus:outline-none focus:ring-2 focus:ring-tuna"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="/reservation"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-rice transition hover:bg-tuna focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice sm:flex"
        >
          <Phone className="size-4" aria-hidden="true" />
          Reserve
        </a>

        <button
          className="grid size-11 place-items-center rounded-full bg-rice/90 text-ink shadow-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-tuna md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
