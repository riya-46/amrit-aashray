import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import OurWork from "../components/OurWork";
import Vision from "../components/Vision";
import Volunteer from "../components/Volunteer";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <OurWork />
      <Vision />
      <Gallery />
      <Impact />
      <Contact />
      <Volunteer />
    </MainLayout>
  );
}

export default Home;
