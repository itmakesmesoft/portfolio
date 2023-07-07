import "./App.css";
import { MainPage } from "./pages/MainPage/index";
import { DetailPage } from "./pages/DetailPage/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // 모바일 브라우저 주소창을 고려한 css height 설정
  let timer: ReturnType<typeof setTimeout> | null = null;
  let raf: number | null = null;

  window.addEventListener("resize", () => {
    if (!timer) resize(); // 디바운스 적용
    else clearTimeout(timer); // timer 삭제 후 재할당
    timer = setTimeout(() => {
      if (raf) cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
      timer = null;
    }, 1000);
  });

  const resize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); // css 변수 변경
    raf = requestAnimationFrame(resize);
  };

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
