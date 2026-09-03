'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';

function HeroShape() {
  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshTransmissionMaterial 
          thickness={0.5}
          roughness={0.1}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.1}
          backside
        />
      </mesh>
    </Float>
  );
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Basic entrance animation
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.2
    });

    // Scroll triggered animation for Bento box
    gsap.from('.bento-item', {
      scrollTrigger: {
        trigger: '.bento-container',
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <HeroShape />
            <Environment preset="city" />
          </Canvas>
        </div>
        
        <div className="z-10 text-center flex flex-col items-center max-w-4xl px-4">
          <h1 className="hero-text text-5xl md:text-8xl font-bold tracking-tighter text-balance">
            Hi, I'm <span className="text-zinc-500">Pyaesone Khant</span>
          </h1>
          <p className="hero-text mt-6 text-xl md:text-2xl text-zinc-400 max-w-2xl font-light">
            I craft minimalist, innovative digital experiences using modern web technologies.
          </p>
        </div>
      </section>

      {/* Bento Box About Section */}
      <section className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto bento-container">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12 tracking-tight">About & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <div className="bento-item col-span-1 md:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-medium">Frontend Engineering</h3>
            <p className="text-zinc-500 mt-2">Specializing in React, Next.js, and complex interactive UIs.</p>
          </div>
          <div className="bento-item col-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-medium">Animations</h3>
            <p className="text-zinc-500 mt-2">Bringing interfaces to life with GSAP.</p>
          </div>
          <div className="bento-item col-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-medium">Creative Coding</h3>
            <p className="text-zinc-500 mt-2">Exploring 3D space with WebGL & R3F.</p>
          </div>
          <div className="bento-item col-span-1 md:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-medium">Minimalist Design</h3>
            <p className="text-zinc-500 mt-2">Focusing on what matters. Stripping away the noise.</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact Placeholder */}
      <section className="h-[50vh] flex items-center justify-center bg-zinc-950 text-zinc-50">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's build something.</h2>
          <a href="mailto:hello@example.com" className="text-xl underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300 transition-colors">
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
