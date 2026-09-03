import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />

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
