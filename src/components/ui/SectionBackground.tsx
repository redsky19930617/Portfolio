import React, { useEffect, useRef, useState } from "react";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({ children, className = "" }: SectionBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden py-12 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ${className}`}
    >      
    {/* Blob Effect */}
      <div
        className="absolute pointer-events-none opacity-35 dark:opacity-35 transition-all duration-200 ease-out z-20"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(29, 78, 216, 0.5) 25%, rgba(29, 78, 216, 0.3) 50%, rgba(29, 78, 216, 0.15) 75%, transparent 100%)',
          borderRadius: '50% 40% 60% 30%',
          filter: 'blur(60px)',
          transform: 'scale(1.2)',
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}