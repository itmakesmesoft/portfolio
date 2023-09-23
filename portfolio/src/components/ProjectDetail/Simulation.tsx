import styled from "styled-components";
import { useEffect, useState } from "react";

const Simulation = (props: { data: string[][] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index === -1) {
      const debounce = setTimeout(() => {
        setIndex(0);
      }, 1000);
      return () => {
        console.log("clear");
        clearTimeout(debounce);
      };
    }
  }, [index]);
  const imageSrc: string[][] = props.data;

  return (
    <div className="w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center">
      {imageSrc.map((src: string[], i: number) => {
        return (
          <WrapCard
            className={`rounded-lg sm:rounded-xl ${
              index === i ? "active" : ""
            }`}
            key={i}
            onMouseOver={() => setIndex(i)}
            onMouseLeave={() => setIndex(-1)}
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
