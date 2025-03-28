import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(10px, 10px)',
      }}
    >
      <span className="text-[#191a1f] bg-white/80 px-3 py-1 rounded-full text-sm font-medium [font-family:'Montserrat',Helvetica] backdrop-blur-sm">
        Full launch 2025
      </span>
    </div>
  );
};