import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWorks from '@/components/SelectedWorks';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  return (
    <div className="w-full">
      <FloatingNav />
      <Hero />
      <About />
      <SelectedWorks />
      <Footer />
    </div>
  );
}
