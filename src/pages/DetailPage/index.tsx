import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MdFace, MdOutlineSmartphone, MdEmail } from "react-icons/md";

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
      <div className="min-h-[70vh] w-full p-4 flex flex-col justify-center items-center bg-slate-200">
        <div className="max-w-[1300px] w-full">
          <h1 className="text-center text-[3rem] font-extrabold">
            Thanks For Reading
          </h1>
          <p>
            <MdFace />
            이름
          </p>
          <p>
            <MdOutlineSmartphone />
            전화번호
          </p>
          <MdEmail />
          <p>이메일</p>
        </div>
      </div>
    </div>
  );
};
