import { useParams } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Information from "components/Information";
import projects from "assets/projectInfo";

const DetailPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const params = useParams();
  const projectId: string | undefined = params.id;
  const Component = lazy(
    () => import(`../../assets/sources/Project${projectId}`)
  );

  return (
    <div className="w-full min-h-screen pt-[60px]">
      <Suspense
        fallback={
          <div className="h-screen w-full flex flex-col justify-center">
            <p className="text-center">Loading...</p>
          </div>
        }
      >
        {projectId && (
          <Component info={projects.list[parseInt(projectId) - 1]} />
        )}
      </Suspense>

      <div className="min-h-[50vh] w-full p-4 flex flex-col justify-center items-center bg-[#fbfbfb] border-t border-[#d2d2d2]">
        <div className="inline-block ">
          <h1 className="text-2xl sm:text-[2rem] text-start sm:text-center font-extralight">
            방문해주셔서 감사합니다.
          </h1>
          <Information />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
