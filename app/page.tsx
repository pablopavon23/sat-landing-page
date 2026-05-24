import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Modalities from "@/components/Modalities";
import Route from "@/components/Route";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Modalities />
        <Route />
        <Gallery />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}