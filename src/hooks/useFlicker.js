import { useEffect, useRef, useState } from "react";

// Kept in sync with the CSS animation duration (see name-flicker in
// hero-section.scss): burstDuration must stay >= the CSS animation's
// duration so the class is never removed mid-animation.
const MIN_DELAY_MS = 4000;
const MAX_DELAY_MS = 9000;
const BURST_DURATION_MS = 550;

export const useFlicker = ({
  minDelay = MIN_DELAY_MS,
  maxDelay = MAX_DELAY_MS,
  burstDuration = BURST_DURATION_MS,
  onFlicker,
} = {}) => {
  const [isFlickering, setIsFlickering] = useState(false);
  const delayTimeoutRef = useRef(null);
  const burstTimeoutRef = useRef(null);
  const onFlickerRef = useRef(onFlicker);

  useEffect(() => {
    onFlickerRef.current = onFlicker;
  }, [onFlicker]);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);

      delayTimeoutRef.current = setTimeout(() => {
        setIsFlickering(true);
        onFlickerRef.current?.();

        burstTimeoutRef.current = setTimeout(() => {
          setIsFlickering(false);
          scheduleNext();
        }, burstDuration);
      }, delay);
    };

    scheduleNext();

    return () => {
      clearTimeout(delayTimeoutRef.current);
      clearTimeout(burstTimeoutRef.current);
    };
  }, [minDelay, maxDelay, burstDuration]);

  return isFlickering;
};
