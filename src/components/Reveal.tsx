"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before this element starts animating (great for staggering a row of cards). */
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

const offsets: Record<
  NonNullable<RevealProps["direction"]>,
  { x?: number; y?: number }
> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

/**
 * Wrap any section/card with <Reveal> to fade + slide it in the moment
 * it scrolls into the viewport. Pass `delay` to stagger a group of
 * siblings (e.g. delay={index * 0.08} inside a .map()).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  className,
  repeat = false,
}: RevealProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x ? offset.x * distance : 0,
      y: offset.y ? offset.y * distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}