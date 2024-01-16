import styled from "styled-components";
import { UpdateInterface } from "types/common";

const UpdateLogModal = ({ updates }: { updates: UpdateInterface[] }) => (
  <MyModal>
    <div>
      <h1 className="text-lg font-bold mb-4">업데이트 기록</h1>
      {updates.map((mylog: UpdateInterface, index: number) => (
        <li key={`${mylog.date}-${index}`} className="mb-4">
          <b>{mylog.date}</b>
          {mylog.content.map((text: string, index: number) => (
            <p key={`${text}-${index}`}>- {text}</p>
          ))}
        </li>
      ))}
    </div>
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
  padding: 2rem 3rem;
  cursor: default;
`;
