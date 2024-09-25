import styled from "styled-components";
import { ContentDetailType } from "types/common";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";

const Information = (props: { info: ContentDetailType }) => {
  const info = props.info;
  return (
    <>
      <hr className="w-full border-[#00000020] block sm:hidden mb-10 sm:mb-0" />
      <Title className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[2rem] sm:leading-[2.5rem] lg:leading-[3rem]">
        {info.title}
      </Title>
      <Description>{info.description}</Description>
      <div className="w-full">
        <Period className="text-sm sm:text-base">
          <SubTitle>기간</SubTitle>
          {info.period}
        </Period>
        {info.memberInfo && (
          <Members className="text-sm sm:text-base">
            <SubTitle>인원</SubTitle>
            {info.memberInfo}
          </Members>
        )}
        <Function className="text-sm sm:text-base">
          <SubTitle>주요 기능</SubTitle>
          {info.mainFunction.map((func, index) => (
            <p key={`${func}-${index}`}>{func}</p>
          ))}
        </Function>
        <ButtonGroup>
          <Button
            href={props.info.gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={"2rem"} className="mr-2" /> 코드 보기
          </Button>
        </ButtonGroup>
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
const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid #00000020;
`;
const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.9rem;
  border-radius: 0.6rem;
  background: #50a78f;
  color: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  &:hover {
    background: #43b495;
  }
`;
export default Information;
