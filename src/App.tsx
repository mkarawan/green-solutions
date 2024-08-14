import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Practices from "./components/Practices/Practices";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import './i18n';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Practices />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
