import ProjectInfo from "../../ProjectInfo";
import WhatIDid from "../../WhatIDid";
import UsedTech from "../../UsedTech";

const info = {
  title: "OPENER",
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
    "webvtt형식의 자막을 파싱하고 RequestAnimationFrame API를 이용하여 실시간으로 자막을 표시하였습니다.",
    "SWR을 이용해 최신 데이터를 불러오는 무한스크롤 기능을 구현하였습니다.",
    "Azure의 Cognitive recognition API를 이용하여 발음평가 기능을 만들고, LTS 알고리즘을 적용하여 정확도를 개선하였습니다.",
    "THREE.js를 이용하여 3D 모델에 애니메이션을 적용하고, 페이지에 삽입하였습니다.",
    "로드맵 페이지를 제작하고 회원 여부에 따라 학습 가능한 Step을 표시하였습니다.",
    "피그마를 이용하여 UI 목업을 제작하였습니다.",
    "피드백을 듣고, UX를 지속적으로 개선하였습니다.",
  ],
};

const project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col justify-center min-h-[calc(100vh-60px)] pb-10">
        <div className="flex flex-col sm:flex-row max-w-[1300px]">
          <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
            <img
              src={require("./img/1.png")}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start">
            <ProjectInfo info={info} />
          </div>
        </div>
      </section>
      <section>
        <img
          src={require("./img/2.png")}
          alt=""
          className="w-full h-full max-w-[1200px]"
        />
      </section>
      <section className="w-full bg-[#fbfbfb]">
        <UsedTech tech={info.tech} />
        <WhatIDid info={info.whatIDid} />
      </section>
    </div>
  );
};

export default project;
