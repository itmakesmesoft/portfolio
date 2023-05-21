import { useRef, useEffect, useState } from "react";
export const AboutPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<any>();
  console.log("rerender");
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvasRef.current.getContext("2d");
      setCtx(context);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const img = new Image();
      img.src = "/images/image.jpg";
      img.onload = () => {
        if (ctx) {
          const ratio = img.width / img.height;

          ctx.drawImage(
            img,
            0,
            0,
            window.innerHeight,
            window.innerHeight * ratio
          );
        }
      };
    }
  }, [ctx]);

  const canvasEventListener = (event: any, type: string) => {
    if (type === "scroll") {
      console.log(event.deltaY);
    } else {
      console.log(event, type);
    }
  };

  return (
    <div className="h-[2000px] w-full">
      <canvas
        ref={canvasRef}
        onWheel={(event) => canvasEventListener(event, "scroll")}
        onMouseDown={(event) => canvasEventListener(event, "down")}
        onMouseUp={(event) => canvasEventListener(event, "up")}
        className="sticky top-0 left-0 h-screen w-screen bg-red-200"
      >
        <img src="/images/image.jpg" alt="" className="w-full h-full" />
      </canvas>

      <p>About 입니다</p>
    </div>
  );
};
