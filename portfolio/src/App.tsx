import "./App.css";
import { Header } from "./Components/Header";
import { IntroPage } from "./Sections/IntroPage";
import { AboutPage } from "./Sections/AboutPage";
import { ProjectsPage } from "./Sections/ProjectsPage";
import { ContactPage } from "./Sections/ContactPage";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="root">
      <Header />
      <div className="flex flex-col">
        <IntroPage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
