import styled from "styled-components";

const FILES_NAME: { [skill: string]: { src: string; info: string } } = {
  TypeScript: {
    src: "TypeScript.svg",
    info: "자바스크립트는 타입을 미리 정의하여 개발 과정의 실수를 방지할 수 있는 자바스크립트의 슈퍼셋인 프로그래밍 언어입니다.",
  },
  JavaScript: {
    src: "JavaScript.svg",
    info: "자바스크립트는 웹 브라우저 내에서 주로 사용되는 객체 기반의 스크립트 프로그래밍 언어입니다.",
  },
  Css: {
    src: "css.svg",
    info: "HTML과 같은 마크업 문서를 꾸미기 위해 작성하는 스타일 시트 언어입니다.",
  },
  Html: { src: "Html.svg", info: "웹 페이지의 기본이 되는 마크업 언어입니다." },
  Nextjs: {
    src: "Next.js.svg",
    info: "서버 사이드 렌더링, 정적 웹 페이지 생성 등 리액트 기반 웹 애플리케이션 기능들을 가능케 하는 프레임워크입니다.",
  },
  Python: { src: "Python.svg", info: "test" },
  Reactjs: {
    src: "React.js.svg",
    info: "Single Page Application을 개발하는 데 사용되는 자바스크립트 라이브러리입니다.",
  },
  Tailwind: {
    src: "Tailwind.svg",
    info: "클래스명을 통해 앱을 더 빠르고 쉽게 스타일을 정의할 수 있도록 설계된 CSS 프레임워크입니다.",
  },
  Vuejs: {
    src: "Vue.js.svg",
    info: "웹 애플리케이션의 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 프로그레시브 자바스크립트 프레임워크입니다.",
  },
  OpenAi: {
    src: "OpenAi.svg",
    info: "지도 학습과 강화 학습을 활용해 인간과 유사한 텍스트를 생성하는 대화형 인공지능 서비스 REST API입니다.",
  },
  WebRTC: {
    src: "WebRTC.svg",
    info: "웹 브라우저 간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API입니다.",
  },
  OpenVidu: {
    src: "OpenVidu.webp",
    info: "웹 또는 모바일 애플리케이션에서 화상 통화를 쉽게 추가할 수 있는 WebRTC 기반의 프레임워크입니다.",
  },
  Threejs: {
    src: "Three.js.webp",
    info: "웹 브라우저에서 3차원 컴퓨터 그래픽스 애니메이션 응용을 만들고 표현하기 위해 사용되는 자바스크립트 라이브러리입니다.",
  },
  ReactQuery: {
    src: "ReactQuery.svg",
    info: "리액트의 데이터 Fetching과 Caching, 동기화, 서버 데이터 업데이트 등을 쉽게 만들어 주는 라이브러리입니다",
  },
  FastApi: {
    src: "FastApi.svg",
    info: "Python을 통해 API를 빌드하기 위한 웹 프레임워크입니다",
  },
  Azure: {
    src: "Azure.svg",
    info: "마이크로소프트의 클라우드 컴퓨팅 플랫폼입니다.",
  },
  SWR: {
    src: "Swr.svg",
    info: "React 컴포넌트에서 사용할 수 있는 훅 형태의 데이터 페칭을 위한 SWR 라이브러리입니다.",
  },
};

const UsedTech = (props: { tech: string[] }) => {
  const getMoveXY = (e: any) => {
    const target = e.currentTarget.children[0];
    const parent = document.querySelectorAll("#parent")[0];
    const {
      left: pleft,
      width: pwidth,
      height: pheight,
      top: ptop,
    } = parent.getBoundingClientRect();
    const {
      left: cleft,
      width: cwidth,
      height: cheight,
      top: ctop,
    } = target.getBoundingClientRect();
    return [
      (pwidth - cwidth) / 2 - (cleft - pleft),
      (pheight - cheight) / 2 - (ctop - ptop),
    ];
  };

  const addClassName = (target: any, className: string) => {
    target.classList.add(className);
  };

  const removeClassName = (className: string) => {
    const items = document.querySelectorAll(`.${className}`);
    items.forEach((item: any) => {
      item.classList.remove(className);
      item.style.transform = null;
    });
  };

  const handleClick = (e: any) => {
    const actives = document.querySelectorAll(".active");
    cancelClick();
    if (actives.length < 1) {
      const target = e.currentTarget.children[0];
      const [moveX, moveY] = getMoveXY(e);
      addClassName(target, "active");
      setBlurBackground();
      document.querySelectorAll(".wrapitem").forEach((item: any) => {
        item.style.zIndex = null;
      });
      e.currentTarget.style.zIndex = 1;
      target.style.transform = `translateX(${moveX}px) translateY(${moveY}px) translateZ(0) scale(200%) rotateY(180deg)`;
    }
  };

  const cancelClick = () => {
    removeClassName("active");
    unSetBlurBackground();
  };

  const setBlurBackground = () => {
    const background: HTMLElement | null = document.querySelector("#blurBg");
    if (background) {
      background.style.opacity = "1";
      background.style.zIndex = "0";
    }
  };

  const unSetBlurBackground = () => {
    const background: HTMLElement | null = document.querySelector("#blurBg");
    if (background) {
      background.style.opacity = "";
      background.style.zIndex = "";
    }
  };

  return (
    <div
      id="parent"
      className="relative mx-auto max-w-[1000px] border-b border-[#d2d2d2] py-[4rem] sm:py-[7rem]"
    >
      <h1 className="text-center text-[2rem] font-extrabold">What I used</h1>
      <div className="flex flex-row justify-center items-end flex-wrap mt-8">
        {props.tech.map((t: any, index: number) => {
          return (
            <Wrapper className="wrapitem" key={index} onClick={handleClick}>
              <Tech className="techitem w-[7rem] sm:w-[7.5rem] md:w-[8rem] px-2 py-4 sm:px-6 mb-4">
                {FILES_NAME[t] && (
                  <img
                    src={require(`/public/icons/${FILES_NAME[t].src}`)}
                    alt={t}
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] mx-auto"
                  />
                )}
                <p className="mt-4 text-center">{t}</p>
                <Info className="info">
                  <header>{t}</header>
                  <article>{FILES_NAME[t].info}</article>
                </Info>
              </Tech>
            </Wrapper>
          );
        })}
      </div>
      <Background id="blurBg" onClick={cancelClick} />
    </div>
  );
};

export default UsedTech;
const Wrapper = styled.div`
  transform-style: preserve-3d;
  perspective: 300px;
  position: relative;
  box-sizing: border-box;
`;

const Info = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  padding: 1rem;
  opacity: 0;
  word-wrap: break-word;
  text-align: center;
  transition: opacity 0.2s;
  transform: rotateY(180deg) scale(50%);
  will-change: transform;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 0.85rem;

  & > header {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700;
  }

  @media screen and (min-width: 640px) {
    font-size: 1rem;
    padding: 1.5rem;
    & > header {
      font-size: 1.25rem;
    }
  }
`;

const Tech = styled.div`
  transition: 0.5s;
  cursor: pointer;
  border-radius: 1rem;
  box-sizing: border-box;
  &:hover {
    transition: 0.2s;
    transform: rotateY(45deg);
    background: white;
    box-shadow: 0px 0px 20px -15px black;
    & > img,
    > p {
      opacity: 0.7;
    }
  }

  &.active {
    transition: 0.5s;
    background: white;
    box-shadow: #00000017 0px 0px 15px -10px;
    & img,
    p {
      opacity: 0;
    }
    & > .info {
      transition: 0.5s;
      opacity: 1;
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(50px);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
`;
