import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <Layout>
      <Cursor />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App;
