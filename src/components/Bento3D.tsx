'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { SiReact, SiNextdotjs, SiTypescript, SiRust, SiNodedotjs, SiNestjs, SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const techs = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/30" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "bg-white/10", border: "border-white/30" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10", border: "border-[#3178C6]/30" },
  { name: "Rust", icon: SiRust, color: "text-[#DEA584]", bg: "bg-[#DEA584]/10", border: "border-[#DEA584]/30" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", bg: "bg-[#339933]/10", border: "border-[#339933]/30" },
  { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]", bg: "bg-[#E0234E]/10", border: "border-[#E0234E]/30" },
  { name: "AWS", icon: FaAws, color: "text-[#FF9900]", bg: "bg-[#FF9900]/10", border: "border-[#FF9900]/30" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10", border: "border-[#2496ED]/30" },
];

export default function Bento3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Randomly position the tech pills
    const pills = gsap.utils.toArray('.tech-pill');
    
    pills.forEach((pill: any, i) => {
      // Set initial random position
      gsap.set(pill, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        scale: 0,
        opacity: 0,
      });

      // Animate them in
      gsap.to(pill, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.5)",
        delay: i * 0.1,
      });

      // Add floating animation
      gsap.to(pill, {
        y: "+=15",
        rotation: () => (Math.random() - 0.5) * 10,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });

    // Make them draggable
    Draggable.create(".tech-pill", {
      bounds: containerRef.current,
      edgeResistance: 0.65,
      type: "x,y",
      onPress: function() {
        gsap.to(this.target, { scale: 1.1, duration: 0.2 });
      },
      onRelease: function() {
        gsap.to(this.target, { scale: 1, duration: 0.2, ease: "back.out(2)" });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden flex items-center justify-center pointer-events-auto">
      {/* Background animated gradient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black blur-2xl pointer-events-none" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {techs.map((tech) => (
        <div
          key={tech.name}
          className={`tech-pill absolute p-4 rounded-3xl ${tech.bg} ${tech.border} backdrop-blur-xl border shadow-2xl cursor-grab active:cursor-grabbing flex flex-col items-center justify-center gap-3 w-24 h-24 sm:w-28 sm:h-28 z-10`}
        >
          <tech.icon size={32} className={tech.color} />
          <span className="text-[10px] sm:text-xs font-bold text-zinc-300 tracking-wider uppercase">{tech.name}</span>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-0">
        <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
          </span>
          Drag to play
        </span>
      </div>
    </div>
  );
}
