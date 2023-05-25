import styled from "styled-components";
import { InfoType } from "../util/share";

const ProjectInfo = (props: { info: InfoType }) => {
  const info = props.info;
  return (
    <>
      <Title>{info.title}</Title>
      <Description>{info.description}</Description>
      <div>
        <Period>
          <SubTitle>기간</SubTitle>
          {info.period}
        </Period>
        <Members>
          <SubTitle>인원</SubTitle>
          {info.memberInfo}
        </Members>
        <Function>
          <SubTitle>주요 기능</SubTitle>
          {info.mainFunction.map((func, index) => {
            return <p key={index}>{func}</p>;
          })}
        </Function>
        <Tech>
          {info.tech.map((stack, index) => {
            return <span key={index}>{stack}</span>;
          })}
        </Tech>
      </div>
    </>
  );
};

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;
const SubTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: black;
`;

const Description = styled.div`
  font-size: 1rem;
  padding-bottom: 10px;
  color: #696969;
`;
const Period = styled.div`
  font-size: 1rem;
  margin-top: 20px;
  color: #696969;
`;
const Members = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  color: #696969;
`;
const Function = styled.div`
  margin-top: 10px;
  color: #696969;
  & > p {
    font-size: 1rem;
  }
`;
const Tech = styled.div`
  margin-top: 20px;
  max-width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > span {
    font-size: 0.75rem;
    background-color: #797979;
    border-radius: 10px;
    padding: 3px 10px;
    color: white;
    margin-right: 3px;
    margin-bottom: 3px;
  }
`;
export default ProjectInfo;
