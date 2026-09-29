"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselControlsProps = {
  targetId: string;
  previousLabel: string;
  nextLabel: string;
  className?: string;
  buttonClassName: string;
  iconSize?: number;
  iconStrokeWidth?: number;
};

export default function CarouselControls({
  targetId,
  previousLabel,
  nextLabel,
  className = "",
  buttonClassName,
  iconSize = 20,
  iconStrokeWidth = 2,
}: CarouselControlsProps) {
  const scroll = (direction: -1 | 1) => {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.scrollBy({
      left: direction * container.clientWidth,
      behavior: "smooth",
    });
  };

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
