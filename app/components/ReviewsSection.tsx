"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Yusei_Magic } from "next/font/google";
import { useState } from "react";

const japaneseDisplay = Yusei_Magic({ subsets: ["latin"], weight: "400" });

const googleReviews = [
  {
    tag: "Bader El Kefi",
    rating: "5.0",
    text: "An exceptional experience! The sushi is impeccably fresh, the flavors perfectly balanced, and the presentation refined. The service is warm and attentive, making the meal even more enjoyable. The restaurant's atmosphere is friendly and elegant, ideal for dinner with friends or family. I highly recommend this restaurant."
  },
  {
    tag: "Sabrine Mannai",
    rating: "5.0",
    text: "Very good sushi restaurant! The dishes are fresh and delicious. The service is fast, there's not much of a wait, and the staff is welcoming. The atmosphere is pleasant and clean. I highly recommend it."
  },
  {
    tag: "Amani Zerelli",
    rating: "5.0",
    text: "I have ordered several times via an app, and the dishes have been delicious, presentable, and well-packaged every time. I recommend it for those who like good, fresh sushi."
  },
  {
    tag: "Limam Asma",
    rating: "5.0",
    text: "Excellent experience! We had sushi and noodles, both delicious and well-prepared. The sushi rice was perfectly seasoned, and the ingredients were very fresh, while the noodles were flavorful and generously filled. Friendly service and a warm atmosphere. Highly recommended!"
  }
];

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const review = googleReviews[activeReview];

  const showPreviousReview = () => {
    setActiveReview((current) =>
      current === 0 ? googleReviews.length - 1 : current - 1
    );
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % googleReviews.length);
  };

  return (
    <section id="reviews" className="bg-nori px-5 py-20 text-rice sm:px-8 lg:py-28">
      <div data-reveal className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2
          className={`${japaneseDisplay.className} text-5xl uppercase leading-none tracking-[0.08em] text-ginger sm:text-6xl lg:text-7xl`}
        >
          Reviews
        </h2>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-rice/65 sm:text-sm">
          Consistently delicious
        </p>

        <div className="mt-10 flex h-[390px] w-full flex-col items-center justify-center sm:mt-12 sm:h-[350px] lg:h-[320px]">
          <blockquote
            key={activeReview}
            className="review-enter mx-auto max-w-4xl px-1 font-display text-lg leading-relaxed text-rice sm:px-6 sm:text-xl lg:text-2xl lg:leading-relaxed"
            aria-live="polite"
          >
            “{review.text}”
          </blockquote>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-rice">
            {review.tag}
          </p>
          <div
            className="mt-4 flex items-center justify-center gap-1 text-ginger"
            aria-label={`${review.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={showPreviousReview}
            aria-label="Show previous review"
            className="grid size-12 place-items-center rounded-full border active:scale-95 border-rice/30 text-rice transition hover:border-ginger hover:bg-ginger hover:text-nori focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-nori"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNextReview}
            aria-label="Show next review"
            className="grid size-12 place-items-center rounded-full border active:scale-95 border-rice/30 text-rice transition hover:border-ginger hover:bg-ginger hover:text-nori focus:outline-none focus:ring-2 focus:ring-ginger focus:ring-offset-2 focus:ring-offset-nori"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
