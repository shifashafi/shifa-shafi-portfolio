import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0a0a0a] to-[#141414] min-h-screen">
      <Navbar />
      <Hero />
      <div className="space-y-16">
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default App;
