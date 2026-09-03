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
  const duration = {
    fast: '15s',
    normal: '25s',
    slow: '40s',
  }[speed];

  const directionClass = reverse ? 'reverse' : 'normal';

  return (
    <div className={cn("relative flex w-full overflow-hidden mask-horizontal", className)}>
      <div 
        className={cn("flex w-max min-w-full animate-marquee")}
        style={{ 
          animationDirection: directionClass,
          animationDuration: duration
        }}
      >
        <div className="flex gap-4 px-2">{children}</div>
        <div className="flex gap-4 px-2">{children}</div>
        <div className="flex gap-4 px-2">{children}</div>
        <div className="flex gap-4 px-2">{children}</div>
        <div className="flex gap-4 px-2">{children}</div>
        <div className="flex gap-4 px-2">{children}</div>
      </div>
    </div>
  );
}
