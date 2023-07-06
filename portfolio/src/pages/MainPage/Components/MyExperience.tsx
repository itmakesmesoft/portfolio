import styled from "styled-components";
import useGuage from "../../../components/Level";
export const MyExperience = () => {
  const { LevelGuage } = useGuage();
  return (
    <div className="h-[77%] w-full">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-10 font-bold font-['Bangers'] text-center sm:text-left leading-none">
        Summary
      </h1>
      <div className="flex flex-row w-full">
        <div className="w-full">
          <Box className="min-w-[165px] max-w-[250px]">
            <H1>
              <span />
              SKILLS
            </H1>
            <Skill className="group">
              Javascript <LevelGuage level={7} />
              <Info className="group-hover:block">
                자바스크립트를 이용하여 사용자와 상호작용을 하는 이벤트를 구현할
                수 있습니다. 또한, 자바스크립트의 작동 원리를 이해하고,
                동시성으로 인한 문제를 처리할 수 있습니다.
              </Info>
            </Skill>
            <Skill className="group">
              Typescript <LevelGuage level={5} />
              <Info className="group-hover:block">
                타입스크립트를 이용하여 변수의 타입을 명시하고, 이를 통해 사전에
                오류를 해결할 수 있습니다.
              </Info>
            </Skill>
            <Skill className="group">
              React.js <LevelGuage level={8} />
              <Info className="group-hover:block">
                리액트 라이브러리를 이용하여 중소규모의 웹페이지를 혼자서도
                제작할 수 있습니다. 또한, 커스텀 리액트 훅을 만들어 코드의
                재사용성과 유지보수성을 높일 수 있습니다.
              </Info>
            </Skill>
            <Skill className="group">
              Vue.js <LevelGuage level={6} />
              <Info className="group-hover:block">
                Vue의 라이프사이클을 이해하고 있으며, Vue 3.0의 Composition
                API를 이용하여 코드를 기능별로 배치 구성할 수 있습니다.
              </Info>
            </Skill>
            <Skill className="group">
              Python
              <LevelGuage level={7} />
              <Info className="group-hover:block">
                파이썬을 이용하여 자료구조를 만들고 알고리즘 문제를 해결할 수
                있습니다. 또한, 웹 데이터를 크롤링하여 이를 저장하거나 데이터를
                가공할 수 있습니다.
              </Info>
            </Skill>
            <Skill className="group">
              Django <LevelGuage level={6} />
              <Info className="group-hover:block">
                장고를 이용하여 소규모 웹페이지를 제작하거나, 게시글의 CRUD,
                회원가입과 토큰 및 리프레시 토큰 발급 등의 처리를 수행하는 REST
                API를 제작할 수 있습니다.{" "}
              </Info>
            </Skill>
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
              군부대 대원관리 프로그램 제작
            </P>
            <P>
              <Sub>2020</Sub>
              필리핀 어학연수
            </P>
            <P>
              <Sub>2021</Sub>
              네이버 쇼핑 크롤링앱 제작
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
const Skill = styled.p`
  margin-bottom: 0.25rem;
  position: relative;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: white;
    font-weight: 900;
    padding: 0 10px;
  }
`;
const Info = styled.span`
  position: absolute;
  top: 2rem;
  left: 0;
  display: none;
  width: 100%;
  opacity: 90%;
  z-index: 10;
  background-color: #373737;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
`;
const Box = styled.div`
  margin-bottom: 2.5rem;
  margin-right: 1.5rem;
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
    bottom: -7px;
    left: 0;
  }
`;

const Sub = styled.span`
  display: block;
  font-weight: 900;
`;

const P = styled.p`
  margin-bottom: 0.75rem;
`;
