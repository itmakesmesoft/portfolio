import { ContentType } from "types/common";
import { ProjectIntro } from "pages/DetailPage/components/ProjectIntro";
import WhatIDid from "pages/DetailPage/components/WhatIDid";
import UsedTech from "pages/DetailPage/components/UsedTech";
import DropdownSection from "./components/DropdownSection";
import SwitchSection from "./components/SwitchSection";
import ModalSection from "./components/ModalSection";
import SelectSection from "./components/SelectSection";
import ComboBoxSection from "./components/ComboBoxSection";
import TabsSection from "./components/TabsSection";
import styled from "styled-components";

const Project = (props: { info: ContentType }) => {
  const info = props.info;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro info={info?.detail} />
      <section className="w-full bg-light-secondary border-[#d2d2d2] lg:py-10">
        <div className="w-full max-w-[1000px] mx-auto bg-white flex flex-col items-start lg:border lg:rounded-lg lg:shadow-xl p-8 text-sm md:text-base">
          <SelectSection />
          <ComboBoxSection />
          <DropdownSection />
          <SwitchSection />
          <TabsSection />
          <ModalSection />
        </div>
      </section>
      <section className="w-full bg-light-secondary">
        <UsedTech tech={info?.detail.tech} />
        <WhatIDid info={info?.detail.whatIDid} />
      </section>
    </div>
  );
};

export default Project;

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2">
    {children}
  </h1>
);

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="py-10 first:pt-0 last:pb-0 border-b last:border-none w-full">
    {children}
  </div>
);

export const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-4 mb-2">
    {children}
  </h1>
);

export const Arrow = styled.span`
  position: absolute;
  top: 22px;
  right: 13px;
  width: 0;
  height: 0;
  border-top: 7px solid #999999;
  border-bottom: none;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
`;
