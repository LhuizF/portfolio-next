import { HeroSection } from '@/app/components/HeroSection'
import { About } from './components/About';
import { Connect } from './components/Connect';

export default function Home() {

  return (
    <>
      <HeroSection />
      <About />
      <Connect />
    </>
  );
}
