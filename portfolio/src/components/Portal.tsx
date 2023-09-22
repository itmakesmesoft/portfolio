// Portal.tsx
import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";

const Portal = ({
  children,
  elementId,
}: {
  children: ReactNode;
  elementId: string;
}) => {
  const rootElement: Element | null = useMemo(
    () => document.getElementById("modal-root"),
    [elementId]
  );

  return children && rootElement ? createPortal(children, rootElement) : null;
};

export default Portal;
