// Shared by TextReveal and RevealMask: slides a unit up from behind its
// mask, clipped so it appears out of nowhere rather than fading in.
export const revealVariants = {
  hidden: { y: "-110%" },
  show: (i) => ({
    y: "0%",
    transition: {
      duration: 0.62,
      delay: (i - 0.5) * 0.025,
      ease: [0.61, 0.16, 0.17, 0.93],
    },
  }),
};
