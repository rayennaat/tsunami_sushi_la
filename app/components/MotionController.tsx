"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

export function MotionController() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const restoreScrollBehavior = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });

    return () => window.cancelAnimationFrame(restoreScrollBehavior);
  }, [pathname]);


  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    root.classList.add("motion-ready");

    if (reduceMotion.matches || elements.length === 0) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const reveal = (element: Element) => {
      window.requestAnimationFrame(() => {
        element.classList.add("is-revealed");
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px"
      }
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.92) {
        reveal(element);
        return;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
