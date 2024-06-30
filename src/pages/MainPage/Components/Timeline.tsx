import { useNavigate } from "react-router-dom";
import "./timeline.css";
import { Link } from "react-router-dom";

const timeline = [
  {
    type: "project",
    title: "Lee's UI Library",
    period: "2024.03 ~ 2024.07(예정)",
    description: "개발자가 자유자재로 커스텀할 수 있는 UI 라이브러리 제작",
    whatIDid: [
      "프로젝트 기획, 주도적으로 진행",
      "ContextAPI를 이용한 합성 컴포넌트를 통해 데이터 형식에 구애받지 않는 자유로운 UI 구현",
      "hover, focus, select 등 하위 옵션의 상태에 따른 Tailwindcss 스타일링이 가능하도록 구현",
      "KeyEvent 객체를 만들어 키보드를 통한 이벤트 조작 기능 구현",
      "별도의 참조 없이 컴포넌트 외부의 가장 가까운 form을 찾도록 하여, 유효성 검사 기능 구현",
      "Git과 Jira 협업 툴을 통한 태스크 및 스케쥴 관리",
    ],
    path: "https://github.com/Lees-ui-lab",
  },
  {
    type: "project",
    title: "Salary Timer",
    period: "2024.03 ~ 2024.05 (10주)",
    description: "직장인을 위한 실시간 급여 타이머",
    whatIDid: [
      "ContextAPI를 이용한 합성 컴포넌트 UI 구현",
      "로컬 스토리지 이용하여 사용자 정보 저장",
    ],
    path: "",
  },
  {
    type: "story",
    title: "백준 알고리즘 스터디 참여",
    period: "2023.11 ~ 2023.12",
  },
  {
    type: "story",
    title: "Opener 프로젝트 성능 최적화, 클린코드 리팩토링 진행",
    period: "2023.09 ~ 2023.10",
    result:
      "Lighthouse 성능 점수 40 -> 98점 / 모듈간 의존성 줄이고, 가독성 향상",
  },
  {
    type: "story",
    title: "현대 소프티어 HSAT Level 3 취득",
    period: "2023.08",
  },
  {
    type: "project",
    title: "OPENER",
    period: "2023.04 ~ 2023.05 (6주)",
    description:
      "OpenAI를 이용한 인공지능 3D 캐릭터와의 채팅, 미드 립싱크 챌린지 및 Youtube 영어 쉐도잉 학습 반응형 웹서비스",
    whatIDid: [
      "webVTT형식 자막 표시 기능 개발",
      "Azure API + LCS 알고리즘를 통해 발음평가 기능 개발",
      "THREE.js를 이용한 3D 모델 인터렉션 구현",
      "피그마를 이용한 목업 디자인 및 제작",
    ],
    path: "/project/1",
  },
  {
    type: "project",
    title: "PORTFOLIO",
    period: "2023.03 ~ now",
    description: "간단한 소개와 프로젝트를 기록해둔 사이트",
    whatIDid: null,
    path: "/project/4",
  },
  {
    type: "project",
    title: "MOIDA : 모이다",
    period: "2023.02 ~ 2023.04 (6주)",
    description:
      "야생동물과의 상생을 위한 블록체인 기반 기부, 봉사 및 NFT 보상 플랫폼",
    whatIDid: [
      "메인 페이지 스크롤 애니메이션 이벤트 구현",
      "메인, 기부/봉사 목록 및 상세, 마이페이지 제작",
      "피그마를 이용한 목업 디자인 및 제작",
    ],
    path: "/project/2",
  },
  {
    type: "project",
    title: "PROJECT SSILY",
    period: "2023.01 ~ 2023.02 (6주)",
    description:
      "WebRTC 기반 몸짓과 그림으로 소통하고, ai가 이를 맞추는 웹 게임",
    whatIDid: [
      "컴포넌트를 설계하고, 코드 컨벤션, 공통 CSS 스타일 설정",
      "Openvidu 세션 생성, 토큰을 발급 기능 및 그림판 제작",
      "피그마를 이용한 목업 디자인 및 제작",
    ],
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
      <div className="wrap-timeline">
        <div className="timeline">
          <div className="wrap-verticalbar">
            <div className="verticalbar" />
          </div>
          <section className="content">
            {timeline.map((item, index: number) => {
              if (item.type === "project")
                return (
                  <div className="project" key={`timeline-${index}`}>
                    <div className="wrap-dot">
                      <div className="dot big" />
                    </div>
                    <div className="article">
                      <h3 className="article-title">{item.title}</h3>
                      <p className="article-date">{item.period}</p>
                      <div className="article-content">
                        <p className="desc">{item.description}</p>
                        <ul>
                          {item.whatIDid?.map((li, index: number) => (
                            <li key={`list-${index}`}>{li}</li>
                          ))}
                        </ul>
                      </div>
                      {item.path && (
                        <Link
                          to={item.path}
                          className="article-link"
                          {...(item.path.slice(0, 4) === "http" && {
                            target: "_blank",
                          })}
                        >
                          <img src="/icons/link.png" alt="link" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              if (item.type === "story")
                return (
                  <div className="story" key={`timeline-${index}`}>
                    <div className="wrap-dot">
                      <div className="dot small" />
                    </div>
                    <div
                      className="article"
                      onClick={() => item.path && navigate(item.path)}
                    >
                      <p className="title">{item.title}</p>
                      <p className="article-date">{item.period}</p>
                    </div>
                  </div>
                );
              return "";
            })}
          </section>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
