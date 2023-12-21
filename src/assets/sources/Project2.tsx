import WhatIDid from "pages/DetailPage/components/WhatIDid";
import ProjectInfo from "pages/DetailPage/components/Information";
import UsedTech from "pages/DetailPage/components/UsedTech";
import Simulation from "pages/DetailPage/components/Simulation";
import { contentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";

const Project = (props: { info: contentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro info={info.detail} />
      <section className="bg-[#a0c846] w-full flex flex-col items-center">
        <img
          src={require("assets/img/project2_2.webp")}
          alt=""
          width="1300"
          height="1000"
          className="w-full h-full max-w-[1000px]"
        />
        {info.detail.simImageSrc && (
          <Simulation data={info.detail.simImageSrc} />
        )}
      </section>
      <section className="w-full bg-[#fbfbfb]">
        <UsedTech tech={info.detail.tech} />
        <WhatIDid info={info.detail.whatIDid} />
      </section>
    </div>
  );
};

export default Project;
