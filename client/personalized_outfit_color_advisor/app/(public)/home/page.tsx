import Navbar from "../_components/Navbar";
import Hero from "../_components/Hero";
import About from "../_components/About";

import Footer from "../_components/Footer";
import WhyChooseUs from "../_components/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="bg-[#FFFDFB] text-[#2B2B2B] min-h-screen font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
           <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}