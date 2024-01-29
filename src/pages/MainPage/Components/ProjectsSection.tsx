import styled from "styled-components";
import { PROJECTS_INFO } from "assets/projectInfo";
import { Section } from "style/common";
import { ContentType } from "types/common";
import { useNavigate } from "react-router-dom";

export const ProjectsSection = () => {
  const navigate = useNavigate();
  return (
    <Section id="project" className="h-screen w-full">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-10 text-center font-['Bangers']">
        Projects
      </h1>
      <div className="w-full sm:w-[90%] lg:w-[90%] max-w-[1000px] mt-[2rem] min-h-[50vh] flex flex-col sm:flex-row justify-center items-center relative px-4 lg:p-0">
        {PROJECTS_INFO.list.map((content: ContentType, index: number) => {
          const summary = content.summary;
          return (
            <Link
              key={index}
              onClick={() => navigate(summary.path)}
              className="sm:mr-2 mb-2 sm:mb-0 last:mr-0 rounded-lg min-h-[100px]"
            >
              <ProjectImage className="projectImage" src={summary.src}>
                <p className="absolute top-4 left-4 text-[5rem] sm:text-[8rem] lg:text-[10rem] leading-none font-['Montserrat_Alternates'] font-[200] drop-shadow-lg text-white z-10">
                  {index + 1}
                </p>
                <ProjectInfo className="info">
                  <Title>{summary.alt}</Title>
                  <Desc>{summary.description}</Desc>
                </ProjectInfo>
              </ProjectImage>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

const Link = styled.button`
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-grow: 1;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  filter: grayscale(70%);

  @media (max-width: 639px) {
    &:active::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #00918d5e;
    }
  }
  @media (min-width: 640px) {
    width: auto;
    &:hover {
      flex-grow: 5;
      filter: grayscale(0);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
      & > .projectImage > .info {
        animation: 300ms ease-out 500ms fadeIn both;
      }
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translatey(10px);
    }
    100% {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div<{ src: string }>`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #ffffffeb;
  padding: 1rem;
  padding-left: 4.5rem;
  text-align: right;
  opacity: 1;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 60%
  );

  @media (min-width: 640px) {
    color: white;
    text-align: left;
    opacity: 0;
    height: 100%;
    justify-content: end;
    padding: 2rem;
    padding-bottom: 3rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 60%
    );
  }
`;

const Title = styled.p`
  font-size: 1.25rem;
  line-height: normal;
  margin-bottom: 0.3rem;

  @media (min-width: 640px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Desc = styled.p`
  display: block;
  font-size: 0.8rem;
  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;
