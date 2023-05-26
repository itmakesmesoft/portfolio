import ProjectInfo from "../../ProjectInfo";

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
    "Next.js",
    "TypeScript",
    "SWR",
    "Azure",
    "OpenAi",
    "Three.js",
    "FastApi",
  ],
  whatIDid: ["1", "2", "3", "4"],
};

const project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col justify-center min-h-[calc(100vh-60px)] py-10">
        <div className="flex flex-col sm:flex-row max-w-[1300px]">
          <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
            <img
              src={require("./img/1.png")}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-center sm:items-start">
            <ProjectInfo info={info} />
          </div>
        </div>
      </section>
      <section className="w-full min-h-[100vh] bg-white">
        <div className="w-full h-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between py-[7rem]">
          <div className="w-[50%] h-[250px] p-4 flex flex-col justify-center">
            <p className="text-[2rem] text-center font-extrabold ">
              What I did
            </p>
          </div>
          <div className="w-[50%] h-[250px] p-4">
            <div
              className={`w-full h-full rounded-xl shadow-xl border bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2020/03/13/08/22/brain-4927267_1280.jpg')]`}
            ></div>
          </div>
          {info.whatIDid.map((content, index) => {
            return (
              <div key={index} className="w-[50%] h-[250px] p-4">
                <div
                  className={`w-full h-full rounded-xl shadow-xl p-4 flex flex-col justify-center text-center ${
                    index % 3 === 0
                      ? "bg-[#c5c5c5] text-white border-none"
                      : "bg-[#f8f8f8] border"
                  }`}
                >
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <img
          src={require("./img/2.png")}
          alt=""
          className="w-full h-full max-w-[1200px]"
        />
      </section>
    </div>
  );
};

export default project;
