import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { ContentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";

const Project = (props: { info: ContentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro info={info.detail} />
      <section>
        <img
          src={require("assets/img/project1_2.webp")}
          alt=""
          width="1300"
          height="1000"
          className="w-full h-full max-w-[1200px]"
        />
      </section>
      <section className="w-full h-full py-20 px-4 border bg-light-secondary">
        <iframe
          className="w-full aspect-video mx-auto max-w-[1000px]"
          src="https://www.youtube.com/embed/e5zKhZFMLA4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <section className="w-full bg-light-secondary">
        <UsedTech tech={info.detail.tech} />
        <WhatIDid info={info.detail.whatIDid} />
      </section>
    </div>
  );
};

export default Project;
