import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './pages/AboutPage';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="main-content">
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
