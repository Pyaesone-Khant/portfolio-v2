'use client';

import { ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface TechMarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: 'fast' | 'normal' | 'slow';
  reverse?: boolean;
}

export default function TechMarquee({ 
  children, 
  className,
  speed = 'normal',
  reverse = false
}: TechMarqueeProps) {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let xPercent = 0;
    let direction = reverse ? 1 : -1;
    let speedMultiplier = speed === 'fast' ? 1.5 : speed === 'slow' ? 0.5 : 1;
    
    // Set initial position if reversing
    if (reverse) xPercent = -50;

    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    
    const updateX = () => {
      // Calculate scroll velocity manually
      let currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      let velocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Cap the velocity multiplier to prevent insanely fast spinning
      let v = Math.min(Math.abs(velocity / 10), 5);
      
      // Base speed + scroll velocity bonus
      let moveAmount = (0.05 * speedMultiplier + (v * 0.2)) * direction;
      
      xPercent += moveAmount;
      
      // Seamless loop logic
      if (xPercent <= -50) xPercent += 50;
      if (xPercent >= 0) xPercent -= 50;
      
      gsap.set(track.current, { xPercent });
    };

    gsap.ticker.add(updateX);
    return () => gsap.ticker.remove(updateX);
  }, [speed, reverse]);

  return (
    <div className={cn("relative flex w-full overflow-hidden mask-horizontal", className)}>
      <div 
        ref={track}
        className={cn("flex w-max min-w-full items-center")}
      >
        {/* First Half */}
        <div className="flex items-center shrink-0">
          <div className="flex gap-4 px-2">{children}</div>
          <div className="flex gap-4 px-2">{children}</div>
          <div className="flex gap-4 px-2">{children}</div>
          <div className="flex gap-4 px-2">{children}</div>
        </div>
        {/* Second Half (Exact Copy) */}
        <div className="flex items-center shrink-0">
          <div className="flex gap-4 px-2">{children}</div>
          <div className="flex gap-4 px-2">{children}</div>
          <div className="flex gap-4 px-2">{children}</div>
          <div className="flex gap-4 px-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
