import styled from "styled-components";
import { MyInfo } from "./Components/MyInfo";
import { MyExperience } from "./Components/MyExperience";

export const AboutPage = () => {
  // 가상의 이미지 비율
  // const originalImageWidth = 800;
  // const originalImageHeight = 800;

  return (
    <div className="max-w-[1300px] mx-auto w-full flex flex-row px-10">
      <div className="sticky top-0 left-0 h-screen flex flex-col justify-center">
        <div className="h-[77%]">
          <div
            className="w-[350px] h-[350px] bg-top bg-cover rounded-3xl z-0"
            style={{ backgroundImage: "url(/images/daniel.jpg)" }}
          />
          <div className="text-xl  mt-5 font-['Gowun_Dodum']">
            <p>dmsgur7112@naver.com</p>
            <p>github.com/itmakesmesoft</p>
            <p>velog</p>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="flex flex-col h-full w-full">
        <div className="h-[130vh] w-full relative">
          <Sticky>
            <MyInfo />
          </Sticky>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="h-[130vh] w-full relative">
            <Sticky>
              <MyExperience />
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sticky = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
