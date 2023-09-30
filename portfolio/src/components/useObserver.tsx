import { useEffect, useRef } from "react";

const useObserver = (callback: any, threshold: number) => {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (targetRef) {
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
