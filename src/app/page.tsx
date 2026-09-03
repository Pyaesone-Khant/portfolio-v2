'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from '@/components/Hero';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
      <Hero />

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
