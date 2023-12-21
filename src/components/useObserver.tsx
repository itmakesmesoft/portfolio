import { useEffect, useRef } from "react";

const useObserver = (
  callback: (entries: IntersectionObserverEntry[]) => unknown,
  threshold: number
) => {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (targetRef.current) {
      const observer = new IntersectionObserver(callback, {
        threshold: threshold,
      });
      observer.observe(targetRef.current as Element);
      return () => {
        if (observer) {
          console.log("observer 종료");
          observer && observer.disconnect(); // unmounted 시 IntersectionObserver 종료
        }
      };
    }
  }, []);

  return [targetRef];
};

export default useObserver;
