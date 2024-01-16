import { useEffect, useRef } from "react";
import Information from "./Information";
import { ContentDetailType } from "types/common";

export const ProjectIntro = (props: { info: ContentDetailType }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 썸네일 저화질 -> 고화질 lazyload
    if (imgRef.current && imgRef.current.dataset.src) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, []);

  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-45px)] pb-10">
      <div className="flex flex-col sm:flex-row max-w-[1300px]">
        <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
          <img
            ref={imgRef}
            src={props.info.lowThumbnail}
            data-src={props.info.thumbnail}
            alt="thumbnail"
            width="770px"
            height="592.3px"
          />
        </div>
        <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start">
          <Information info={props.info} />
        </div>
      </div>
    </section>
  );
};
