import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWorks from '@/components/SelectedWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <SelectedWorks />
      <Footer />
    </div>
  );
}
