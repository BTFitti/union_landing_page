import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Testimonials } from "./_components/testimonials";
import { Subscribe } from "./_components/subscribe";
import { Faq } from "./_components/faq";
import { Footer } from "./_components/footer";
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Testimonials />
      <Subscribe/>
      <Faq/>
      <Footer/>
    </div>
  );
}
