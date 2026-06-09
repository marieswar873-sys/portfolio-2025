import React, { useState, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience3D from './components/Experience3D';
import ThemeSwitcher from './components/ThemeSwitcher';
import MusicController from './components/MusicController';
import Cursor from './components/Cursor';
import WelcomeScreen from './components/WelcomeScreen';
import SocialConnect from './components/SocialConnect';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <Cursor />

      <AnimatePresence>
        {!hasEntered && (
          <WelcomeScreen onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {/* 3D Background - Always mounted but hidden behind welcome screen initially */}
      <Suspense fallback={<div className="fixed inset-0 bg-black -z-10" />}>
        <Experience3D />
      </Suspense>

      {hasEntered && (
        <>
          <ThemeSwitcher />
          <SocialConnect />
          <MusicController shouldPlay={true} />

          <Layout>
            <div className="snap-container relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Services />
              <Certifications />
              <Contact />
            </div>
          </Layout>
        </>
      )}
    </>
  );
}

export default App;
