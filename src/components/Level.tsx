import styled from "styled-components";

const LevelGuage = (props: { level: number; size?: number }) => {
  return (
    <WrapGuage size={props?.size}>
      {Array(10)
        .fill(1)
        .map((_, index: number) => (
          <Gauge key={`level-${index}`} level={props.level - index} />
        ))}
    </WrapGuage>
  );
};
export default LevelGuage;

const WrapGuage = styled.span`
  height: ${(props: { size?: number }) => props.size || "18px"};
  width: auto;
  display: inline-box;
  position: relative;
  padding: 2px;
`;
const Gauge = styled.span`
  display: inline-box;
  width: 4px;
  height: 100%;
  margin: 0 1px;
  background-color: ${(props: { level: number }) =>
    props.level >= 1 ? "#A0C846" : "#D9D9D9"};
`;
