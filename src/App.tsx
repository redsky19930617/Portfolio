import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHub } from './components/GitHub';
import { Badges } from './components/Badges';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { useLoading } from './hooks/useLoading';
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Badges />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Analytics />
      </div>
    </>
  );
}

export default App;