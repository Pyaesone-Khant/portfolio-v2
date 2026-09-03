'use client';

import { useRef, useEffect } from 'react';

export default function Bento3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const orb = orbRef.current;
    if (!container || !orb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move orb to mouse position smoothly
      orb.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto bg-zinc-900"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
      />
      
      {/* Interactive Glowing Orb */}
      <div 
        ref={orbRef}
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-500/30 blur-[60px] transition-opacity duration-500 opacity-50 group-hover:opacity-100 mix-blend-screen pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Abstract geometric shapes (pure CSS) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-zinc-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-zinc-700/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
    </div>
  );
}
