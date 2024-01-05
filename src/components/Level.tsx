import { useState, useEffect } from "react";
import styled from "styled-components";

const useGuage = () => {
  const LevelGuage = (props: { level: number; size?: number }) => {
    const [level, setLevel] = useState(0);
    useEffect(() => {
      setLevel(props.level);
    }, [props]);
    return (
      <WrapGuage size={props?.size}>
        {Array(10).map((index: number) => (
          <Gauge level={level - index} />
        ))}
        {/* <Gauge level={level - 0} />
        <Gauge level={level - 1} />
        <Gauge level={level - 2} />
        <Gauge level={level - 3} />
        <Gauge level={level - 4} />
        <Gauge level={level - 5} />
        <Gauge level={level - 6} />
        <Gauge level={level - 7} />
        <Gauge level={level - 8} />
        <Gauge level={level - 9} /> */}
      </WrapGuage>
    );
  };

  return { LevelGuage };
};

const WrapGuage = styled.span`
  height: ${(props: { size?: number }) => props.size || "18px"};
  width: auto;
  display: inline-box;
  float: right;
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
export default useGuage;
