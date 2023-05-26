import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import Information from "../../components/Information";

export const DetailPage = () => {
  const params = useParams();
  const projectId = params.id;
  const Component = lazy(
    () => import(`../../data/sources/project${projectId}/project`)
  );

  return (
    <div className="w-full min-h-screen pt-[60px]">
      <Suspense fallback={<div></div>}>
        <Component />
      </Suspense>
      <div className="min-h-[50vh] w-full p-4 flex flex-col justify-center items-center bg-[#f3f3f3]">
        <div className="inline-block ">
          <h1 className="text-center text-[2rem] font-extralight">
            방문해주셔서 감사합니다.
          </h1>
          <Information />
        </div>
      </div>
    </div>
  );
};
