"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselControlsProps = {
  targetId: string;
  previousLabel: string;
  nextLabel: string;
  className?: string;
  buttonClassName: string;
  iconSize?: number;
  iconStrokeWidth?: number;
  hideWhenNotScrollable?: boolean;
};

export default function CarouselControls({
  targetId,
  previousLabel,
  nextLabel,
  className = "",
  buttonClassName,
  iconSize = 20,
  iconStrokeWidth = 2,
  hideWhenNotScrollable = false,
}: CarouselControlsProps) {
  const [isScrollable, setIsScrollable] = useState(!hideWhenNotScrollable);

  useEffect(() => {
    const container = document.getElementById(targetId);
    if (!container) return;

    const checkOverflow = () => {
      setIsScrollable(container.scrollWidth > container.clientWidth + 1);
    };
    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(container);
    window.addEventListener("resize", checkOverflow);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [targetId]);

  const scroll = (direction: -1 | 1) => {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.scrollBy({
      left: direction * window.innerWidth,
      behavior: "smooth",
    });
  };

  if (!isScrollable) return null;

  return (
    <div className={className}>
      <button
        type="button"
        aria-controls={targetId}
        onClick={() => scroll(-1)}
        aria-label={previousLabel}
        title={previousLabel}
        className={buttonClassName}
      >
        <ChevronLeft size={iconSize} strokeWidth={iconStrokeWidth} />
      </button>
      <button
        type="button"
        aria-controls={targetId}
        onClick={() => scroll(1)}
        aria-label={nextLabel}
        title={nextLabel}
        className={buttonClassName}
      >
        <ChevronRight size={iconSize} strokeWidth={iconStrokeWidth} />
      </button>
    </div>
  );
}
