import ProjectInfo from "pages/DetailPage/components/ProjectInfo";
import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { contentType } from "types/common";

const Project = (props: { info: contentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col justify-center min-h-[calc(100vh-60px)] pb-10">
        <div className="flex flex-col sm:flex-row max-w-[1300px]">
          <div className="px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]">
            <img
              src={require("assets/img/project1_1.webp")}
              alt="thumbnail"
              width="1300"
              height="1000"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start">
            <ProjectInfo info={info.detail} />
          </div>
        </div>
      </section>
      <section>
        <img
          src={require("assets/img/project1_2.webp")}
          alt=""
          width="1300"
          height="1000"
          className="w-full h-full max-w-[1200px]"
        />
      </section>
      <section className="w-full h-full py-20 px-4 border bg-[#fbfbfb]">
        <iframe
          className="w-full aspect-video mx-auto max-w-[1000px]"
          src="https://www.youtube.com/embed/e5zKhZFMLA4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <section className="w-full bg-[#fbfbfb]">
        <UsedTech tech={info.detail.tech} />
        <WhatIDid info={info.detail.whatIDid} />
      </section>
    </div>
  );
};

export default Project;
