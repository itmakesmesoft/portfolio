import ProjectInfo from "../../ProjectInfo";

const info = {
  title: "PROJECT SSILY",
  description: "WebRTC 기반 몸짓과 그림으로 소통하고, ai가 이를 맞추는 웹 게임",
  period: "23.01.09 ~ 23.02.17 (6주)",
  memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
  mainFunction: [
    "그림판 기능",
    "openvidu를 이용한 화상 채팅",
    "실시간 문자 소통",
    "방 생성 및 나가기",
  ],
  tech: ["Vue.js", "WebRTC", "OpenVidu", "JavaScript"],
};

const project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col justify-center min-h-[calc(100vh-60px)] py-10">
        <div className="flex flex-col sm:flex-row max-w-[1300px]">
          <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
            <img
              src={require("./img/2.png")}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-center sm:items-start">
            <ProjectInfo info={info} />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <img
          src={require("./img/1.png")}
          alt=""
          className="w-full h-full max-w-[1300px]"
        />
      </section>
    </div>
  );
};

export default project;
