import { HashLink as Link } from "react-router-hash-link";
import "./arrow.css";
export const IntroPage = () => {
  // 가장 바깥 div에 h-screen을 두는 이유는 화면 크기 조절시 --vh css변수로 인한 형제 앨리먼트의 위치 변경을 막기위함
  return (
    <div className="h-screen w-full">
      {/* 위 div는 모바일에서 주소창 크기 변경에 따라 리플로우되는 현상 막기 위함 */}
      <div className="relative w-full h-[calc(var(--vh,1vh)*100)] flex flex-col justify-center transition-all">
        <p className="text-center text-[5rem] sm:text-[10rem] lg:text-[15rem] font-['Bangers']">
          PORTFOLIO
        </p>
        <div className="absolute bottom-4 w-full flex flex-row justify-center">
          <Link
            to="/#about"
            className="p-4 z-20"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <img
              className="bounce"
              src="./icons/arrow.svg"
              width="34px"
              height="19px"
              alt="아래 방향 스크롤"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
