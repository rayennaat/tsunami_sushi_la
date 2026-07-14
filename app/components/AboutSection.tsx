import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Yusei_Magic } from "next/font/google";

const japaneseDisplay = Yusei_Magic({ subsets: ["latin"], weight: "400" });

function JapaneseRestaurantVisual() {
  return (
    <div className="about-visual section-copy relative mx-auto hidden h-[380px] w-full max-w-md sm:block lg:h-[430px]">
      {/* red sun */}
      <div className="about-sun-glow absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-tuna/25 blur-2xl" />
      <div className="about-sun absolute left-1/2 top-16 h-44 w-44 -translate-x-1/2 rounded-full border border-tuna/30 bg-tuna/15" />

      {/* lantern */}
      <div className="about-lantern absolute right-4 top-8">
        <div className="relative h-28 w-20 rounded-[999px] border border-rice/20 bg-rice text-ink shadow-2xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-tuna/30" />
          <div className="absolute inset-x-3 top-4 h-px bg-tuna/30" />
          <div className="absolute inset-x-3 bottom-4 h-px bg-tuna/30" />
          <div
            className={`${japaneseDisplay.className} absolute inset-0 flex items-center justify-center text-3xl text-tuna`}
          >
            寿
          </div>
        </div>
        <div className="mx-auto h-6 w-px bg-rice/30" />
      </div>

      {/* red stamp */}
      <div
        className={`${japaneseDisplay.className} about-stamp absolute left-2 top-20 grid h-24 w-24 place-items-center rounded-full border-2 border-tuna text-4xl text-tuna`}
      >
        匠
      </div>

      {/* wave lines */}
      <svg
        viewBox="0 0 420 160"
        className="pointer-events-none absolute left-1/2 top-40 w-[430px] -translate-x-1/2 opacity-25"
        aria-hidden="true"
      >
        <path
          d="M20 90c40-40 80 40 120 0s80 40 120 0 80 40 140 0"
          className="about-wave-line fill-none stroke-rice"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 120c40-35 80 35 120 0s80 35 120 0 80 35 120 0"
          className="about-wave-line about-wave-line-red fill-none stroke-tuna"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* main noren sign */}
      <div className="absolute bottom-0 left-1/2 w-[360px] -translate-x-1/2 lg:w-[410px]">
        <div className="about-roof mx-auto h-3 w-[92%] rounded-full bg-rice/80 shadow-[0_0_35px_rgba(255,248,236,0.18)]" />

        <div className="relative mt-3 grid grid-cols-3 gap-2">
          <div className="about-panel-enter">
            <div className="about-noren-panel about-noren-panel-1 h-56 rounded-b-[2rem] border border-rice/10 bg-rice/95 shadow-2xl">
              <div
                className={`${japaneseDisplay.className} flex h-full items-center justify-center text-5xl text-ink`}
              >
                津
              </div>
            </div>
          </div>

          <div className="about-panel-enter about-panel-enter-middle">
            <div className="about-noren-panel about-noren-panel-2 h-64 rounded-b-[2rem] border border-rice/10 bg-rice shadow-2xl">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <p
                  className={`${japaneseDisplay.className} text-5xl leading-none text-tuna`}
                >
                  波
                </p>
                <div className="h-px w-10 bg-ink/20" />
                <p className="text-xs font-black uppercase tracking-[0.28em] text-ink/55">
                  Sushi
                </p>
              </div>
            </div>
          </div>

          <div className="about-panel-enter">
            <div className="about-noren-panel about-noren-panel-3 h-56 rounded-b-[2rem] border border-rice/10 bg-rice/95 shadow-2xl">
              <div
                className={`${japaneseDisplay.className} flex h-full items-center justify-center text-5xl text-ink`}
              >
                鮨
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom-label mx-auto mt-5 w-fit rounded-full border border-rice/10 bg-ink/70 px-5 py-3 text-sm font-bold text-rice/75 backdrop-blur">
          Fresh cuts · Crunchy rolls · Chef boxes
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const aboutText =
    "Tsunami brings together sushi classics, crunchy rolls, chef creations, poke bowls, and sharing boxes made fresh to order. Every plate is built around bold flavor, fresh cuts, and a warm dining experience.";

  return (
    <section
      id="about"
      data-reveal="fade"
      className="relative overflow-hidden bg-ink px-5 py-20 text-rice sm:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-tuna/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-ginger/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
        <div className="about-text-content max-w-2xl">
          <p
            className={`${japaneseDisplay.className} about-eyebrow text-xl tracking-[0.08em] text-ginger`}
          >
            About Tsunami
          </p>

          <div className="about-title-line mt-5 h-px w-24 bg-ginger/60" />

          <p className="about-paragraph mt-7 max-w-xl text-lg leading-8 text-rice/75">
            {aboutText.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="about-word"
                style={{ "--word-delay": `${180 + index * 22}ms` } as React.CSSProperties}
              >
                {word}
              </span>
            ))}
          </p>

          <div className="about-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="about-action-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rice px-7 font-bold text-ink transition duration-300 hover:-translate-y-1 hover:bg-ginger focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-ink"
            >
              Read our story
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="#menu"
              className="about-action-button inline-flex min-h-12 items-center justify-center rounded-full border border-rice/20 bg-rice/10 px-7 font-bold text-rice backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-rice hover:text-ink focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-ink"
            >
              See the menu
            </Link>
          </div>
        </div>

        <JapaneseRestaurantVisual />
      </div>
    </section>
  );
}