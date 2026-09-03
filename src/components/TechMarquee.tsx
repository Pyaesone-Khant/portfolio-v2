'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
  const speedClass = {
    fast: 'duration-[15s]',
    normal: 'duration-[25s]',
    slow: 'duration-[40s]',
  }[speed];

  const directionClass = reverse ? 'reverse' : 'normal';

  return (
    <div className={cn("relative flex w-full overflow-hidden mask-horizontal", className)}>
      <div 
        className={cn("flex w-max min-w-full animate-marquee", speedClass)}
        style={{ animationDirection: directionClass }}
      >
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
