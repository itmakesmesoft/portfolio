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
        }}
        className="inline-block border px-4 py-2 bg-black/10 hover:bg-black/5 rounded-lg"
      >
        {modalOpen ? "close" : "open"}
      </button>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          // console.log("closed");
        }}
        className="flex flex-col w-full h-full justify-center items-center backdrop-blur-md"
      >
        <Modal.Container className="bg-white rounded-lg shadow-lg py-6 px-8">
          <Modal.Title className="text-[1.5rem] mb-4">
            Modal Example
          </Modal.Title>
          <Modal.Content className="bg-gray-100 h-[200px] w-[500px] rounded-md relative p-2">
            Here is Content Area
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              className="absolute bottom-2 right-2 inline-block border px-4 py-2 bg-gray-500 hover:bg-gray-400 rounded-lg text-white"
            >
              close
            </button>
          </Modal.Content>
        </Modal.Container>
      </Modal>
    </Container>
  );
}
