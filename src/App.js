import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

// Import components
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';
import SectionDivider from './components/Layout/SectionDivider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;