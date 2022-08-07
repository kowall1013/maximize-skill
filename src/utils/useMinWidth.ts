import { useState, useEffect } from "react";

export const useMinWidth = (minWidth: number) => {
  const [hasWidth, setHasWidth] = useState(() => window.innerWidth >= minWidth);

  useEffect(() => {
    let hasMedia = false;
    let mediaQuery: MediaQueryList;

    const handleMediaChange = (mql: any) => {
      setHasWidth(mql.matches);
    };

    if (window.matchMedia) {
      hasMedia = true;
      mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
      mediaQuery.addEventListener("change", handleMediaChange);
    }
    return () => {
      if (hasMedia && mediaQuery) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      }
    };
  }, [minWidth]);

  return hasWidth;
};
