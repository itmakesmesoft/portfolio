import "./App.css";
import { Header } from "./Components/Header";
import { AboutPage } from "./Sections/AboutPage";
import { ProjectsPage } from "./Sections/ProjectsPage";
import { ContactPage } from "./Sections/ContactPage";

function App() {
  return (
    <div className="root">
      <Header />
      <div className="mt-[60px] h-[calc(100%-60px)]">
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
