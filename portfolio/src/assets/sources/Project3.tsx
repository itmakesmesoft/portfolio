import WhatIDid from "pages/DetailPage/components/WhatIDid";
import ProjectInfo from "pages/DetailPage/components/ProjectInfo";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { contentType } from "types/common";

const Project = (props: { info: contentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col justify-center min-h-[calc(100vh-45px)] pb-10">
        <div className="flex flex-col sm:flex-row max-w-[1300px]">
          <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
            <img
              src={require("assets/img/project3_1.webp")}
              alt="thumbnail"
              width="770px"
              height="592.3px"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start">
            <ProjectInfo info={info.detail} />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <img
          src={require("assets/img/project3_2.webp")}
          alt=""
          width="1300"
          height="1000"
          className="w-full h-full max-w-[1300px]"
        />
        <img
          src={require("assets/img/project3_3.webp")}
          alt=""
          className="w-full h-full max-w-[700px] sm:rounded-xl sm:mb-10"
        />
      </section>
      <section className="w-full bg-[#fbfbfb]">
        <UsedTech tech={info.detail.tech} />
        <WhatIDid info={info.detail.whatIDid} />
      </section>
    </div>
  );
};

export default Project;
