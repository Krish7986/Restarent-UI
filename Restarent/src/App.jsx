import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reservation from "./components/Resarvation";
import MenuGrid, { Chips } from "./components/MenuGrid";
import Tasteourfood from "./components/Tasteourfood";
import Catering from "./components/Catering";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [sectionInView, setSectionInView] = useState({
    home: false,
    taste: false,
    menu: false,
    chips: false,
    catering: false,
    about: false,
    contact: false,
  });

  const onSectionView = (section, inView) => {
    setSectionInView((prev) => ({ ...prev, [section]: inView }));
  };

  const darkNavbar =
    sectionInView.home || sectionInView.taste || sectionInView.chips;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar dark={darkNavbar} />
      <Hero onSectionView={onSectionView} />
      <Tasteourfood onSectionView={onSectionView} />
      <MenuGrid onSectionView={onSectionView} />
      <Chips onSectionView={onSectionView} />
      <Catering onSectionView={onSectionView} />
      <About onSectionView={onSectionView} />
      <Contact onSectionView={onSectionView} />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
