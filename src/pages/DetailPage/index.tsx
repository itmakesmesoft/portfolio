import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

export const DetailPage = () => {
  const params = useParams();
  const projectId = params.id;
  const Component = lazy(
    () => import(`../../data/sources/project${projectId}/project`)
  );

  return (
    <div className="w-full min-h-screen pt-[60px]">
      <Suspense fallback={<div>로딩..</div>}>
        <Component />
      </Suspense>
    </div>
  );
};
