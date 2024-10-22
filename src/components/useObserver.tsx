import { useEffect, useRef, useState } from "react";

const useObserver = (threshold: number) => {
  const target = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  useEffect(() => {
    if (target.current) {
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) setIsIntersecting(true);
            else setIsIntersecting(false);
          });
        },
        {
          threshold: threshold,
        }
      );
      observer.observe(target.current as Element);
      return () => {
        if (observer) {
          // console.log("observer 종료");
          observer && observer.disconnect(); // unmounted 시 IntersectionObserver 종료
        }
      };
    }
  }, []);

  return { target, isIntersecting };
};

export default useObserver;
