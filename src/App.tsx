import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Success from './components/Success';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Gallery />
      <Success />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;