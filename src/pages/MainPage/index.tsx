import { IntroSection } from "./Components/IntroSection";
import { AboutSection } from "./Components/AboutSection";
import { ContactSection } from "./Components/ContactSection";
import Timeline from "./Components/Timeline";
import ProjectsSection from "./Components/ProjectsSection";
import useModal from "components/useModal";
import { useEffect } from "react";
import styled from "styled-components";

const MainPage = () => {
  const { Modal, isOpen, setIsOpen } = useModal();
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <div className="flex flex-col">
      <Modal>
        <div className="p-6 md:p-8 bg-white rounded-xl flex flex-col justify-center items-center">
          <img src="/images/under-construction.png" alt="" />
          <p className="text-lg md:text-2xl font-black my-6">
            이 페이지는 이제 관리되지 않아요.
          </p>
          <p className="text-base md:text-xl mb-8">
            블로그를 새롭게 만들었는데, 구경하러 오실래요?
          </p>
          <Button
            href="https://itmakesmesoft.vercel.app"
            rel="noopener noreferrer"
            className="bg-[#353535] hover:bg-[#555555] text-white mb-2"
          >
            구경하러 갈게요!
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            rel="noopener noreferrer"
            className="bg-[#e2e2e2] hover:bg-[#eaeaea] text-[#5f5f5f]"
          >
            그냥 머무를래요.
          </Button>
        </div>
      </Modal>
      <IntroSection />
      <AboutSection />
      <Timeline />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  height: 2.75rem;
  width: 100%;
`;
