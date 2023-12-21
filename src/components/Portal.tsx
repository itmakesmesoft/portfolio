// Portal.tsx
import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const rootElement: Element | null = useMemo(
    () => document.getElementById("modal-root"),
    []
  );

  return children && rootElement ? createPortal(children, rootElement) : null;
};

export default ModalPortal;
