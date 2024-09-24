import { Modal } from "elast-ui";
import { useState } from "react";
import { Container, Title } from "../Project5";

export default function ModalSection() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Container>
      <Title>Modal</Title>
      <button
        onClick={() => {
          setModalOpen(!modalOpen);
          console.log(modalOpen);
        }}
      >
        {modalOpen ? "close" : "open"}
      </button>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          console.log("closed");
        }}
        className="flex flex-col w-full h-full justify-center items-center backdrop-blur-md"
      >
        <Modal.Container className="bg-white rounded-lg shadow-lg py-6 px-8">
          <Modal.Title className="text-[1.5rem] mb-4">HI THERE</Modal.Title>
          <Modal.Content className="bg-gray-100 h-[200px] w-[500px] rounded-md relative">
            <div>Here is Content Section</div>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              className="inline-block bottom-0"
            >
              close
            </button>
          </Modal.Content>
        </Modal.Container>
      </Modal>
    </Container>
  );
}
