import Scroll from "react-scroll";
import { useNavigate } from "react-router";
export const Header = () => {
  const Link = Scroll.Link;
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 flex flex-col justify-center items-center w-full z-10">
      <div className="flex flex-row justify-between items-center w-full z-40 h-[60px] max-w-[1300px] px-4">
        <Link to="intro" onClick={() => navigate("/")} smooth={true}>
          <img
            src="/images/image.jpg"
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
            alt="logo"
          />
        </Link>
        <div>
          <ul className="flex flex-row">
            <li className="mr-6 cursor-pointer">
              <Link to="about" smooth={true} className="hover:text-[#45c0bb]">
                About
              </Link>
            </li>
            <li className="mr-6 cursor-pointer">
              <Link
                to="projects"
                smooth={true}
                className="hover:text-[#45c0bb]"
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="contact" smooth={true} className="hover:text-[#45c0bb]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
