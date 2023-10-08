import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import useObserver from "components/useObserver";
import useDebounce from "components/useDebounce";
const Simulation = (props: { data: string[][] }) => {
  const [index, setIndex] = useState(-1); // -1: standBy, 0~N: 호버링 인덱스 번호
  const imageSrc: string[][] = props.data;

  const playNext = useCallback(() => {
    // 여기서 useCallback은 useEffect로 인해 불필요한 재렌더링이 발생되는 것을 막기 위해 사용
    setIndex(index < imageSrc.length - 1 ? index + 1 : 0);
  }, [imageSrc.length, index]);

  // 디바운스 적용
  const { status, setStatus } = useDebounce(playNext, 1000);

  useEffect(() => {
    if (status === 0) {
      const animPlaying = setTimeout(playNext, 3000);
      return () => {
        clearTimeout(animPlaying);
      };
    }
  }, [index, playNext, status]);

  const showCard = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // observer.unobserve(entry.target); // 1회성 동작 시
        setStatus(0);
        setIndex(0);
      } else {
        setStatus(-2);
        setIndex(-1);
      }
    });
  };
  const [targetRef] = useObserver(showCard, 0.7); // 시뮬레이션 컴포넌트가 뷰포트에 교차되는 경우 작동

  return (
    <div
      ref={targetRef}
      className="w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center"
    >
      {imageSrc.map((src: string[], i: number) => {
        return (
          <WrapCard
            className={`rounded-lg sm:rounded-xl ${
              index === i ? "active" : ""
            }`}
            key={i}
            onMouseOver={() => {
              setStatus(1);
              setIndex(i);
            }}
            onMouseLeave={() => {
              setStatus(-1);
              setIndex(-1);
            }}
          >
            <Img src={src[1]} alt={`simulationImage_${i + 1}`} />
            <Img
              src={src[0]}
              className="hovered"
              alt={`simulationImage_${i + 1}`}
            />
          </WrapCard>
        );
      })}
    </div>
  );
};

const WrapCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16/10;
  overflow: hidden;
  box-shadow: #00000069 0 5px 15px -5px;
  transition-duration: 0.5s;
  cursor: pointer;

  &.active .hovered {
    display: block;
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

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  &.hovered {
    display: none;
  }
`;
export default Simulation;
