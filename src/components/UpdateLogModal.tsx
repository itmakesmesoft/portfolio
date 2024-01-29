import styled from "styled-components";
import { UpdateInterface } from "types/common";

const UpdateLogModal = ({ updates }: { updates: UpdateInterface[] }) => (
  <MyModal>
    <H1 className="sticky top-0 text-lg font-bold py-4 px-[3rem] bg-white z-10">
      업데이트 기록
    </H1>
    <Div>
      {updates
        .slice(0)
        .reverse()
        .map((mylog: UpdateInterface, index: number) => (
          <div key={`${mylog.date}-${index}`}>
            <p className="sticky top-[60px] font-[600] text-[#515151] left-0 bg-[#f5f5f5] border-y border-[gainsboro]">
              {mylog.date}
            </p>
            <div className="pt-2 pb-3 text-[#3a3a3a]">
              {mylog.content.map((text: string, index: number) => (
                <p key={`${text}-${index}`}>· {text}</p>
              ))}
            </div>
          </div>
        ))}
    </Div>
  </MyModal>
);

export default UpdateLogModal;

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
  cursor: default;
`;

const Div = styled.div`
  & p {
    padding: 0 3rem;
  }
`;

const H1 = styled.h1`
  text-align: center;
  box-shadow: 0px 6px 10px -11px #000000a1;
  height: 60px;
`;
