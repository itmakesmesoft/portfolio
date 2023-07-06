import styled from "styled-components";
import { InfoType } from "../util/share";

const ProjectInfo = (props: { info: InfoType }) => {
  const info = props.info;
  return (
    <>
      <hr className="w-full border-[#00000020] block sm:hidden mb-10 sm:mb-0" />
      <Title className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
        {info.title}
      </Title>
      <Description>{info.description}</Description>
      <div>
        <Period className="text-sm sm:text-base">
          <SubTitle>기간</SubTitle>
          {info.period}
        </Period>
        <Members className="text-sm sm:text-base">
          <SubTitle>인원</SubTitle>
          {info.memberInfo}
        </Members>
        <Function className="text-sm sm:text-base">
          <SubTitle>주요 기능</SubTitle>
          {info.mainFunction.map((func, index) => {
            return <p key={index}>{func}</p>;
          })}
        </Function>
      </div>
    </>
  );
};

const Title = styled.h1`
  font-weight: 700;
`;
const SubTitle = styled.h2`
  font-weight: 700;
  color: black;
`;

const Description = styled.div`
  padding-bottom: 10px;
  color: #696969;
`;
const Period = styled.div`
  margin-top: 20px;
  color: #696969;
`;
const Members = styled.div`
  margin-top: 10px;
  color: #696969;
`;
const Function = styled.div`
  margin-top: 10px;
  color: #696969;
`;
export default ProjectInfo;
