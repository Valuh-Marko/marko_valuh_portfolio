import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { cellVariants, contentVariants, surfaceVariants } from "./tooltip-variants";
import "./tooltip.scss";

const SHOW_DELAY = 40;
const HIDE_DELAY = 40;
const STAGGER_EACH = 0.02;

// Shuffles a 0..count-1 rank per cell, plus a random slide-in offset, so the
// pixel strips assemble in a random order instead of sweeping left-to-right.
const generateCellCustom = (count) => {
  const ranks = Array.from({ length: count }, (_, i) => i);
  for (let i = ranks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ranks[i], ranks[j]] = [ranks[j], ranks[i]];
  }
  return ranks.map((rank) => ({
    delay: rank * STAGGER_EACH,
    offset: `${Math.round(Math.random() * 400 - 200)}%`,
  }));
};

// Wraps any inline trigger with a pixel-strip tooltip that assembles near the
// cursor and tracks it 1:1 while hovering. The trigger is wrapped in a
// display:contents span so it attaches without affecting layout.
export const Tooltip = ({
  children,
  content,
  rows = 1,
  cols = 14,
  variant = "default",
}) => {
  const cellCount = rows * cols;

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cellCustom, setCellCustom] = useState(() => generateCellCustom(cellCount));

  const tooltipRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const showTimeout = useRef(null);
  const hideTimeout = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(showTimeout.current);
      clearTimeout(hideTimeout.current);
    },
    []
  );

  const clampToViewport = useCallback((x, y) => {
    const el = tooltipRef.current;
    const width = el?.offsetWidth ?? 0;
    const height = el?.offsetHeight ?? 0;
    const maxX = Math.max(window.innerWidth - width, 0);
    const maxY = Math.max(window.innerHeight - height, 0);
    return { x: Math.min(Math.max(x, 0), maxX), y: Math.min(Math.max(y, 0), maxY) };
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      setPosition(clampToViewport(pointerRef.current.x, pointerRef.current.y));
    }
  }, [isOpen, clampToViewport]);

  const handleEnter = useCallback(
    (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      clearTimeout(hideTimeout.current);
      showTimeout.current = setTimeout(() => {
        setCellCustom(generateCellCustom(cellCount));
        setIsOpen(true);
      }, SHOW_DELAY);
    },
    [cellCount]
  );

  const handleMove = useCallback(
    (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (isOpen) setPosition(clampToViewport(event.clientX, event.clientY));
    },
    [isOpen, clampToViewport]
  );

  const handleLeave = useCallback(() => {
    clearTimeout(showTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setCellCustom(generateCellCustom(cellCount));
      setIsOpen(false);
    }, HIDE_DELAY);
  }, [cellCount]);

  return (
    <>
      <span
        className="c-tooltip__trigger"
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </span>
      {createPortal(
        <motion.div
          ref={tooltipRef}
          className={`c-tooltip c-tooltip--${variant}`}
          style={{
            left: position.x,
            top: position.y,
            "--tt-cols": cols,
            "--tt-rows": rows,
          }}
        >
          <motion.div
            className="c-tooltip__bg"
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            variants={surfaceVariants}
          >
            <div className="c-tooltip__grid">
              {cellCustom.map((custom, i) => (
                <motion.span
                  key={i}
                  className="c-tooltip__cell"
                  custom={custom}
                  initial="hidden"
                  animate={isOpen ? "show" : "hidden"}
                  variants={cellVariants}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            className="c-tooltip__content"
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            variants={contentVariants}
          >
            {content}
          </motion.div>
        </motion.div>,
        document.body
      )}
    </>
  );
};
