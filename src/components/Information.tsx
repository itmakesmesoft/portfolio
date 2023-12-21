import { MdFace } from "@react-icons/all-files/md/MdFace";
import { MdSmartphone } from "@react-icons/all-files/md/MdSmartphone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import useModal from "./useModal";

const updateLog = [
  {
    date: "2023.10.08",
    content: [
      "웹폰트 preload 적용",
      "font-face 속성 변경",
      "애니메이션 전환 interval 고정값으로 변경",
      "불필요한 코드 제거",
    ],
  },
  {
    date: "2023.10.09",
    content: [
      "Portal을 사용한 useModal hook 제작",
      "css 일부 수정",
      "페이지 하단 업데이트 기록 제공",
      "저화질 이미지 placeholder lazyloading 적용",
      "이미지 로드 시 레이아웃 밀리는 문제 개선",
      "헤더 푸터 height 조정",
    ],
  },
  {
    date: "2023.10.10",
    content: [
      "서브셋 폰트 적용",
      "이미지 사이즈, 속성 및 형식 변경",
      "스타일 일부 수정",
    ],
  },
  {
    date: "2023.11.07",
    content: ["프로젝트 깃허브 링크 추가"],
  },
  {
    date: "2023.11.11",
    content: [
      "기존 react-icons 삭제 후 @react-icons/all-files 추가",
      "notion 링크 추가",
    ],
  },
  {
    date: "2023.12.20",
    content: ["메인페이지 프로젝트 리스트 호버 시 정보 표시하는 기능 추가"],
  },
  {
    date: "2023.12.21",
    content: [
      "프로젝트 상세 설명 내 카드 호버링 시 리플로우 현상 개선 및 페이드인 효과 추가",
      "스타일 일부 수정",
      "프로젝트 상세 페이지 내 범용적으로 사용되는 코드 컴포넌트화",
      "상세페이지 이미지 preload 적용",
    ],
  },
];

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
          <MdSmartphone className="icon" />
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
        Copyright 2023. Eunhyeok Lee. All rights reserved.{" "}
        <span
          className="text-neutral-400 underline cursor-pointer inline-block"
          onClick={() => setIsOpen(true)}
        >
          updated at {updateLog[updateLog.length - 1]["date"]}
        </span>
      </p>
      <Modal
        children={
          <MyModal>
            <div>
              <h1 className="text-lg font-bold mb-4">업데이트 기록</h1>
              {updateLog.map(
                (mylog: { date: string; content: string[] }, index: number) => (
                  <li key={`${mylog.date}-${index}`} className="mb-4">
                    <b>{mylog.date}</b>
                    {mylog.content.map((text: string, index: number) => (
                      <p key={`${text}-${index}`}>- {text}</p>
                    ))}
                  </li>
                )
              )}
            </div>
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
  max-height: 70vh;
  min-height: 500px;
  width: 90%;
  overflow: auto;
  min-width: 330px;
  max-width: 700px;
  background-color: white;
  border-radius: 10px;
  padding: 2rem 3rem;
  cursor: default;
`;

export default Information;
