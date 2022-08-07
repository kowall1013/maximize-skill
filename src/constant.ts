const BREAKPOINTS = {
  tabletMin: 768,
  desktopMin: 1440,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const FONT_WEIGHT = {
  fw_500: 500,
  fw_700: 700,
  fw_800: 800,
};

export const COLORS = {
  primary: "hsla(233, 54%, 16%)",
  secondary: "hsla(232, 10%, 56%)",
  violet: "hsla(234, 25%, 52%)",
  pink: "hsla(341, 92%, 62%)",
  pink_light: "hsla(341, 100%, 83%)",
  white: "hsla(0, 0%, 100%)",
  gradient_primary: `linear-gradient(
    180deg,
    hsl(13deg 100% 64%) 0%,
    hsl(7deg 99% 63%) 21%,
    hsl(2deg 97% 62%) 30%,
    hsl(356deg 96% 61%) 39%,
    hsl(350deg 94% 60%) 46%,
    hsl(345deg 92% 59%) 54%,
    hsl(339deg 92% 58%) 61%,
    hsl(334deg 90% 57%) 69%,
    hsl(328deg 88% 56%) 79%,
    hsl(322deg 87% 55%) 100%
  );`,
  gradient_secondary: `linear-gradient(
    180deg,
    hsl(237deg 100% 64%) 0%,
    hsl(322deg 87% 55%) 100%
  );`,
  gradient_white_gray: `linear-gradient(
    180deg,
    hsl(0deg 0% 100%) 0%,
    hsl(237deg 100% 100%) 11%,
    hsl(237deg 100% 99%) 22%,
    hsl(237deg 100% 99%) 33%,
    hsl(236deg 100% 99%) 44%,
    hsl(236deg 100% 98%) 56%,
    hsl(236deg 100% 98%) 67%,
    hsl(236deg 100% 98%) 78%,
    hsl(236deg 100% 97%) 89%,
    hsl(236deg 100% 97%) 100%
  );`,
};

export const CONSTANT_STRING = {
  animation: "Animation",
  design: "Design",
  photography: "Photography",
  crypto: "Crypto",
  business: "Business",
};
