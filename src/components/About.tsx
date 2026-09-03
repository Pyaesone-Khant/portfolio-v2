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
    <section id="about-section" ref={container} className="min-h-dvh py-24 px-4 md:px-12 max-w-7xl mx-auto bento-container">
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 tracking-tight flex flex-wrap gap-x-3 md:gap-x-4">
        {title.split(" ").map((word, i) => (
          <span key={i} className="overflow-hidden inline-flex pb-2">
            <span className="about-word inline-block origin-bottom-left">{word}</span>
          </span>
        ))}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Frontend Architecture */}
        <div className="bento-item relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
          <div className="absolute top-8 left-0 right-0 z-10">
            <TechMarquee speed="normal">
              <SiTypescript className={iconClass} />
              <SiReact className={iconClass} />
              <SiNextdotjs className={iconClass} />
              <SiExpo className={iconClass} />
              <SiRedux className={iconClass} />
              <SiElectron className={iconClass} />
              <SiTauri className={iconClass} />
            </TechMarquee>
          </div>
          <h3 className="text-2xl font-medium mt-auto">Frontend & Mobile Architecture</h3>
          <p className="text-zinc-500 mt-2">
            TypeScript, React, Next.js, React Native, Expo, Zustand. Bridging web, mobile, and desktop ecosystems.
          </p>
        </div>

        {/* Backend Architecture */}
        <div className="bento-item relative overflow-hidden col-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
          <div className="absolute top-8 left-0 right-0">
            <TechMarquee speed="slow" reverse>
              <SiNodedotjs className={iconClass} />
              <SiNestjs className={iconClass} />
              <SiRust className={iconClass} />
              <SiExpress className={iconClass} />
            </TechMarquee>
          </div>
          <h3 className="text-2xl font-medium mt-auto">Backend Systems</h3>
          <p className="text-zinc-500 mt-2">
            Node.js, NestJS, Rust, TypeORM, and robust REST APIs.
          </p>
        </div>

        {/* Cloud & Infrastructure */}
        <div className="bento-item relative overflow-hidden col-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
          <div className="absolute top-8 left-0 right-0">
            <TechMarquee speed="fast">
              <FaAws className={iconClass} />
              <SiGooglecloud className={iconClass} />
              <SiDigitalocean className={iconClass} />
              <SiDocker className={iconClass} />
            </TechMarquee>
          </div>
          <h3 className="text-2xl font-medium mt-auto">Cloud & Ops</h3>
          <p className="text-zinc-500 mt-2">
            Deploying and scaling with AWS (ECS, S3), GCP, and Digital Ocean.
          </p>
        </div>

        {/* Databases & Workflow */}
        <div className="bento-item group relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
          <Bento3D />
          <div className="absolute top-8 left-0 right-0 z-10">
            <TechMarquee speed="normal" reverse>
              <SiPostgresql className={iconClass} />
              <SiMysql className={iconClass} />
              <SiMongodb className={iconClass} />
              <VscVscodeInsiders className={iconClass} />
            </TechMarquee>
          </div>
          <h3 className="text-2xl font-medium mt-auto z-10">Databases & AI Workflow</h3>
          <p className="text-zinc-500 mt-2 z-10">
            PostgreSQL, MySQL, MongoDB. Consistently achieving rapid delivery cycles using AI-native workflows (Cursor, Antigravity).
          </p>
        </div>
      </div>
    </section>
  );
}
