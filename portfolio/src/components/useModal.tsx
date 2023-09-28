import { useState, useRef, useEffect, ReactNode } from "react";
import styled from "styled-components";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isOpen]);

  const Modal = ({ children }: { children: ReactNode }) => {
    return (
      <>
        <ModalOverlay isOpen={isOpen} />
        <ModalWrapper
          isOpen={isOpen}
          ref={modal}
          onClick={(event) => {
            event.target === modal.current && setIsOpen(false);
          }}
        >
          <ModalInner>{children}</ModalInner>
        </ModalWrapper>
      </>
    );
  };

  return { Modal, setIsOpen };
};

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 150vh;
  z-index: 100;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #00000090;
  backdrop-filter: blur(10px);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const ModalInner = styled.div`
  max-height: 70%;
  max-width: 80%;
  aspect-ratio: 5 / 7;
  margin: 0 auto;
  z-index: 200;
  border-radius: 10px;
  overflow: hidden;
  cursor: default;
`;

export default useModal;
