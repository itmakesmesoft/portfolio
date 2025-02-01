import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
export const Header = () => {
  const menuList = [
    { to: "/#", title: "INTRO" },
    { to: "/#about", title: "ABOUT" },
    { to: "/#timeline", title: "TIMELINE" },
    { to: "/#project", title: "PROJECTS" },
    { to: "/#contact", title: "CONTACT" },
  ];
  const scrollTo = (element: Element) =>
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  const [banner, setBanner] = useState<boolean>(true);

  return (
    <header className="fixed top-0 left-0 flex flex-col justify-center items-center w-full z-50 text-sm sm:text-base backdrop-blur-lg bg-light-primary">
      {banner && (
        <div className="relative p-2 bg-[#525252] flex flex-row w-screen justify-center items-center text-white gap-8">
          <p>이 페이지는 더 이상 관리되지 않아요.</p>
          <Button
            className="bg-[#52918d] px-2 py-1 hover:bg-[#62a9a4] active:bg-[#4b8581] cursor-pointer"
            href="https://itmakesmesoft.vercel.app"
          >
            새로운 블로그 놀러가기
          </Button>
          <Button
            className="p-1 cursor-pointer absolute right-6 top-2 text-[#cacaca] hover:text-white"
            onClick={() => setBanner(false)}
          >
            닫기
          </Button>
        </div>
      )}
      <div className="flex flex-row justify-between items-center w-full z-40 h-[45px] max-w-[1300px] px-4">
        <HashLink to="/#" scroll={scrollTo} className="flex-none">
          <img
            src="/images/logo.webp"
            className="w-[35px] h-[35px] rounded-full cursor-pointer"
            alt="logo"
          />
        </HashLink>
        <div>
          <ul className="flex flex-row">
            {menuList.map((menu, index) => (
              <li
                key={`${menu}-${index}`}
                className="mr-3 sm:mr-6 last:mr-0 cursor-pointer first:hidden first:sm:block"
              >
                <HashLink
                  to={menu.to}
                  scroll={scrollTo}
                  className="hover:text-[#45c0bb]"
                >
                  {menu.title}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;
