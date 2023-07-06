import WhatIDid from "../../WhatIDid";
import ProjectInfo from "../../ProjectInfo";
import UsedTech from "../../UsedTech";

const info = {
  title: "MOIDA: 모이다",
  description:
    "야생동물과의 상생을 위한 블록체인 기반 기부, 봉사 및 NFT 보상 플랫폼",
  period: "23.02.28 ~ 23.04.07 (6주)",
  memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
  mainFunction: [
    "블록 체인을 활용한 기부",
    "카카오페이를 통한 포인트 충전",
    "기부 또는 봉사 시 NFT 보상 제공",
  ],
  tech: ["Reactjs", "ReactQuery", "JavaScript"],
  whatIDid: [
    "메인페이지, 기부/봉사 목록페이지, 기부/봉사 상세페이지, 마이페이지 제작을 담당하였습니다.",
    "css변수와 animation delay를 이용해 메인 페이지의 스크롤 이벤트를 구현하였습니다.",
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
              src={require("./img/3.png")}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start">
            <ProjectInfo info={info} />
          </div>
        </div>
      </section>
      <section className="bg-[#a0c846] w-full flex flex-col items-center">
        <img
          src={require("./img/2.png")}
          alt=""
          className="w-full h-full max-w-[1000px]"
        />
        <img
          src={require("./img/4.png")}
          alt=""
          className="w-full h-full max-w-[1300px]"
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
