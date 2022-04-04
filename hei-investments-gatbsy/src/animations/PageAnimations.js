export const AniWrapper = {
  enter: {
    transition: {
      staggerChildren: 0.06,
      // delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    // y: 20,
    transition: {
      // duration: 0.2,
      // staggerChildren: 0.06,
      // staggerDirection: -1,
    },
  },
};

export const AniItem = {
  initial: { y: 30, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // ease: "easeOut",
    },
  },
  exit: { y: 30, opacity: 0 },
};

export const AniImage = {
  initial: { scale: 1.04, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { opacity: 0 },
};
