import styled from "styled-components";
import { MyInfo } from "./MyInfo";
import { MyExperience } from "./MyExperience";
import { SiMailDotRu } from "@react-icons/all-files/si/SiMailDotRu";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiNotion } from "@react-icons/all-files/si/SiNotion";
import useModal from "components/useModal";
import { useEffect, useRef } from "react";

export const AboutSection = () => {
  const lazyImageRef = useRef<HTMLImageElement>(null);
  const { Modal, isOpen, setIsOpen } = useModal();

  // 이미지 Lazy Loading
  useEffect(() => {
    if (isOpen && lazyImageRef.current?.dataset.src) {
      // data-src를 img.src에 대입
      lazyImageRef.current.src = lazyImageRef.current.dataset.src;
    }
  }, [isOpen]);

  return (
    <div
      id="about"
      className="max-w-[1100px] mx-auto w-full flex flex-col sm:flex-row sm:px-10"
    >
      <Modal
        children={
          <ModalInner>
            <img
              ref={lazyImageRef}
              src="/images/daniel_low.webp"
              data-src="/images/daniel.webp" // 이미지 Lazy Loading을 위해 dataset 사용
              alt="증명 사진"
              width="400px"
              height="500px"
            />
          </ModalInner>
        }
      />

      {/* 왼쪽 */}
      <div className="fixed sm:sticky bottom-0 sm:top-0 left-0 sm:h-screen w-full sm:w-auto flex flex-col justify-start sm:justify-center items-center sm:pr-[2rem] lg:pr-[6rem] z-10">
        <SidePanel className="opacity-[var(--scrolled)] sm:opacity-100 sm:h-[77%] w-full flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start border border-[#00000005] sm:border-none bg-[#eaeaea70] sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none px-4 sm:p-0 shadow-3xl sm:shadow-none h-[45px]">
          <div className="w-[35px] h-[35px] sm:w-[200px] sm:h-[280px] lg:w-[250px] lg:h-[350px] z-0 rounded-full sm:rounded-lg mr-6 sm:mr-0 cursor-pointer hover:shadow-xl overflow-hidden active:shadow-none">
            <img
              src="/images/daniel_regular.webp"
              alt="증명 사진"
              width="400px"
              height="500px"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="text-base sm:mt-5 flex flex-row lg:flex-col sm:justify-center sm:w-full">
            <p className="sm:mb-2">
              <A href="mailto:dmsgur7112@naver.com">
                <SiMailDotRu className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden lg:inline">dmsgur7112@naver.com</span>
              </A>
            </p>
            <p className="sm:mb-2">
              <A
                href="https://github.com/itmakesmesoft/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden lg:inline">
                  github.com/itmakesmesoft
                </span>
              </A>
            </p>
            <p className="sm:mb-2">
              <A
                href="https://itmakesmesoft.notion.site/Programming-1002fb9111264d5fbbd474db1fed1181?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiNotion className="inline-block mr-3 w-[1.5rem] h-[1.5rem]" />
                <span className="hidden lg:inline">notion/itmakesmesoft</span>
              </A>
            </p>
          </div>
        </SidePanel>
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
const ModalInner = styled.div`
  max-height: 70%;
  max-width: 80%;
  aspect-ratio: 5 / 7;
  z-index: 200;
  border-radius: 10px;
  overflow: hidden;
  cursor: default;
`;
const SidePanel = styled.div`
  transition: all 0.2s;
`;
