import Lenis from "lenis";
import { createContext, useEffect, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const directionRef = useRef(-1);
  const scrollYRef = useRef(0);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", (e) => {
      directionRef.current = e.direction;
      scrollYRef.current = e.scroll;
    });
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        lenis: lenisRef,
        directionRef: directionRef,
        scrollYRef: scrollYRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
