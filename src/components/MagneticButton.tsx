'use client';

import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string;
}

export default function MagneticButton({ children, className, onClick, href, download }: MagneticButtonProps) {
  const containerRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const xTo = gsap.quickTo(container, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(container, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = container.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseClasses = cn(
    "relative flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-300 transition-colors bg-zinc-900/50 backdrop-blur-md text-zinc-300 hover:text-white group",
    className
  );

  if (href) {
    return (
      <a
        ref={containerRef}
        href={href}
        download={download}
        className={baseClasses}
      >
        <span className="relative z-10 pointer-events-none">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      className={baseClasses}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
    </button>
  );
}
