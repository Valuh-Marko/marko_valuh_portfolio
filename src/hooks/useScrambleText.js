import { useCallback, useState } from "react";

export const useScrambleText = (text) => {
  const [scrambledText, setScrambledText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321";

  // Define the scramble function type as a callback
  const scramble = useCallback(() => {
    let iteration = 0;
    setScrambledText(text);

    const interval = setInterval(() => {
      setScrambledText((prevText) =>
        prevText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 36)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 20);
  }, [text]);

  return [scrambledText, scramble];
};
