export const IntroPage = () => {
  // 가장 바깥 div에 h-screen을 두는 이유는 화면 크기 조절시 --vh css변수로 인한 형제 앨리먼트의 위치 변경을 막기위함
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[calc(var(--vh,1vh)*100)] flex flex-col justify-center transition-all">
        <p className="text-center text-[5rem] sm:text-[10rem] lg:text-[15rem] font-['Bangers']">
          PORTFOLIO
        </p>
      </div>
    </div>
  );
};
