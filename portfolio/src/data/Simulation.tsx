import styled from "styled-components";

const Simulation = (props: { data: string[][] }) => {
  const imageSrc: string[][] = props.data;

  return (
    <div className="w-[95%] max-w-[700px] py-[10rem] px-4 grid grid-cols-2">
      {imageSrc.map((src: string[], i: number) => (
        <WrapCard key={i} className="">
          <Inner className="rounded-lg lg:rounded-xl w-[calc(100%-1rem)] h-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] sm:h-[calc(100%-1.5rem)] lg:w-[calc(100%-2rem)] lg:h-[calc(100%-2rem)]">
            <Img
              src={src[0]}
              className="hovered"
              alt={`simulationImage_${i + 1}`}
            />
            <Img
              src={src[1]}
              className="thumbnail"
              alt={`simulationImage_${i + 1}`}
            />
          </Inner>
        </WrapCard>
      ))}
    </div>
  );
};

const WrapCard = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16/10;

  &:hover > div {
    width: 100%;
    height: 100%;
    & > .thumbnail {
      display: none;
    }
    & > .hovered {
      display: block;
    }
  }
  &:nth-child(even):hover > div {
    transform: translateY(-25%) translateX(10%);
    box-shadow: rgba(0, 0, 0, 0.3) -16px 10px 50px 0px;
  }
  &:nth-child(odd):hover > div {
    transform: translateY(-25%) translateX(-10%);
    box-shadow: rgba(0, 0, 0, 0.3) 16px 10px 50px 0px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  &.thumbnail {
    display: block;
  }
  &.hovered {
    display: none;
  }
`;
const Inner = styled.div`
  overflow: hidden;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 50%) 8px 17px 50px -10px;
  transition: 0.5s all;
  margin: 0 auto;
`;
export default Simulation;
