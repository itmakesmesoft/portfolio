import { Link } from "react-router-dom";

const list = [
  { src: "/images/OPENER.png", alt: "OPENER", path: "/project/1" },
  { src: "/images/moida.png", alt: "모이다", path: "/project/2" },
  { src: "/images/ssily.png", alt: "ssily project", path: "/project/3" },
];

export const ProjectsPage = () => {
  const width = 100 / list.length;
  return (
    <div id="project" className="h-screen w-full flex flex-col items-center">
      <h1 className="text-[4.5rem] text-center font-['Bangers']">Projects</h1>
      <div className="w-full max-w-[1300px] h-full flex flex-row justify-center items-center">
        {list.map((content: any, index: number) => {
          return (
            <Link
              key={index}
              to={content.path}
              className={`h-full w-[${width}%] bg-black px-4 bg-[url(${content.src})]`}
            >
              <img src={content.src} alt={content.alt} className="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
