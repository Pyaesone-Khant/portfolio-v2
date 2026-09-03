'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: 'Dhamma Aung Lan',
    description: 'A high-performance cross-platform Admin Panel for Web and Desktop using React and Electron.',
    tags: ['React', 'Electron', 'TanStack Query'],
    color: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    title: 'Rangoon Success Academy',
    description: 'An SEO-first educational platform optimized for Core Web Vitals and organic growth.',
    tags: ['Next.js', 'SSR', 'Tailwind'],
    color: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'SarPhat Publishing',
    description: 'Lightning-fast publishing platform handling high-volume content with strategic SEO tuning.',
    tags: ['Next.js', 'Zustand', 'SEO'],
    color: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'Panora Bookshop',
    description: 'Revitalized e-commerce experience with RTK Query for streamlined server-state synchronization.',
    tags: ['Next.js', 'RTK Query', 'E-commerce'],
    color: 'bg-emerald-500/10 border-emerald-500/20',
  },
];

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.project-card');
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // The snap property can make it snap to each card
        snap: 1 / (sections.length - 1),
        // End after scrolling 200% of the viewport height (adjust for speed)
        end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-zinc-950 text-white relative flex items-center">
      <div className="absolute top-12 left-4 md:left-12 z-10 mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Works</h2>
      </div>

      <div ref={scrollWrapperRef} className="flex h-[60vh] w-[400vw] sm:w-[300vw] md:w-[200vw] pl-4 md:pl-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card w-screen md:w-[50vw] h-full flex-shrink-0 flex items-center justify-center p-4"
          >
            <div className={`relative w-full h-full max-w-2xl rounded-3xl border p-8 flex flex-col justify-between overflow-hidden backdrop-blur-sm ${project.color}`}>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <h3 className="text-3xl md:text-5xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg md:text-xl text-zinc-300 max-w-md leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium border border-white/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
