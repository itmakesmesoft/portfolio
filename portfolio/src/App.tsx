import "./App.css";
import { Header } from "./Components/Header";
import { IntroPage } from "./Sections/IntroPage";
import { AboutPage } from "./Sections/AboutPage";
import { ProjectsPage } from "./Sections/ProjectsPage";
import { ContactPage } from "./Sections/ContactPage";
import { Footer } from "./Components/Footer";
import Scroll from "react-scroll";
import { Routes, Route } from "react-router-dom";

function App() {
  const Element = Scroll.Element;
  return (
    <div className="root">
      <Header />
      <div className="flex flex-col">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/about"
            element={
              <Element name="about">
                <AboutPage />
              </Element>
            }
          />
          <Element name="projects">
            <Route path="/project" element={<ProjectsPage />} />
          </Element>
          <Element name="contact">
            <Route path="/contact" element={<ContactPage />} />
          </Element>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
