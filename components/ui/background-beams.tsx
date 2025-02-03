'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveBeams = (e: MouseEvent) => {
      if (!beamsRef.current) return;

      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      beamsRef.current.style.setProperty('--x', `${x}%`);
      beamsRef.current.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', moveBeams);
    return () => window.removeEventListener('mousemove', moveBeams);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        'pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute',
        className
      )}
      style={{
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
      }}
    >
      <div className="absolute inset-0 bg-[#0A0118] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};
