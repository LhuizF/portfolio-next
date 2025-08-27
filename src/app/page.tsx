import { HeroSection } from '@/app/components/HeroSection'
import { About } from '@/app/components/About';
import { Connect } from '@/app/components/Connect';
import { Experiences } from '@/app/components/Experiences'

export default function Home() {

  return (
    <>
      <HeroSection />
      <About />
      <Experiences />
      <Connect />
    </>
  );
}
