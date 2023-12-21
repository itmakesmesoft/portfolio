import { HashLink as Link } from "react-router-hash-link";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col justify-center items-center w-full z-50 text-sm sm:text-base backdrop-blur-lg bg-[#eaeaea70]">
      <div className="flex flex-row justify-between items-center w-full z-40 h-[45px] max-w-[1300px] px-4">
        <Link
          to="/#"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="flex-none"
        >
          <img
            src="/images/logo.webp"
            className="w-[35px] h-[35px] rounded-full cursor-pointer"
            alt="logo"
          />
        </Link>
        <div>
          <ul className="flex flex-row">
            <li className="mr-6 cursor-pointer hidden sm:block">
              <Link
                to="/#"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-[#45c0bb]"
              >
                INTRO
              </Link>
            </li>
            <li className="mr-6 cursor-pointer">
              <Link
                to="/#about"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-[#45c0bb]"
              >
                ABOUT
              </Link>
            </li>
            <li className="mr-6 cursor-pointer">
              <Link
                to="/#project"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-[#45c0bb]"
              >
                PROJECTS
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/#contact"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-[#45c0bb]"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
