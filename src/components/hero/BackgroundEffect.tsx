import React, { useEffect, useRef } from 'react';

export function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getSparkleColor = () => {
      const root = document.documentElement;
      return root.classList.contains('dark') ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
    };

    const createSparkles = () => {
      const sparkles = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
      }));

      return sparkles;
    };

    const drawSparkles = (sparkles: any[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sparkleColor = getSparkleColor();
      sparkles.forEach((sparkle) => {
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
        ctx.fillStyle = sparkleColor;
        ctx.fill();
        sparkle.x += sparkle.dx;
        sparkle.y += sparkle.dy;

        if (sparkle.x < 0 || sparkle.x > canvas.width) sparkle.dx *= -1;
        if (sparkle.y < 0 || sparkle.y > canvas.height) sparkle.dy *= -1;
      });
    };

    const sparkles = createSparkles();

    const animate = () => {
      drawSparkles(sparkles);
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sparkles animation */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}