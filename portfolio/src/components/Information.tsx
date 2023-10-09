import { MdFace, MdOutlineSmartphone, MdEmail } from "react-icons/md";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import useModal from "./useModal";

const Information = () => {
  const { Modal, setIsOpen } = useModal();
  return (
    <div className="mt-[1.5rem] text-sm sm:text-base flex items-start flex-col">
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
      <p className="mt-8">
        Copyright 2023. Eunhyeok Lee. All rights reserved.
        <span
          className="ms-3 text-neutral-400 underline cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          updated at 23.10.09
        </span>
      </p>
      <Modal
        children={
          <MyModal>
            <h1>업데이트 기록</h1>
            <p>
              <b>2023.10.09</b> - Portal을 사용한 useModal hook 제작, css 일부
              수정, 페이지 하단 업데이트 기록 제공
            </p>
          </MyModal>
        }
      />
    </div>
  );
};

const Phrase = styled.span`
  margin-top: 0.125rem;
  color: #616161;
  & .icon {
    margin-right: 0.5rem;
  }
  & svg {
    display: inline-block;
  }
  &:hover {
    color: #45c0bb;
  }
`;

const MyModal = styled.div`
  height: auto;
  width: 70%;
  min-width: 330px;
  max-width: 1000px;
  background-color: white;
  border-radius: 10px;
  padding: 2rem 3rem;
`;

export default Information;
