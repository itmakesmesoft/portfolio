import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import { ContentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";
import Simulation from "pages/DetailPage/components/Simulation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Project = (props: { info: ContentType }) => {
  // const info = props.info;
  const navigate = useNavigate();
  useEffect(() => {
    alert("지금 상세 페이지를 제작하고 있어요. 조금만 기다려주세요!");
    navigate(-1);
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      {/* <ProjectIntro info={info.detail} />
      <section className="w-full flex flex-col items-center border-y border-[#d2d2d2]">
        <img
          src=""
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
      <section className="w-full bg-[var(--secondary-bgColor)]">
        <UsedTech tech={info.detail.tech} />
        <WhatIDid info={info.detail.whatIDid} />
      </section> */}
    </div>
  );
};

export default Project;
