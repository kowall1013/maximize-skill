import { useMinWidth } from "./useMinWidth";
import { sizes } from "./RWDthresholds";

type useDeviceTypeProps = {
  deviceType: "DEVICE_TABLET" | "DEVICE_DESKTOP";
};

export const useDeviceType = ({ deviceType }: useDeviceTypeProps) => {
  const minWidth = sizes[deviceType] ? sizes[deviceType] : 0;
  const result = useMinWidth(minWidth);

  return minWidth ? result : false;
};
