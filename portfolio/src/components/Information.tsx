import { MdFace, MdOutlineSmartphone, MdEmail } from "react-icons/md";
import styled from "styled-components";

const Information = () => {
  return (
    <div className="mt-[1.5rem]">
      <Phrase>
        <MdFace className="icon" />
        이은혁
      </Phrase>
      <Phrase>
        <MdOutlineSmartphone className="icon" />
        010-6396-7078
      </Phrase>
      <Phrase>
        <MdEmail className="icon" />
        dmsgur7112@naver.com
      </Phrase>
    </div>
  );
};

const Phrase = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  font-weight: 600;

  & .icon {
    margin-right: 0.5rem;
  }
`;

export default Information;
