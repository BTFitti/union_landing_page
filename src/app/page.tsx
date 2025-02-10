import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
    </div>
  );
}
