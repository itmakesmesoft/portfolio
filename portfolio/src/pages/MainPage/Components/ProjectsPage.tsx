import { Link } from "react-router-dom";

type contentType = {
  src: string;
  alt: string;
  path: string;
  desc: string;
};

const list: contentType[] = [
  {
    src: "/images/opener.png",
    alt: "OPENER",
    path: "/project/1",
    desc: "영어 회화 학습 웹서비스입니다",
  },
  { src: "/images/moida.png", alt: "모이다", path: "/project/2", desc: "" },
  {
    src: "/images/ssily.png",
    alt: "ssily project",
    path: "/project/3",
    desc: "",
  },
];

export const ProjectsPage = () => {
  return (
    <div
      id="project"
      className="h-screen w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-[4.5rem] text-center font-['Bangers']">Projects</h1>
      <div className="w-[70%] max-w-[1000px] mt-[2rem] h-[50vh] flex flex-col sm:flex-row justify-center items-center relative px-4 lg:p-0">
        {list.map((content: contentType, index: number) => {
          return (
            <Link
              key={index}
              to={content.path}
              className="h-full w-full sm:w-auto mr-2 last:mr-0 grow hover:grow-[5] rounded-lg duration-500 ease-in-out grayscale-[70%] hover:shadow-xl hover:grayscale-0 overflow-hidden"
            >
              <div
                className="relative h-full w-full"
                style={{
                  backgroundImage: `url(${content.src})`,
                  backgroundPosition: "center",
                }}
              >
                <p className="absolute top-4 left-4 text-[10rem] leading-none font-['Montserrat_Alternates'] font-[100] drop-shadow-lg text-white">
                  {index + 1}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
