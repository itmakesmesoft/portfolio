import "./App.css";
import { MainPage } from "./pages/MainPage/index";
import { DetailPage } from "./pages/DetailPage/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
