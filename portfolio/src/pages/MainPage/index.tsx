import { IntroPage } from "./Components/IntroPage";
import { AboutPage } from "./Components/AboutPage";
import { ProjectsPage } from "./Components/ProjectsPage";
import { ContactPage } from "./Components/ContactPage";

const MainPage = () => {
  return (
    <div className="flex flex-col text-sm sm:text-base">
      <IntroPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default MainPage;
