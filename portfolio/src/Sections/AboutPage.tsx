export const AboutPage = () => {
  // 가상의 이미지 비율
  // const originalImageWidth = 800;
  // const originalImageHeight = 800;

  return (
    <div className="h-[450vh] relative flex flex-col items-center w-full px-10">
      <div className="max-w-[1000px] mx-auto w-full h-full flex flex-row">
        <div className="h-full flex flex-col">
          <div className="sticky top-0 left-0">
            <div
              className="w-[350px] h-[350px] bg-top bg-cover rounded-3xl z-0"
              style={{ backgroundImage: "url(/images/daniel.jpg)" }}
            />
            <div className="text-xl font-bold mt-5">
              <p>dmsgur7112@naver.com</p>
              <p>github.com/itmakesmesoft</p>
              <p>velog</p>
            </div>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="w-full h-full">
          <div className="w-full h-screen">
            <div className="sticky top-0 left-0 ">
              <p>하이요</p>
              <p>하이요</p>
              <p>하이요</p>
              <p>하이요</p>
            </div>
          </div>
          <div className="w-full h-screen">
            <div className="sticky top-0 left-0">
              <p>하이요2</p>
              <p>하이요2</p>
              <p>하이요2</p>
              <p>하이요2</p>
            </div>
          </div>
          <div className="w-full h-screen">
            <div className="sticky top-0 left-0">
              <p>하이요3</p>
              <p>하이요3</p>
              <p>하이요3</p>
              <p>하이요3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
