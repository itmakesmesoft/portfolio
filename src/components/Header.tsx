import { HashLink } from "react-router-hash-link";
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

  return (
    <header className="fixed top-0 left-0 flex flex-col justify-center items-center w-full z-50 text-sm sm:text-base backdrop-blur-lg bg-[#eaeaea70]">
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
            {menuList.map((menu) => (
              <li className="mr-3 sm:mr-6 last:mr-0 cursor-pointer first:hidden first:sm:block">
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
