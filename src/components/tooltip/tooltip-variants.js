const EASE_OUT = [0.16, 1, 0.3, 1];
const EASE_IN = [0.7, 0, 0.84, 0];

// Pixel-strip reveal: each cell flies in/out from its own random offset,
// staggered by a shuffled per-cell rank so the strips assemble out of order.
export const cellVariants = {
  hidden: ({ offset, delay }) => ({
    opacity: 0,
    scaleX: 0.8,
    x: offset,
    transition: { duration: 0.22, delay: delay * 0.6, ease: EASE_IN },
  }),
  show: ({ offset, delay }) => ({
    opacity: 1,
    scaleX: 1,
    x: 0,
    transition: { duration: 0.28, delay, ease: EASE_OUT },
  }),
};

// The glass surface (blur + shadow) fades as one unit, independent of the
// per-cell wipe, so it reads as a single card rather than per-strip panes.
export const surfaceVariants = {
  hidden: { opacity: 0, transition: { duration: 0.25, delay: 0.1, ease: EASE_IN } },
  show: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
};

export const contentVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.35 } },
};
