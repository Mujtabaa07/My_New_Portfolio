/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClickSpark from './components/ClickSpark';
import Navigation from './components/Navigation';
import Loading from './pages/Loading';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // If still loading, show the loading screen
  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  // Once loading is complete, show the main app
  return (
    <Router>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}>
        <div className='w-full min-h-screen overflow-x-hidden scrollbar-hide'>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </ClickSpark>
    </Router>
  );
}

export default App
