'use client';

import { useRef } from 'react';
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

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
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
  );
}
