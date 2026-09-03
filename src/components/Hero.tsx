'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import MagneticButton from './MagneticButton';

function HeroShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smoothly rotate based on mouse position
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
  });

  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <mesh ref={meshRef}>
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
    
    tl.from('.hero-btn', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} id="hero-section" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <HeroShape />
          <Environment preset="city" />
        </Canvas>
      </div>
      
      <div className="z-10 text-center flex flex-col items-center max-w-4xl px-4 mt-16 md:mt-0">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance px-2">
          Hi, I&apos;m <span className="animate-basic-color inline-block">Pyaesone Khant</span>
        </h1>
        <p className="hero-text mt-6 text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-2xl font-light px-4">
          A product-focused Software Engineer transforming ambiguous needs into high-performance, scalable solutions.
        </p>
        
        <div className="hero-btn mt-12">
          <MagneticButton onClick={() => {
            // Scroll to next section smoothly
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}>
            Explore My Work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
