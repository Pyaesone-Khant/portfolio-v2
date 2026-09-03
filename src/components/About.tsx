'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import TechMarquee from './TechMarquee';
import Bento3D from './Bento3D';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.about-word', {
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
  const title = "About & Expertise";

  return (
    <section id="about-section" ref={container} className="min-h-dvh py-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-start relative">
      
      {/* Left Column: Sticky Title & Bio */}
      <div className="lg:sticky lg:top-32 w-full lg:w-[45%] flex flex-col z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight flex flex-wrap gap-x-3 md:gap-x-4">
          {title.split(" ").map((word, i) => (
            <span key={i} className="overflow-hidden inline-flex pb-2">
              <span className="about-word inline-block origin-bottom-left">{word}</span>
            </span>
          ))}
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
          I engineer high-performance software with an obsessive focus on product design, creating seamless digital experiences.
        </p>
        
        {/* 3D Interactive Element */}
        <div className="group relative w-full max-w-md aspect-square md:aspect-4/3 rounded-[3rem] overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-2xl">
           <Bento3D />
           <div className="absolute inset-0 z-10 flex items-end justify-center pb-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="px-4 py-2 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 text-zinc-300 uppercase tracking-widest font-bold text-xs shadow-xl">
               Interactive Engine
             </span>
           </div>
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
          <TechMarquee speed="normal" className="py-4">
            <SiTypescript className={iconClass} />
            <SiReact className={iconClass} />
            <SiNextdotjs className={iconClass} />
            <SiExpo className={iconClass} />
            <SiRedux className={iconClass} />
            <SiElectron className={iconClass} />
            <SiTauri className={iconClass} />
          </TechMarquee>
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
          <TechMarquee speed="slow" reverse className="py-4">
            <SiNodedotjs className={iconClass} />
            <SiNestjs className={iconClass} />
            <SiRust className={iconClass} />
            <SiExpress className={iconClass} />
          </TechMarquee>
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
          <TechMarquee speed="fast" className="py-4">
            <FaAws className={iconClass} />
            <SiGooglecloud className={iconClass} />
            <SiDigitalocean className={iconClass} />
            <SiDocker className={iconClass} />
          </TechMarquee>
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
          <TechMarquee speed="normal" reverse className="py-4">
            <SiPostgresql className={iconClass} />
            <SiMysql className={iconClass} />
            <SiMongodb className={iconClass} />
            <VscVscodeInsiders className={iconClass} />
          </TechMarquee>
        </div>

      </div>
    </section>
  );
}
