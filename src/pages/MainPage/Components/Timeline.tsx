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
    teck: [
      "Next",
      "TypeScript",
      "SWR",
      "Azure",
      "OpenAi",
      "Three.js",
      "FastApi",
    ],
    link: "",
  },
  {
    title: "PORTFOLIO",
    period: "2023.03 ~ now",
    role: "FrontEnd Developer",
    description: "간단한 소개와 프로젝트를 기록해둔 사이트",
    whatIDid: null,
    teck: ["React", "TypeScript"],
    link: "",
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
    teck: ["React", "ReactQuery", "JavaScript"],
    link: "",
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
    teck: ["Vue3", "WebRTC", "OpenVidu", "JavaScript"],
    link: "",
  },
];

const Timeline = () => {
  return (
    <WrapTimeline>
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-5 font-bold font-['Bangers'] text-center">
        career timeline
      </h1>
      <WrapBar className="max-h-[500px] sm:max-h-[700px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#eaeaea9c] backdrop-blur z-20 flex flex-col justify-center items-center">
          <img
            src="/icons/under-construction.png"
            alt=""
            width="300"
            className="w-[150px] sm:w-[300px]"
          />

          <p className="text-[3rem] sm:text-[5rem] text-[#424242] font-[900]">
            공사 중
          </p>
          <p className="text-[1rem] sm:text-[1.5rem] text-center">
            보다 더 나은 경험을 위해 공사를 진행중입니다. <br />
            빠른 시일 내 공사를 마무리하겠습니다.
          </p>
          <p className="absolute bottom-3 right-0 text-[#0000005e] text-[0.7rem]">
            Under construction icons created by Freepik -{" "}
            <a
              href="https://www.flaticon.com/free-icons/under-construction"
              title="under construction icons"
            >
              Flaticon
            </a>
          </p>
        </div>
        <WrapVerticalBar>
          <VerticalBar />
        </WrapVerticalBar>
        <Content>
          {timeline.map((item) => (
            <Section>
              <Article>
                <Title>{item.title}</Title>
                <Date>{item.period}</Date>
                <Role>{item.role}</Role>
                <Body>
                  <p>{item.description}</p>
                  <p>what I Did</p>
                  <ul>
                    {item.whatIDid?.map((li) => (
                      <li>{li}</li>
                    ))}
                  </ul>
                  <p>teck</p>
                  {item.teck.map((t) => (
                    <span>{t}</span>
                  ))}
                </Body>
              </Article>
            </Section>
          ))}
        </Content>
      </WrapBar>
    </WrapTimeline>
  );
};
export default Timeline;

const WrapTimeline = styled.div`
  display: flex;
  // padding: 0 2rem;
  flex-direction: column;
  align-items: center;
}
`;

const WrapBar = styled.div`
  position: relative;
  margin-bottom: 2rem;
  @media screen and (min-width: 640px) {
    width: 100%;
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
  width: 40px;
  height: 100%;
  background: #c6c6c6;
  border-radius: 25px;
`;

const Content = styled.section`
  position: relative;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  & > div {
    width: 100%;
    transform: translateX(5px);
  }
  @media screen and (min-width: 640px) {
    & > div {
      width: 50%;
      margin-bottom: 25px;
    }
    & > div:last-child {
      margin-bottom: 0;
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

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: white;
    box-shadow: #00000033 1px 2px 5px;
    z-index: 1;
    flex: none;
  }
`;

const Article = styled.article`
  width: 100%;
  background: #d9d9d9;
  border-radius: 30px;
  padding: 15px 25px;
`;

const Title = styled.h1`
  font-size: 1.35rem;
  font-weight: 600;
`;
const Date = styled.h2`
  font-size: 0.9rem;
  line-height: 1.15;
`;
const Role = styled.p`
  font-size: 0.9rem;
`;
const Body = styled.div``;
