import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      // Wait for actual mouse use to show the cursor and start tracking
      const detectMouse = (e: MouseEvent) => {
        console.log("Mouse detected, enabling cursor tracking");
        setShowCursor(true);
        setPosition({ x: e.clientX, y: e.clientY });
        document.removeEventListener("mousemove", detectMouse);
        document.addEventListener("mousemove", handleMouseMove);
      };

      document.addEventListener("mousemove", detectMouse);

      return () => {
        document.removeEventListener("mousemove", detectMouse);
        document.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      // Non-touch: show immediately and track
      setShowCursor(true);
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  if (!showCursor) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-16 h-16 border-2 border-blue-500 rounded-full pointer-events-none transition-all duration-150 mix-blend-difference ease-out z-[9999]"
        style={{ transform: `translate(${position.x - 32}px, ${position.y - 32}px)` }}
      />

      {/* Inner Dot */}
      <div
        className="fixed w-8 h-8 bg-blue-500 rounded-full pointer-events-none transition-all duration-150 mix-blend-difference ease-out z-[9999]"
        style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px)` }}
      />
    </>
  );
}
