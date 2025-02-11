import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Testimonials } from "./_components/testimonials";
import { Subscribe } from "./_components/subscribe";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Subscribe/>
    </div>
  );
}
