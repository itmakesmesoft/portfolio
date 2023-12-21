import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import useObserver from "components/useObserver";
import useDebounce from "components/useDebounce";
const Simulation = (props: { data: string[][] }) => {
  const [selected, setSelected] = useState(-1); // -1: standBy, 0~N: 호버링 인덱스 번호
  const imageSrc: string[][] = props.data;
  // const [imageSrc, setImageSrc] = useState(props.data);

  const playNext = useCallback(() => {
    // useCallback => useEffect로 인해 불필요한 재렌더링이 발생되는 것을 막기 위해 사용
    setSelected(selected < imageSrc.length - 1 ? selected + 1 : 0);
  }, [imageSrc.length, selected]);

  // 디바운스 적용
  const { status, setStatus } = useDebounce(playNext, 1000);

  useEffect(() => {
    if (status === 0) {
      const animPlaying = setTimeout(playNext, 3000);
      return () => {
        clearTimeout(animPlaying);
      };
    }
  }, [playNext, status]);

  const showCard = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // observer.unobserve(entry.target); // 1회성 동작 시
        setStatus(0);
        setSelected(0);
      } else {
        setStatus(-2);
        setSelected(-1);
      }
    });
  };

  useEffect(() => {
    handleOnActive(selected);
    handleOnInActive();
  }, [selected]);

  const handleOnActive = (selected: number) => {
    const target = document.querySelector<HTMLImageElement>(".active > .gif");
    if (target && target.dataset.src) {
      loadImage(target.dataset.src);
      changeImgPath(target, target.dataset.src);
      setSelected(selected);
    }
  };

  const handleOnInActive = () => {
    const target =
      document.querySelectorAll<HTMLImageElement>(".inactive > .gif");
    if (target) {
      target.forEach((el: HTMLImageElement) => {
        changeImgPath(el, el.dataset.thumbnail);
      });
    }
  };

  const [targetRef] = useObserver(showCard, 0.7); // 시뮬레이션 컴포넌트가 뷰포트에 교차되는 경우 작동

  const loadImage = (dataSrc: string) => {
    const loadImg = new Image();
    loadImg.src = dataSrc;
  };

  const changeImgPath = (target: HTMLImageElement, newSrc: any) => {
    target.src = newSrc;
  };

  const handleOnMouseOver = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => {
    if (e.currentTarget.dataset.src) {
      loadImage(e.currentTarget.dataset.src);
      changeImgPath(e.currentTarget, e.currentTarget.dataset.src);
      setSelected(index);
      setStatus(1);
    }
  };

  const handleOnMouseLeave = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    changeImgPath(e.currentTarget, e.currentTarget.dataset.thumbnail);
    setSelected(-1);
    setStatus(-1);
  };

  return (
    <div
      ref={targetRef}
      className="w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center"
    >
      {imageSrc.map((src: string[], index: number) => {
        return (
          <WrapCard
            className={`rounded-lg sm:rounded-xl ${
              selected === index ? "active" : "inactive"
            }`}
            key={`${src}-${index}`}
          >
            <Img src={src[0]} alt={`simulationImage_${index + 1}`} />
            <Img
              className="gif"
              onMouseOver={(e) => handleOnMouseOver(e, index)}
              onMouseLeave={handleOnMouseLeave}
              src={src[0]}
              data-src={src[1]}
              data-thumbnail={src[0]}
              alt={`simulationImage_${index + 1}`}
            />
          </WrapCard>
        );
      })}
    </div>
  );
};

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 300ms;
  &.gif {
    opacity: 0;
  }
`;

const WrapCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16/10;
  overflow: hidden;
  box-shadow: #00000069 0 5px 15px -5px;
  transition-duration: 0.5s;
  cursor: pointer;

  &.active > .gif {
    opacity: 1;
  }

  &:nth-child(even).active {
    transform: scale(1.12) translateY(-15%) translateX(12%);
    box-shadow: #00000050 -10px 10px 30px -10px;
  }
  &:nth-child(odd).active {
    transform: scale(1.12) translateY(-15%) translateX(-12%);
    box-shadow: #00000050 10px 10px 30px -10px;
  }
`;

export default Simulation;
