import { IntroSection } from "./Components/IntroSection";
import { AboutSection } from "./Components/AboutSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { ContactSection } from "./Components/ContactSection";

const MainPage = () => {
  return (
    <div className="flex flex-col text-sm sm:text-base">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
