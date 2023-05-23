import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const list = [
  { src: "/images/image.jpg", alt: "list1" },
  { src: "/images/logo.png", alt: "list1" },
  { src: "/images/image.jpg", alt: "list1" },
  { src: "/images/image.jpg", alt: "list1" },
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
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-3xl">Projects</h1>
      <Slider {...settings} className="max-w-[1300px] w-[80%] mt-5 pb-5">
        {list.map((content: any, index: number) => {
          return (
            <div key={index}>
              <a href="">
                <img
                  src={content.src}
                  alt=""
                  className="w-[500px] mx-auto opacity-80 hover:opacity-100 rounded-xl"
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
