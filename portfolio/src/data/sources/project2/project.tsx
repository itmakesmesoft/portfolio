import ProjectInfo from "../../ProjectInfo";

const info = {
  title: "MOIDA: 모이다",
  description: "간략한 소개",
  period: "23.02.28 ~ 23.04.07 (6주)",
  memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
  mainFunction: ["기능1", "기능2", "기능3"],
  tech: ["React.js", "ReactQuery", "JavaScript"],
};

const project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col justify-center min-h-[calc(100vh-60px)] py-10">
        <div className="flex flex-col sm:flex-row max-w-[1300px]">
          <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
            <img
              src={require("./img/3.png")}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-center sm:items-start">
            <ProjectInfo info={info} />
          </div>
        </div>
      </section>
      <section className="bg-[#a0c846] w-full flex flex-col items-center">
        <img
          src={require("./img/2.png")}
          alt=""
          className="w-full h-full max-w-[1300px]"
        />
        <img
          src={require("./img/4.png")}
          alt=""
          className="w-full h-full max-w-[1300px]"
        />
      </section>
    </div>
  );
};

export default project;
