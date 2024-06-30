import { useState, useRef, useEffect, ReactNode } from "react";
import styled from "styled-components";
import ModalPortal from "components/Portal";

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
      <ModalPortal>
        <ModalBackground isOpen={isOpen} />
        <ModalWrapper
          isOpen={isOpen}
          ref={modal}
          onClick={(event) => {
            event.target === modal.current && setIsOpen(false);
          }}
        >
          {children}
        </ModalWrapper>
      </ModalPortal>
    );
  };

  return { Modal, isOpen, setIsOpen };
};

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalBackground = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 150vh;
  z-index: 100;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #00000090;
  backdrop-filter: blur(10px);
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export default useModal;
