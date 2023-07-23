import { MdFace, MdOutlineSmartphone, MdEmail } from "react-icons/md";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Information = () => {
  return (
    <div className="mt-[1.5rem] text-sm sm:text-base">
      <Link
        to="/#about"
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        <Phrase>
          <MdFace className="icon" />
          이은혁
        </Phrase>
      </Link>
      <a href="tel:010-6396-7078">
        <Phrase>
          <MdOutlineSmartphone className="icon" />
          010-6396-7078
        </Phrase>
      </a>
      <a href="mailto:dmsgur7112@naver.com">
        <Phrase>
          <MdEmail className="icon" />
          dmsgur7112@naver.com
        </Phrase>
      </a>
      <p className="mt-8">Copyright 2023. Eunhyeok Lee. All rights reserved.</p>
    </div>
  );
};

const Phrase = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.125rem;
  color: #616161;
  & .icon {
    margin-right: 0.5rem;
  }
  &:hover {
    color: #45c0bb;
  }
`;

export default Information;
