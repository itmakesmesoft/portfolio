import Scroll from "react-scroll";

export const IntroPage = () => {
  const Element = Scroll.Element;

  return (
    <Element name="intro">
      <div className="w-full h-screen flex flex-col justify-center">
        <p className="text-center text-[5rem] sm:text-[10rem] lg:text-[15rem] font-['Bangers']">
          PORTFOLIO
        </p>
      </div>
    </Element>
  );
};
