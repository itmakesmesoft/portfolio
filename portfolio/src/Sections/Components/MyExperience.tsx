import styled from "styled-components";

export const MyExperience = () => {
  return (
    <div className="h-[77%] w-full">
      <h1 className="text-[4.5rem] mb-5 font-bold font-['Bangers'] text-center sm:text-left tracking-wide leading-none">
        Summary
      </h1>
      <div className="flex flex-row w-full">
        <div className="w-full">
          <Box>
            <H1>
              <span />
              SKILLS
            </H1>
            <p className="mb-1">Python</p>
            <p className="mb-1">Django</p>
            <p className="mb-1">Vue.js</p>
            <p className="mb-1">React.js</p>
            <p className="mb-1">Javascript</p>
            <p className="mb-1">Typescript</p>
          </Box>
          <Box>
            <H1>
              <span />
              CERTIFICATES
            </H1>
            <P>
              <Sub>2021</Sub>
              OPIC IH
            </P>
            <P>
              <Sub>2022</Sub>
              SQLD
            </P>
          </Box>
        </div>
        <div className="w-full">
          <Box>
            <H1>
              <span />
              AWARDS
            </H1>
            <P>
              <Sub>2022</Sub>
              SSAFY 관통 우수상
            </P>
            <P>
              <Sub>2023</Sub>
              SSAFY 특화 우수상
            </P>
          </Box>
          <Box>
            <H1>
              <span />
              EXPERIENCES
            </H1>
            <P>
              <Sub>2016-2018</Sub>
              군부대 관련
            </P>
            <P>
              <Sub>2022-2023</Sub>
              SSAFY 8기
            </P>
          </Box>
        </div>
      </div>
    </div>
  );
};
const Box = styled.div`
  margin-bottom: 1.5rem;
`;
const H1 = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: Bangers;
  position: relative;
  & > span {
    width: 57px;
    height: 2px;
    background: #373737;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Sub = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 900;
`;

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;
