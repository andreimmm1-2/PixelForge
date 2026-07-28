"use client";

import { useEffect, useRef } from "react";

export const GradientBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="grid-bg absolute inset-0 opacity-40" />
    <div
      className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full animate-blob"
      style={{
        background: "radial-gradient(circle, rgba(109,94,245,0.28), transparent 65%)",
        filter: "blur(90px)",
      }}
    />
    <div
      className="absolute bottom-[-15%] right-[5%] w-[450px] h-[450px] rounded-full animate-blob"
      style={{
        background: "radial-gradient(circle, rgba(139,92,246,0.22), transparent 65%)",
        filter: "blur(90px)",
        animationDelay: "3s",
      }}
    />
  </div>
);

export const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(109,94,245,0.10), transparent 70%)",
        transition: "transform 0.1s linear",
      }}
    />
  );
};
