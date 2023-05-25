import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const list = [
  { src: "/images/OPENER.png", alt: "OPENER", path: "/project/1" },
  { src: "/images/moida.png", alt: "모이다", path: "/project/2" },
  { src: "/images/ssily.png", alt: "ssily project", path: "/project/3" },
];

export const ProjectsPage = () => {
  const settings = {
    customPaging: function (index: number) {
      return (
        <a>
          <img src={list[index].src} alt="" className="rounded-sm" />
        </a>
      );
    },
    dots: true,
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      id="project"
      className="h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl">Projects</h1>
      <Slider {...settings} className="max-w-[1300px] w-[80%] mt-5 pb-5">
        {list.map((content: any, index: number) => {
          return (
            <div key={index} className="py-10">
              <Link to={content.path}>
                <img
                  src={content.src}
                  alt=""
                  className="w-[500px] mx-auto opacity-100 hover:opacity-90 rounded-md shadow-lg"
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
