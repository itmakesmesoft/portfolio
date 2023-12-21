import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { contentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";

const Project = (props: { info: contentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro info={info.detail} />
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
