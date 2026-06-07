import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Origin from "./components/Origin/Origin";
import Powers from "./components/Powers/Powers";
import Allies from "./components/Allies/Allies";
import Villains from "./components/Villains/Villains";
import SpiderVerse from "./components/SpiderVerse/SpiderVerse";
import Suits from "./components/Suits/Suits";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Origin />
      <Powers />
      <Allies />
      <Villains />
      <SpiderVerse />
      <Suits />
      <Footer />
    </>
  );
}

export default App;