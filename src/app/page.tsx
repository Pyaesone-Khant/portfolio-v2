import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWorks from '@/components/SelectedWorks';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import FloatingLogo from '@/components/FloatingLogo';

export default function Home() {
  return (
    <div className="w-full">
      <FloatingLogo />
      <FloatingNav />
      <Hero />
      <About />
      <SelectedWorks />
      <Footer />
    </div>
  );
}
