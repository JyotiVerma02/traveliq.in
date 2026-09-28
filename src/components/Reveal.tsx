"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before this element starts animating. */
  delay?: number;
  /** Direction the content travels in from. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in px the content travels. */
  distance?: number;
  /** Extra classes on the wrapping div. */
  className?: string;
  /** Animate every time it scrolls into view, instead of just once. */
  repeat?: boolean;
};

/** Fade and slide content into view without loading an animation library. */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  className,
  repeat = false,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const translation =
      direction === "up"
        ? `translate3d(0, ${distance}px, 0)`
        : direction === "down"
          ? `translate3d(0, -${distance}px, 0)`
          : direction === "left"
            ? `translate3d(${distance}px, 0, 0)`
            : direction === "right"
              ? `translate3d(-${distance}px, 0, 0)`
              : "translate3d(0, 0, 0)";

    element.style.opacity = "0";
    element.style.transform = translation;
    element.style.transition = `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translate3d(0, 0, 0)";
          if (!repeat) observer.unobserve(element);
        } else if (repeat) {
          element.style.opacity = "0";
          element.style.transform = translation;
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, direction, distance, repeat]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
