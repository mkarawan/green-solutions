import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Practices from './components/Practices/Practices';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
