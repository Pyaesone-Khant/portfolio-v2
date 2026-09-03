import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
