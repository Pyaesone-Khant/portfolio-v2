'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { FaAws } from 'react-icons/fa';
import {
  SiDigitalocean, SiDocker,
  SiElectron,
  SiExpo,
  SiExpress,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRust,
  SiTauri,
  SiTypescript
} from 'react-icons/si';
import { VscVscodeInsiders } from 'react-icons/vsc'; // Using as a proxy for Cursor/AI IDE
import Bento3D from './Bento3D';
import TechMarquee from './TechMarquee';

gsap.registerPlugin(ScrollTrigger);

export default function Expertises() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.expertise-word', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: '120%',
      opacity: 0,
      rotationZ: 10,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out'
    });
  }, { scope: container });

  const iconClass = "text-4xl text-zinc-400 hover:text-white transition-colors mx-4";
  const title = "Core Expertises";

  const frontendTech = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Expo", icon: SiExpo },
    { name: "Redux", icon: SiRedux },
    { name: "Electron", icon: SiElectron },
    { name: "Tauri", icon: SiTauri },
  ];

  const backendTech = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "NestJS", icon: SiNestjs },
    { name: "Rust", icon: SiRust },
    { name: "Express", icon: SiExpress },
  ];

  const cloudTech = [
    { name: "AWS", icon: FaAws },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "DigitalOcean", icon: SiDigitalocean },
    { name: "Docker", icon: SiDocker },
  ];

  const databaseTech = [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "AI Tooling", icon: VscVscodeInsiders },
  ];

  return (
    <section id="expertises-section" ref={container} className="min-h-dvh py-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-start relative">
      
      {/* Left Column: Sticky Title & Bio */}
      <div className="lg:sticky lg:top-32 w-full lg:w-[45%] flex flex-col z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight flex flex-wrap gap-x-3 md:gap-x-4">
          {title.split(" ").map((word, i) => (
            <span key={i} className="overflow-hidden inline-flex pb-2">
              <span className="expertise-word inline-block origin-bottom-left">{word}</span>
            </span>
          ))}
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
          I specialize in architecting scalable solutions across the modern stack, from deeply interactive frontends to robust cloud-native backends.
        </p>
        
        {/* 3D Interactive Element */}
        <div className="group relative w-full max-w-md aspect-square md:aspect-4/3 rounded-[3rem] overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-2xl">
           <Bento3D />
        </div>
      </div>

      {/* Right Column: Expertise List */}
      <div className="w-full lg:w-[55%] flex flex-col gap-16 lg:gap-24 lg:pt-12">
        
        {/* Frontend block */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-zinc-800 pb-6 flex justify-between items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Frontend Architecture</h3>
              <p className="text-zinc-500 text-lg">Web, Mobile & Desktop ecosystems.</p>
            </div>
            <span className="text-zinc-600 font-mono text-lg font-bold">01</span>
          </div>
          <TechMarquee items={frontendTech} speed="normal" className="pt-12 pb-4 -mt-8" />
        </div>

        {/* Backend block */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-zinc-800 pb-6 flex justify-between items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Backend Systems</h3>
              <p className="text-zinc-500 text-lg">Scalable APIs & Microservices.</p>
            </div>
            <span className="text-zinc-600 font-mono text-lg font-bold">02</span>
          </div>
          <TechMarquee items={backendTech} speed="slow" reverse className="pt-12 pb-4 -mt-8" />
        </div>

        {/* Cloud block */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-zinc-800 pb-6 flex justify-between items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Cloud & Ops</h3>
              <p className="text-zinc-500 text-lg">Infrastructure & Deployment.</p>
            </div>
            <span className="text-zinc-600 font-mono text-lg font-bold">03</span>
          </div>
          <TechMarquee items={cloudTech} speed="fast" className="pt-12 pb-4 -mt-8" />
        </div>

        {/* Databases block */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-zinc-800 pb-6 flex justify-between items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Data & AI Workflow</h3>
              <p className="text-zinc-500 text-lg">AI-native tools & Relational Data.</p>
            </div>
            <span className="text-zinc-600 font-mono text-lg font-bold">04</span>
          </div>
          <TechMarquee items={databaseTech} speed="normal" reverse className="pt-12 pb-4 -mt-8" />
        </div>

      </div>
    </section>
  );
}
