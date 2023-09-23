import { Link } from "react-router-dom";
import { contentType } from "types/common";
import projectInfo from "assets/projectInfo";

export const ProjectsPage = () => {
  return (
    <div
      id="project"
      className="h-screen w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-10 text-center font-['Bangers']">
        Projects
      </h1>
      <div className="w-full sm:w-[90%] lg:w-[70%] max-w-[1000px] mt-[2rem] h-[50vh] flex flex-col sm:flex-row justify-center items-center relative px-4 lg:p-0">
        {projectInfo.list.map((content: contentType, index: number) => {
          const summary = content.summary;
          return (
            <Link
              key={index}
              to={summary.path}
              className="h-full w-full sm:w-auto sm:mr-2 mb-2 sm:mb-0 last:mr-0 grow hover:grow-[5] rounded-lg duration-500 ease-in-out grayscale-[70%] hover:shadow-xl hover:grayscale-0 overflow-hidden"
            >
              <div
                className="relative h-full w-full"
                style={{
                  backgroundImage: `url(${summary.src})`,
                  backgroundPosition: "center",
                }}
              >
                <p className="absolute top-4 left-4 text-[5rem] sm:text-[8rem] lg:text-[10rem] leading-none font-['Montserrat_Alternates'] font-[200] drop-shadow-lg text-white">
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
