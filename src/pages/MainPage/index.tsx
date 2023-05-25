import { IntroPage } from "./Components/IntroPage";
import { AboutPage } from "./Components/AboutPage";
import { ProjectsPage } from "./Components/ProjectsPage";
import { ContactPage } from "./Components/ContactPage";

export const MainPage = () => {
  return (
    <div className="flex flex-col">
      <IntroPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};
