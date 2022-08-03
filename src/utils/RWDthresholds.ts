export const DEVICE_DESKTOP = "desktop";
export const DEVICE_TABLET = "tablet";

type sizesTypes = {
  [key: string]: number;
};

export const sizes: sizesTypes = {
  [DEVICE_TABLET]: 768,
  [DEVICE_DESKTOP]: 1440,
};
