import { IntroSection } from "./Components/IntroSection";
import { AboutSection } from "./Components/AboutSection";
import { ContactSection } from "./Components/ContactSection";
// import Timeline from "./Components/Timeline";
import ProjectsSection from "./Components/ProjectsSection";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <IntroSection />
      <AboutSection />
      {/* <Timeline /> */}
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
