export const PROJECTS_INFO = {
  list: [
    {
      summary: {
        src: "/images/opener.webp",
        alt: "OPENER",
        path: "/project/1",
        description:
          "영상을 따라하고, AI와 소통하며 회화 능력을 향상시키는 영어학습 서비스",
      },
      detail: {
        title: "OPENER",
        thumbnail: require("assets/img/project1_1.webp"),
        lowThumbnail: require("assets/img/project1_1_low.webp"),
        description:
          "OpenAI를 이용한 인공지능 3D 캐릭터와의 채팅, 미드 립싱크 챌린지 및 Youtube 영어 쉐도잉 학습 반응형 웹서비스",
        period: "23.04.10 ~ 23.05.19 (6주)",
        memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
        mainFunction: [
          "쉐도잉 영상 구간 반복 재생",
          "영상 북마크",
          "발음 체크 및 평가 점수 제공",
          "협업 필터링 기반 문장 추천",
          "학습 로드맵 제공",
          "영상 촬영 및 립싱크 챌린지 제작 기능",
          "선택한 주제와 관련된 AI 영어 채팅",
          "유저들과의 영어 채팅 게임",
        ],
        gitHub: "https://github.com/itmakesmesoft/Opener",
        link: "",
        tech: [
          "Nextjs",
          "TypeScript",
          "SWR",
          "Azure",
          "OpenAi",
          "Threejs",
          "FastApi",
        ],
        whatIDid: [
          "쉐도잉 페이지 개발을 담당했습니다.",
          "webVTT형식의 자막을 파싱하고 requestAnimationFrame API를 이용하여 실시간으로 자막을 표시하였습니다.",
          "SWR을 이용해 최신 데이터를 불러오는 무한스크롤 기능을 구현하였습니다.",
          "Azure의 Cognitive recognition API를 이용하여 발음평가 기능을 만들고, LCS 알고리즘을 이용하여 발음한 어휘가 강조되도록 구현하였습니다.",
          "THREE.js를 이용하여 3D 모델에 애니메이션을 적용하고, 페이지에 삽입하였습니다.",
          "로드맵 페이지를 제작하고 회원 여부에 따라 학습 가능한 Step을 표시하였습니다.",
          "피그마를 이용하여 UI 목업을 제작하였습니다.",
          "피드백을 듣고, UX를 지속적으로 개선하였습니다.",
        ],
      },
    },
    {
      summary: {
        src: "/images/moida.webp",
        alt: "모이다",
        path: "/project/2",
        description:
          "야생동물과의 상생을 위한 블록체인 기반 기부, 봉사 및 NFT 보상 플랫폼",
      },
      detail: {
        title: "MOIDA: 모이다",
        thumbnail: require("assets/img/project2_1.webp"),
        lowThumbnail: require("assets/img/project2_1_low.webp"),
        description:
          "야생동물과의 상생을 위한 블록체인 기반 기부, 봉사 및 NFT 보상 플랫폼",
        period: "23.02.28 ~ 23.04.07 (6주)",
        memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
        mainFunction: [
          "블록 체인을 활용한 기부",
          "카카오페이를 통한 포인트 충전",
          "기부 또는 봉사 시 NFT 보상 제공",
        ],
        gitHub: "https://github.com/itmakesmesoft/Moida",
        link: "",
        tech: ["Reactjs", "ReactQuery", "JavaScript"],
        simImageSrc: [
          [
            require("assets/img/project2_3_thumbnail.webp"),
            require("assets/img/project2_3.webp"),
          ],
          [
            require("assets/img/project2_4_thumbnail.webp"),
            require("assets/img/project2_4.webp"),
          ],
          [
            require("assets/img/project2_5_thumbnail.webp"),
            require("assets/img/project2_5.webp"),
          ],
          [
            require("assets/img/project2_6_thumbnail.webp"),
            require("assets/img/project2_6.webp"),
          ],
          [
            require("assets/img/project2_7_thumbnail.webp"),
            require("assets/img/project2_7.webp"),
          ],
          [
            require("assets/img/project2_8_thumbnail.webp"),
            require("assets/img/project2_8.webp"),
          ],
        ],
        whatIDid: [
          "메인페이지, 기부/봉사 목록페이지, 기부/봉사 상세페이지, 마이페이지 제작을 담당하였습니다.",
          "css변수와 animation delay를 이용해 메인 페이지의 스크롤 이벤트를 구현하였습니다.",
          "피그마를 이용하여 UI 목업을 제작하였습니다.",
          "피드백을 듣고, UX를 지속적으로 개선하였습니다.",
        ],
      },
    },
    {
      summary: {
        src: "/images/ssily.webp",
        alt: "PROJECT SSILY",
        path: "/project/3",
        description:
          "상대방의 몸짓을 보고 그림을 그려, AI가 이를 맞추면 점수를 얻는 게임",
      },
      detail: {
        title: "PROJECT SSILY",
        thumbnail: require("assets/img/project3_1.webp"),
        lowThumbnail: require("assets/img/project3_1_low.webp"),
        description:
          "WebRTC 기반 몸짓과 그림으로 소통하고, ai가 이를 맞추는 웹 게임",
        period: "23.01.09 ~ 23.02.17 (6주)",
        memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
        mainFunction: [
          "그림판 기능",
          "openvidu를 이용한 화상 채팅",
          "실시간 문자 소통",
          "방 생성 및 나가기",
        ],
        gitHub: "https://github.com/PROJECT-SSILY/SSILY",
        link: "",
        tech: ["Vuejs", "WebRTC", "OpenVidu", "JavaScript"],
        whatIDid: [
          "세션을 생성하고, 토큰을 발급하는 기능을 구현했습니다",
          "그림판을 제작하고, 생성된 그림을 상대방에게 전달하는 기능을 구현했습니다.",
          "피그마를 이용해 목업을 제작하고 이를 구현했습니다.",
          "피드백을 듣고, UX를 지속적으로 개선하였습니다.",
        ],
      },
    },
    {
      summary: {
        src: "/images/portfolio.webp",
        alt: "PORTFOLIO",
        path: "/project/4",
        description: "제 포트폴리오 입니다.",
      },
      detail: {
        title: "PORTFOLIO",
        thumbnail: require("assets/img/project4_1.webp"),
        lowThumbnail: require("assets/img/project4_1_low.webp"),
        description: "",
        period: "23.03.01 ~ 현재",
        mainFunction: [
          "프로젝트 소개",
          "링크 및 영상 제공",
          "반응형 웹(pc, tablet, mobile)",
        ],
        gitHub: "https://github.com/itmakesmesoft/portfolio",
        link: "",
        tech: ["Reactjs", "TypeScript"],
        simImageSrc: [
          [
            require("assets/img/project4_2_thumbnail.webp"),
            require("assets/img/project4_2.webp"),
          ],
          [
            require("assets/img/project4_4_thumbnail.webp"),
            require("assets/img/project4_3.webp"),
          ],
          [
            require("assets/img/project4_4_thumbnail.webp"),
            require("assets/img/project4_4.webp"),
          ],
          [
            require("assets/img/project4_5_thumbnail.webp"),
            require("assets/img/project4_5.webp"),
          ],
          [
            require("assets/img/project4_6_thumbnail.webp"),
            require("assets/img/project4_6.webp"),
          ],
          [
            require("assets/img/project4_7_thumbnail.webp"),
            require("assets/img/project4_7.webp"),
          ],
        ],
        whatIDid: [
          "IntersectionObserver를 사용하여 Card 및 Hovering Effect 제작하였습니다",
          "라우트 기반 코드 분할을 통해 번들 사이즈를 최적화하였습니다.",
          "React Portal을 활용하여 범용성 높은 커스텀 모달 훅을 제작하였습니다.",
          "메인 페이지의 폰트를 미리 불러오도록 하여 FOUT 현상을 방지하였습니다.",
          "폰트와 이미지를 최적화하여 로딩 성능을 개선하였습니다",
          "tailwindCSS와 StyledComponent를 이용하여 반응형 웹을 제작하였습니다",
        ],
      },
    },
  ],
};
