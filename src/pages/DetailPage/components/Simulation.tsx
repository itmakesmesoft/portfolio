import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import useObserver from "components/useObserver";

let simTimer: NodeJS.Timeout;

interface CardRefInterface {
  animatedIndex: number;
  hoverIndex: number;
  activeIndex: number;
}
const animDuration = 200;

const Simulation = (props: { data: string[][] }) => {
  const imageSrcs: string[][] = props.data;
  const timerRef = useRef<NodeJS.Timer>();
  const [card, setCard] = useState<number>(-1); // -1: standBy, 0~N: 호버링 인덱스 번호
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const { target: targetRef, isIntersecting } = useObserver(0.7); // 시뮬레이션 컴포넌트가 뷰포트에 교차되는 경우 작동
  const cardRef = useRef<CardRefInterface>({
    animatedIndex: -1,
    hoverIndex: -1,
    activeIndex: -1,
  });

  useEffect(() => {
    loadAllImages(imageSrcs);
    return () => {
      simTimer && clearTimeout(simTimer);
    };
  }, [imageSrcs]);

  useEffect(() => {
    document.addEventListener("click", handleClickBackground);
    return () => {
      document.removeEventListener("click", handleClickBackground);
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      if (!timerRef.current) {
        playCardAnimationByIndex(0);
        timerRef.current = setInterval(() => {
          const index = cardRef.current.animatedIndex;
          const next = index + 1 >= imageSrcs.length ? 0 : index + 1;
          playCardAnimationByIndex(next);
        }, 3000);
      }
    } else {
      playCardAnimationByIndex(-1);
      timerRef.current && clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, [isIntersecting]);

  const loadAllImages = (imageList: string[][]) => {
    imageList.forEach((src: string[]) => {
      const loadGif = new Image();
      loadGif.src = src[1];
    });
  };

  const playCardAnimationByIndex = (index: number) => {
    const target = document.querySelector(`#sim-${index}`) as HTMLImageElement;
    const { hoverIndex, activeIndex } = cardRef.current;
    if (!target) return setCard(index);
    if (hoverIndex > -1 || activeIndex > -1) return;
    cardRef.current.animatedIndex = index;
    changeImgPath(target, target.dataset.src);
    setCard(index);
  };

  const closeAllCards = () => {
    const targets: NodeListOf<HTMLImageElement> =
      document.querySelectorAll(`.sim`);
    targets.forEach((target: HTMLImageElement) => {
      closeCard(target);
    });
    setCard(-1);
    setUnBlurBackground();
    cardRef.current.hoverIndex = -1;
    cardRef.current.activeIndex = -1;
  };

  const closeCard = (target: HTMLImageElement) => {
    if (target.dataset.isActive === "false") return;
    changeImgPath(target, target.dataset.thumbnail);
    setTargetToDefault(target);
  };

  const changeImgPath = (
    target: HTMLImageElement,
    newSrc: string | undefined
  ) => {
    if (newSrc) target.src = newSrc;
  };

  const getElementOffset = (target: HTMLElement) => {
    const top = target.offsetTop;
    const left = target.offsetLeft;
    const height = target.offsetHeight;
    const width = target.offsetWidth;
    return { top, left, height, width };
  };

  const hoverCard = (index: number) => {
    if (cardRef.current.activeIndex > -1) return;
    playCardAnimationByIndex(index);
    cardRef.current.hoverIndex = index;
  };

  const handleOnMouseLeave = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (cardRef.current.activeIndex > -1) return;
    cardRef.current.activeIndex = -1;
    closeAllCards();
  };

  const activeCard = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    cardRef.current.activeIndex = index;
    const target = e.currentTarget;
    setTargetToCenter(target);
    setBlurBackground();
  };

  const setTargetToCenter = (target: HTMLElement) => {
    setIsChanging(true);
    const child = getElementOffset(target);
    const parent = getElementOffset(
      document.querySelector("#container-wrapcards") as HTMLElement
    );
    const px = parent.left + parent.width / 2;
    const py = parent.top + parent.height / 2;
    const cx = parent.left + child.left + child.width / 2;
    const cy = parent.top + child.top + child.height / 2;
    target.dataset.isActive = "true";
    Object.assign(target.style, {
      transform: `translateX(${px - cx}px) translateY(${py - cy}px) scale(2)`,
      "z-index": 50,
    });
    setIsChanging(false);
  };

  const setTargetToDefault = (target: HTMLElement) => {
    setIsChanging(true);
    if (target.dataset.isActive === "false") return;
    target.dataset.isActive = "false";
    Object.assign(target.style, {
      transform: "",
      "z-index": 1,
    });
    setTimeout(() => {
      Object.assign(target.style, {
        "z-index": 0,
      });
      setIsChanging(false);
    }, animDuration);
  };

  const handleClickBackground = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".sim")) {
      setUnBlurBackground();
      closeAllCards();
    }
  };

  const setBlurBackground = () => {
    const background = document.querySelector("#blurbg-sim") as HTMLDivElement;
    Object.assign(background.style, {
      opacity: "1",
      zIndex: "2",
    });
  };

  const setUnBlurBackground = () => {
    const background = document.querySelector("#blurbg-sim") as HTMLDivElement;
    Object.assign(background.style, {
      opacity: "0",
      zIndex: "-1",
    });
  };

  const eventHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (isChanging) return;
    if (cardRef.current.hoverIndex === index) {
      activeCard(e, index);
    } else {
      hoverCard(index);
    }
  };

  return (
    <div className="w-full relative flex flex-row justify-center">
      <div
        id="container-wrapcards"
        ref={targetRef}
        className="relative w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center"
      >
        {imageSrcs.map((src: string[], index: number) => {
          return (
            <WrapCard
              className={`sim rounded-lg sm:rounded-xl${
                card === index ? " hover" : ""
              }`}
              key={`${src}-${index}`}
              onClick={(e) => eventHandler(e, index)}
              onMouseLeave={handleOnMouseLeave}
              onMouseOver={(e) => eventHandler(e, index)}
            >
              {/* Img 태그가 하나 더 존재하는 이유는 opacity를 통한 페이드 인 효과를 위함 */}
              <Img
                id={`sim-${index}`}
                className="animatedImage"
                src={src[0]}
                data-src={src[1]}
                data-thumbnail={src[0]}
                alt={`simulationImage_${index + 1}`}
              />
              <Img
                className="thumbnail"
                src={src[0]}
                alt={`simulationImage_${index + 1}`}
              />
            </WrapCard>
          );
        })}
      </div>
      <Background id="blurbg-sim" />
    </div>
  );
};
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  backdrop-filter: blur(10px);
  transition: opacity ${animDuration}ms;
`;
const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity ${animDuration}ms;
`;

const WrapCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16/10;
  overflow: hidden;
  box-shadow: #00000069 0 5px 15px -5px;
  transition: transform 0.5s;
  cursor: pointer;
  &.hover > .thumbnail {
    opacity: 0;
  }
  &:nth-child(even).hover {
    transform: scale(1.12) translateY(-15%) translateX(12%);
    box-shadow: #00000050 -10px 10px 30px -10px;
  }
  &:nth-child(odd).hover {
    transform: scale(1.12) translateY(-15%) translateX(-12%);
    box-shadow: #00000050 10px 10px 30px -10px;
  }
`;

export default Simulation;
