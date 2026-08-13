"use client";

import { useEffect, useRef } from "react";

type ThreadsProps = {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
};

const Threads = ({
  color = [138, 138, 132],
  amplitude = 0.8,
  distance = 0.4,
  enableMouseInteraction = false,
}: ThreadsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationFrame = 0;
    let pointer = { x: 0.5, y: 0.5 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const handlePointer = (event: PointerEvent) => {
      if (!enableMouseInteraction) return;
      const bounds = canvas.getBoundingClientRect();
      pointer = { x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height };
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;

      for (let index = 0; index < 12; index += 1) {
        const base = index / 11;
        context.beginPath();
        context.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.08 + index * 0.004})`;

        for (let step = 0; step <= 60; step += 1) {
          const progress = step / 60;
          const x = progress * width;
          const wave = Math.sin(progress * 5 + frame * 0.006 + index * 0.45) * height * 0.035 * amplitude;
          const pull = enableMouseInteraction ? (pointer.y - 0.5) * height * distance * 0.1 : 0;
          const y = base * height + wave + pull * Math.sin(progress * Math.PI);
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }

      frame += 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointer);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointer);
    };
  }, [amplitude, color, distance, enableMouseInteraction]);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
};

export default Threads;
