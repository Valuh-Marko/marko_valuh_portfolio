export const slideOut = {
  initial: {
    top: "1rem",
  },
  enter: {
    top: "1rem",
  },
  exit: {
    top: -200,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const headerHeight = (windowHeight) => {
  const remValue = `${windowHeight / 24}rem`;

  return {
    closed: {
      maxHeight: "6.5rem",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      maxHeight: remValue,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
};

export const opacity = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};

export const firstBar = {
  closed: {
    rotate: 0,
    y: 0,
  },
  open: {
    rotate: -45,
    y: "0.313rem",
  },
};

export const lastBar = {
  closed: {
    rotate: 0,
    y: 0,
  },
  open: {
    rotate: 45,
    y: "-0.313rem",
  },
};

export const slideDown = (idx) => {
  return {
    mouseOut: {
      y: `-100% * ${idx}`,
    },

    mouseIn: {
      y: "100% + 2rem",
    },
  };
};
