import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HowItWroks from "./components/HowItWroks";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWroks />
        <Footer />
      </main>
    </>
  );
};

export default App;
