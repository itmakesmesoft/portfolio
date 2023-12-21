import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { contentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";
import Simulation from "pages/DetailPage/components/Simulation";

const Project = (props: { info: contentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro info={info.detail} />
      <section className="w-full flex flex-col items-center">
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
