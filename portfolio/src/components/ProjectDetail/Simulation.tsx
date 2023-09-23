import styled from "styled-components";

const Simulation = (props: { data: string[][] }) => {
  const imageSrc: string[][] = props.data;

  return (
    <div className="w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center">
      {imageSrc.map((src: string[], i: number) => {
        return (
          <WrapCard key={i} className="rounded-lg sm:rounded-xl">
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

  &:hover .hovered {
    display: block;
  }
  &:nth-child(even):hover {
    transform: scale(1.12) translateY(-15%) translateX(12%);
    box-shadow: #00000050 -10px 10px 30px -10px;
  }
  &:nth-child(odd):hover {
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
