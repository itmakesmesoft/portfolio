import { useEffect, useState } from "react";
const useDebounce = (callback: () => void, interval: number) => {
  const [status, setStatus] = useState<number>(-2); // -2: noneOfView, -1: mouseLeaved, 0: standby, 1: mouseHovered
  useEffect(() => {
    if (status === -1) {
      const debounce = setTimeout(() => {
        if (status === -1) {
          setStatus(0);
          callback();
        }
      }, interval);
      return () => clearTimeout(debounce);
    }
  }, [callback, interval, status]);

  return { status, setStatus };
};

export default useDebounce;
