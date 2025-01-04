import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Skills />
        <Services />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-black text-gray-400 py-8 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} Sandeep Kommineni. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;