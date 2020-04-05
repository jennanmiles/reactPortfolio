import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Work /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
