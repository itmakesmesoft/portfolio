import styled from "styled-components";
import useGuage from "../../../components/Level";
import { SkillType, ExperienceType } from "types/common";

const INFORMATION = {
  skills: [
    {
      title: "Javascript",
      content:
        "자바스크립트를 이용하여 사용자와 상호작용을 하는 이벤트를 구현할 수 있습니다. 또한, 자바스크립트의 작동 원리를 이해하고, 동시성으로 인한 문제를 처리할 수 있습니다.",
      level: 6,
    },
    {
      title: "Typescript",
      content:
        "타입스크립트를 이용하여 변수의 타입을 명시하고, 이를 통해 사전에 오류를 해결할 수 있습니다.",
      level: 4,
    },
    {
      title: "React.js",
      content:
        "리액트 라이브러리를 이용하여 중소규모의 웹페이지를 혼자서도 제작할 수 있습니다. 또한, 커스텀 리액트 훅을 만들어 코드의 재사용성과 유지보수성을 높일 수 있습니다.",
      level: 6,
    },
    {
      title: "Vue.js",
      content:
        "Vue의 라이프사이클을 이해하고 있으며, Vue 3.0의 Composition API를 이용하여 코드를 기능별로 배치 구성할 수 있습니다.",
      level: 4,
    },
    {
      title: "Python",
      content:
        "파이썬을 이용하여 자료구조를 만들고 알고리즘 문제를 해결할 수 있습니다. 또한, 웹 데이터를 크롤링하여 이를 저장하거나 데이터를 가공할 수 있습니다.",
      level: 6,
    },
    {
      title: "Django",
      content:
        "장고를 이용하여 소규모 웹페이지를 제작하거나, 게시글의 CRUD, 회원가입과 토큰 및 리프레시 토큰 발급 등의 처리를 수행하는 REST API를 제작할 수 있습니다.",
      level: 4,
    },
  ],
  certificates: [
    {
      date: "2022",
      name: "SQLD",
    },
    {
      date: "2023",
      name: "OPIC IM1",
    },
  ],
  awards: [
    {
      date: "2022",
      name: "삼성 청년 SW아카데미 우수상",
    },
    {
      date: "2023",
      name: "삼성 청년 SW아카데미 우수상",
    },
  ],
  experiences: [
    {
      date: "2016-2018",
      name: "군부대 대원관리 프로그램 제작",
    },
    {
      date: "2020",
      name: "필리핀 어학연수",
    },
    {
      date: "2021",
      name: "네이버 쇼핑 크롤링앱 제작",
    },
    {
      date: "2022-2023",
      name: "삼성 청년 SW아카데미 8기",
    },
  ],
};

export const MyExperience = () => {
  const { LevelGuage } = useGuage();

  return (
    <div className="h-[77%] w-full">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-10 font-bold font-['Bangers'] text-center sm:text-left leading-none">
        Summary
      </h1>
      <div className="grid grid-flow-col grid-rows-2 gap-6">
        <Box className="min-w-[165px] max-w-[270px]">
          <H1>SKILLS</H1>
          {INFORMATION.skills.map((skill: SkillType, index: number) => (
            <Skill content={skill.content} key={index}>
              {skill.title}
              <LevelGuage level={skill.level} />
            </Skill>
          ))}
        </Box>
        <Box>
          <H1>CERTIFICATES</H1>
          {INFORMATION.certificates.map(
            (cert: ExperienceType, index: number) => (
              <P key={index}>
                <Sub>{cert.date}</Sub>
                {cert.name}
              </P>
            )
          )}
        </Box>
        <Box>
          <H1>EXPERIENCES</H1>
          {INFORMATION.experiences.map((exp: ExperienceType, index: number) => (
            <P key={index}>
              <Sub>{exp.date}</Sub>
              {exp.name}
            </P>
          ))}
        </Box>
        <Box>
          <H1>AWARDS</H1>
          {INFORMATION.awards.map((award: ExperienceType, index: number) => (
            <P key={index}>
              <Sub>{award.date}</Sub>
              {award.name}
            </P>
          ))}
        </Box>
      </div>
    </div>
  );
};
const Skill = styled.p<{ content?: string }>`
  margin-bottom: 0.25rem;
  position: relative;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover,
  &.selected {
    background-color: white;
    font-weight: 900;
    padding: 0 10px;
  }
  &:hover:after {
    content: "${(props) => props.content}";
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
    opacity: 90%;
    z-index: 10;
    background-color: #373737;
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
`;

const Box = styled.div``;
const H1 = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: Bangers;
  position: relative;
  &:after {
    content: "";
    width: 57px;
    height: 2px;
    background: #373737;
    position: absolute;
    bottom: -7px;
    left: 0;
  }
`;

const Sub = styled.span`
  display: block;
  font-weight: 900;
`;

const P = styled.p`
  margin-bottom: 0.75rem;
`;
