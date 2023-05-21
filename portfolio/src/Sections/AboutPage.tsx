import { useRef, useEffect, useState } from "react";
export const AboutPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        drawImageOnCanvas(canvas);
      }
    };

    const drawImageOnCanvas = (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.src = "/images/image.jpg";

      image.onload = () => {
        if (ctx) {
          const ratio = image.height / image.width;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, canvas.width, canvas.width * ratio);
        }
      };
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 로드 시에도 적용

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 가상의 이미지 비율
  // const originalImageWidth = 800;
  // const originalImageHeight = 800;

  return (
    <div className="h-[2000px]">
      <canvas
        className="sticky top-0 left-0"
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
      >
        Your browser does not support the HTML5 canvas element.
      </canvas>
    </div>
  );
};
