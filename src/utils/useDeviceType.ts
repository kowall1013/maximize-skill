import { useMinWidth } from "./useMinWidth";
import { sizes } from "./RWDthresholds";

export const useDeviceType = (deviceType: string) => {
  const minWidth = sizes[deviceType] ? sizes[deviceType] : 0;
  const result = useMinWidth(minWidth);

  return minWidth ? result : false;
};
