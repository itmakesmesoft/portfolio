import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { ContentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";
import Simulation from "pages/DetailPage/components/Simulation";

const Project = (props: { info: ContentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro info={info.detail} />
      <section className="w-full flex flex-col items-center border-y border-[#d2d2d2]">
        <img
          src="/images/portfolio.webp"
          alt=""
          width="1300"
          height="1000"
          className="w-[1000px] h-auto"
        />
      </section>
      <section className="w-full">
        {info.detail.simImageSrc && (
          <Simulation data={info.detail.simImageSrc} />
        )}
      </section>
      <section className="w-full bg-light-secondary">
        <UsedTech tech={info.detail.tech} />
        <WhatIDid info={info.detail.whatIDid} />
      </section>
    </div>
  );
};

export default Project;
