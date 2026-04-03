import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

// TODO: Spline에서 Export > Code > Public URL 복사 후 아래에 붙여넣기
const SPLINE_URL = undefined; // 예: 'https://prod.spline.design/xxxxx/scene.splinecode'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero splineUrl={SPLINE_URL} />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
