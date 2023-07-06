import { IntroPage } from "./Components/IntroPage";
import { AboutPage } from "./Components/AboutPage";
import { ProjectsPage } from "./Components/ProjectsPage";
import { ContactPage } from "./Components/ContactPage";

export const MainPage = () => {
  return (
    <div className="flex flex-col text-sm sm:text-base">
      <IntroPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};
