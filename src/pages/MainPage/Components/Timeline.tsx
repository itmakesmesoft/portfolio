import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const timeline = [
  {
    title: "OPENER",
    period: "2023.04 ~ 2023.05 (6주)",
    role: "frontEnd Developer, UI/UX designer",
    description:
      "OpenAI를 이용한 인공지능 3D 캐릭터와의 채팅, 미드 립싱크 챌린지 및 Youtube 영어 쉐도잉 학습 반응형 웹서비스",
    whatIDid: [
      "requestAnimationFrame API를 이용한 webVTT형식 자막 표시 기능 개발",
      "Azure의 Cognitive recognition API에 LCS 알고리즘을 적용한 발음평가 기능 개발",
      "THREE.js를 이용한 3D 모델 인터렉션 구현",
      "피그마를 이용한 목업 디자인 및 제작",
    ],
    tech: [
      "Next",
      "TypeScript",
      "SWR",
      "Azure",
      "OpenAi",
      "Three.js",
      "FastApi",
    ],
    path: "/project/1",
  },
  {
    title: "PORTFOLIO",
    period: "2023.03 ~ now",
    role: "FrontEnd Developer",
    description: "간단한 소개와 프로젝트를 기록해둔 사이트",
    whatIDid: null,
    tech: ["React", "TypeScript"],
    path: "/project/4",
  },
  {
    title: "MOIDA : 모이다",
    period: "2023.02 ~ 2023.04 (6주)",
    role: "frontEnd Developer, UI/UX designer",
    description:
      "야생동물과의 상생을 위한 블록체인 기반 기부, 봉사 및 NFT 보상 플랫폼",
    whatIDid: [
      "메인 페이지 스크롤 애니메이션 이벤트 구현",
      "메인페이지, 기부/봉사 목록 및 상세페이지, 마이페이지 제작 담당",
      "피그마를 이용한 목업 디자인 및 제작",
    ],
    tech: ["React", "ReactQuery", "JavaScript"],
    path: "/project/2",
  },
  {
    title: "PROJECT SSILY",
    period: "2023.01 ~ 2023.02 (6주)",
    role: "Lead frontEnd Developer, UI/UX designer",
    description:
      "WebRTC 기반 몸짓과 그림으로 소통하고, ai가 이를 맞추는 웹 게임",
    whatIDid: [
      "코드 컨벤션 설정과 컴포넌트 설계, 공통 CSS 스타일을 통한 중복 코드 제거",
      "오픈비두 세션 생성 및 토큰을 발급 기능 및 그림판 제작",
      "피그마를 이용한 목업 디자인 및 제작",
    ],
    tech: ["Vue3", "WebRTC", "OpenVidu", "JavaScript"],
    path: "/project/3",
  },
];

const Timeline = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[5rem]">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-5 font-bold font-['Bangers'] text-center">
        career timeline
      </h1>
      <WrapTimeline>
        <WrapBar>
          <WrapVerticalBar>
            <VerticalBar />
          </WrapVerticalBar>
          <Content>
            {timeline.map((item, index: number) => (
              <Section key={`timeline-${index}`}>
                <Article onClick={() => navigate(item.path)}>
                  <Title>{item.title}</Title>
                  <Date>{item.period}</Date>
                  <Role>{item.role}</Role>
                  <Body>
                    <p className="subTitle">Description</p>
                    <p>{item.description}</p>
                    <p className="subTitle">what I Did</p>
                    <ul>
                      {item.whatIDid?.map((li, index: number) => (
                        <li key={`list-${index}`}>{li}</li>
                      ))}
                    </ul>
                    <p className="subTitle">tech</p>
                    {item.tech.map((t, index: number) => (
                      <span className="techItem" key={`tech-${index}`}>
                        {t}
                      </span>
                    ))}
                  </Body>
                </Article>
              </Section>
            ))}
          </Content>
        </WrapBar>
      </WrapTimeline>
    </div>
  );
};
export default Timeline;

const WrapTimeline = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  align-items: center;
}
`;

const WrapBar = styled.div`
  position: relative;
  margin-bottom: 2rem;

  @media screen and (min-width: 640px) {
    width: 100%;
    max-width: 1000px;
  }
`;
const WrapVerticalBar = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media screen and (min-width: 640px) {
    justify-content: center;
  }
`;
const VerticalBar = styled.div`
  height: 100%;
  background: rgb(211 211 211);
  border-radius: 25px;
  width: 30px;
  @media (min-width: 640px) {
    width: 40px;
  }
`;

const Content = styled.section`
  position: relative;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  padding: 2.5px 0;
  & > div {
    width: 100%;
    transform: translateX(2.5px);
  }
  & > div:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 640px) {
    padding: 5px 0;
    & > div {
      width: 50%;
      margin-bottom: 25px;
      transform: translateX(5px);
    }
    & > div:nth-child(even) {
      transform: translateX(calc(100% - 15px));
    }
    & > div:nth-child(odd) {
      transform: translateX(15px);
    }
    & > div:nth-child(even) {
      flex-direction: row;
    }
    & > div:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-items: flex-start;
  letter-spacing: -0.3px;
  margin-bottom: 1rem;

  &::before {
    transition: all 0.2s;
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background: white;
    box-shadow: #00000033 1px 2px 5px;
    z-index: 1;
    flex: none;

    @media (min-width: 640px) {
      width: 30px;
      height: 30px;
    }
  }

  &:hover > article {
    transform: scale(1.01) translateY(-10px);
    box-shadow: 0px 13px 10px -10px #0000006e;
  }
  &:hover::before {
    transform: scale(1.01) translateY(-10px);
    box-shadow: #00000033 1px 5px 5px;
  }
`;

const Article = styled.article`
  width: 100%;
  background: rgb(255 255 255 / 50%);
  border-radius: 15px 15px 30px 30px;
  padding: 10px 25px 25px 25px;
  box-shadow: 0px 5px 10px -7px #0000006e;
  transition: all 0.2s;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
`;
const Date = styled.h2`
  font-size: 0.9rem;
  line-height: 1.15;
`;
const Role = styled.p`
  font-size: 0.9rem;
`;
const Body = styled.div`
  margin-top: 0.5rem;

  & > .subTitle {
    margin-top: 1rem;
    font-weight: 900;
    font-size: 1.125rem;
  }

  & > .techItem::after {
    display: inline-block;
    content: ",";
    margin-right: 0.2rem;
  }
  & > .techItem:last-child::after {
    display: inline-block;
    content: "";
  }

  & li::before {
    display: inline-block;
    content: "•";
    margin-right: 0.3rem;
  }
`;
