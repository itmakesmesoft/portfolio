import { HashLink as Link } from "react-router-hash-link";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col justify-center items-center w-full z-10">
      <div className="flex flex-row justify-between items-center w-full z-40 h-[60px] max-w-[1300px] px-4">
        <Link
          to="/#"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <img
            src="/images/image.jpg"
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
            alt="logo"
          />
        </Link>
        <div>
          <ul className="flex flex-row">
            <li className="mr-6 cursor-pointer">
              <Link
                to="/#about"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-[#45c0bb]"
              >
                About
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
                Projects
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
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
