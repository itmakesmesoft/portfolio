import styled from "styled-components";
import ProjectInfo from "../../ProjectInfo";

type InfoType = {
  title: string;
  description: string;
  start: string;
  end: string;
  memberInfo: string;
  mainFunction: string[];
  tech: string[];
};

const info = {
  title: "OPENER",
  description: "간략한 소개",
  period: "23.04.10 ~ 23.05.19 (6주)",
  memberInfo: "6명 (프론트엔드 3명, 백엔드 3명)",
  mainFunction: ["기능1", "기능2", "기능3"],
  tech: ["Next.js", "SWR", "Azure", "OpenAi", "Three.js", "FastApi"],
};

const project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col sm:flex-row max-w-[1300px]">
        <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
          <img src={require("./img/1.png")} alt="" className="w-full h-auto" />
        </div>
        <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-center sm:items-start">
          <ProjectInfo info={info} />
        </div>
      </section>
      <section>
        <img
          src={require("./img/2.png")}
          alt=""
          className="w-full h-full max-w-[1300px]"
        />
      </section>
    </div>
  );
};

export default project;
