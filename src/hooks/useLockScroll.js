import { useEffect } from "react";

export const useScrollLock = (lock) => {
  useEffect(() => {
    // Lock the root too: if html ever gains its own overflow value the body's
    // stops propagating to the viewport and the page keeps scrolling.
    const targets = [document.documentElement, document.body];
    const value = lock ? "hidden" : "";
    targets.forEach((el) => (el.style.overflow = value));

    return () => {
      targets.forEach((el) => (el.style.overflow = ""));
    };
  }, [lock]);
};
