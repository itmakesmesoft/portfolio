import styled from "styled-components";
import { MyInfo } from "./MyInfo";
import { MyExperience } from "./MyExperience";
import { SiVelog, SiMaildotru, SiGithub } from "react-icons/si";
import { useState, useRef } from "react";

export const AboutPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);
  return (
    <div
      id="about"
      className="max-w-[1100px] mx-auto w-full flex flex-col sm:flex-row sm:px-10"
    >
      <div
        className={`h-[calc(var(--vh,1vh)*100)] w-screen z-50 fixed top-0 left-0 flex flex-col justify-center bg-[#00000090] backdrop-blur-sm cursor-pointer
        ${isOpen ? "" : "hidden"}
        `}
        ref={modal}
        onClick={(event) => {
          event.target === modal.current && setIsOpen(false);
        }}
      >
        <div
          className="w-[80%] sm:w-auto sm:h-[80%] bg-cover aspect-5/7 mx-auto z-70 rounded-lg shadow-2xl cursor-default"
          style={{ backgroundImage: "url(/images/daniel.jpg)" }}
        />
      </div>
      {/* 왼쪽 */}
      <div className="fixed sm:sticky bottom-0 sm:top-0 left-0 sm:h-screen w-full sm:w-auto flex flex-col justify-start sm:justify-center items-center sm:pr-[2rem] lg:pr-[6rem] z-10">
        <div className="sm:h-[77%] w-full flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start border border-[#00000005] sm:border-none bg-[#eaeaea70] sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none px-4 py-2 sm:p-0 shadow-3xl sm:shadow-none">
          <div
            className="w-[2.5rem] h-[2.5rem] sm:w-[200px] sm:h-[280px] lg:w-[250px] lg:h-[350px] bg-top bg-cover z-0 rounded-full sm:rounded-lg mr-6 sm:mr-0 cursor-pointer hover:shadow-xl active:shadow-none"
            style={{ backgroundImage: "url(/images/daniel.jpg)" }}
            onClick={() => setIsOpen(true)}
          />
          <div className="text-base sm:mt-5 flex flex-row lg:flex-col sm:justify-center sm:w-full">
            <p className="sm:mb-2">
              <A href="mailto:dmsgur7112@naver.com">
                <SiMaildotru className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden lg:inline">dmsgur7112@naver.com</span>
              </A>
            </p>
            <p className="sm:mb-2">
              <A href="https://github.com/itmakesmesoft/" target="_blank">
                <SiGithub className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden lg:inline">
                  github.com/itmakesmesoft
                </span>
              </A>
            </p>
            <p className="sm:mb-2">
              <A href="https://velog.io/@dmsgur7112/series" target="_blank">
                <SiVelog className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden lg:inline">velog</span>
              </A>
            </p>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="flex flex-col h-full w-full px-4 sm:px-0">
        <div className="h-full sm:h-[130vh] w-full relative">
          <Sticky className="sm:sticky h-full sm:h-screen">
            <MyInfo />
          </Sticky>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="h-full sm:h-[130vh] w-full relative">
            <Sticky className="sm:sticky h-full sm:h-screen">
              <MyExperience />
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};
const A = styled.a`
  &:hover {
    color: #45c0bb;
  }
`;

const Sticky = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
`;
