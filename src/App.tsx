import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import Education from './components/Education';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievement';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showProfileInHeader, setShowProfileInHeader] = useState(false);

  return (
    <LayoutGroup>
      <div className="font-sans bg-gradient-to-br from-secondary-50 to-white min-h-screen">
        <Header showProfileInHeader={showProfileInHeader} />
        <main>
          <Hero />
          <About 
            showProfileInHeader={showProfileInHeader} 
            setShowProfileInHeader={setShowProfileInHeader} 
          />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </LayoutGroup>
  );
}

export default App;
