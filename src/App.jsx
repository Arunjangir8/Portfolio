import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Experience from './components/experience';

const App = () => {
  return (
    <div className="bg-[#34353b] text-white font-roboto overflow-x-hidden">
      <Navigation />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};


export default App;