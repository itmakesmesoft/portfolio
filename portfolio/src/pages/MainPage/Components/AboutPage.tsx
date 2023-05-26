import styled from "styled-components";
import { MyInfo } from "./MyInfo";
import { MyExperience } from "./MyExperience";
import { SiVelog, SiMaildotru, SiGithub } from "react-icons/si";

export const AboutPage = () => {
  return (
    <div
      id="about"
      className="max-w-[1100px] mx-auto w-full flex flex-col sm:flex-row sm:px-10"
    >
      <div className="fixed sm:sticky bottom-0 sm:top-0 left-0 sm:h-screen w-full sm:w-auto flex flex-col justify-start sm:justify-center items-center sm:pr-[3rem] lg:pr-[6rem] z-10">
        <div className="sm:h-[77%] w-full flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start border border-[#00000005] sm:border-none bg-[#00000010] sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none p-2 sm:p-0 shadow-3xl sm:shadow-none">
          <div
            className="w-[2.5rem] h-[2.5rem] sm:w-[250px] sm:h-[350px] bg-top bg-cover z-0 rounded-full sm:rounded-lg mr-6 sm:mr-0"
            style={{ backgroundImage: "url(/images/daniel.jpg)" }}
          />
          <div className="text-base sm:mt-5 flex flex-row sm:flex-col">
            <p className="sm:mb-2">
              <A href="mailto:dmsgur7112@naver.com">
                <SiMaildotru className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden sm:inline">dmsgur7112@naver.com</span>
              </A>
            </p>
            <p className="sm:mb-2">
              <A href="https://github.com/itmakesmesoft/" target="_blank">
                <SiGithub className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden sm:inline">
                  github.com/itmakesmesoft
                </span>
              </A>
            </p>
            <p className="sm:mb-2">
              <A href="https://velog.io/@dmsgur7112/series" target="_blank">
                <SiVelog className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden sm:inline">velog</span>
              </A>
            </p>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="flex flex-col h-full w-full px-4 sm:px-0">
        <div className="h-[130vh] w-full relative">
          <Sticky>
            <MyInfo />
          </Sticky>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="h-[130vh] w-full relative">
            <Sticky>
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
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
