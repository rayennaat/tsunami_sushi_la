import { ArrowUpRight, Flame, PackageOpen, Salad } from "lucide-react";
import Image from "next/image";
import { Yusei_Magic } from "next/font/google";

const japaneseDisplay = Yusei_Magic({ subsets: ["latin"], weight: "400" });

const menuHighlights = [
  {
    icon: Salad,
    title: "Fresh starters",
    text: "Crisp salads, light bites, soups, and clean flavors to open the table.",
  },
  {
    icon: Flame,
    title: "Signature rolls",
    text: "Crunchy rolls, chef creations, nigiri, sashimi, and bold combinations made to order.",
  },
  {
    icon: PackageOpen,
    title: "Boxes & bowls",
    text: "Poke bowls, sushi boxes, and generous sharing sets for dine-in or takeaway.",
  },
];

export function MenuSection() {
  return (
    <section id="menu" data-reveal="fade" className="relative px-5 py-24 sm:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-tuna/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-ginger/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`${japaneseDisplay.className} section-eyebrow text-xl tracking-[0.12em] text-soy/60`}
          >
            Taste the wave
          </p>

          <h2
            className={`${japaneseDisplay.className} section-title mt-3 text-5xl leading-tight tracking-[0.12em] text-tuna sm:text-6xl lg:text-7xl`}
          >
            Our menu
          </h2>

          <p className="section-copy mx-auto mt-5 max-w-2xl text-lg leading-8 text-soy/70">
            Pick your mood: fresh starters, crispy rolls, chef specials, sushi
            boxes, poke bowls, noodles, and warm Japanese plates.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="menu-visual">
            <div className="menu-image-shell relative overflow-hidden rounded-[2rem] border border-soy/10 bg-ink shadow-soft">
              <div className="relative aspect-square w-full">
                <Image
                  src="/menu33.png"
                  alt="Fresh sushi dish from the Tsunami Sushi menu"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="menu-image object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-rice/5" />
              </div>

              <div className="absolute left-5 top-5 rounded-full border border-rice/15 bg-ink/70 px-4 py-2 text-sm font-bold text-rice backdrop-blur">
                Chef selection
              </div>

              <div className="absolute bottom-5 right-5 rounded-full bg-tuna px-4 py-2 text-sm font-bold text-white shadow-lg">
                Fresh daily
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-4">
              {menuHighlights.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="menu-card group rounded-[1.5rem] border border-soy/10 bg-white/75 p-5 shadow-sm backdrop-blur transition-colors duration-300 hover:border-tuna/30 hover:bg-white hover:shadow-soft"
                >
                  <div className="flex gap-4">
                    <div className="menu-card-icon grid size-12 shrink-0 place-items-center rounded-full bg-tuna/10 text-tuna group-hover:bg-tuna group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                        {title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-soy/68">
                        {text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="https://heyzine.com/flip-book/8ccfb46136.html"
              target="_blank"
              rel="noreferrer"
              className="menu-cta group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-tuna px-7 font-bold text-white shadow-[0_16px_35px_rgba(215,68,62,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#bd332e] focus:outline-none focus:ring-2 focus:ring-tuna focus:ring-offset-2 focus:ring-offset-rice"
            >
              Explore the menu
              <ArrowUpRight
                className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}