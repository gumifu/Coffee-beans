import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrewGuide from './pages/BrewGuide';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Footer = () => (
  <footer className="bg-coffee-950 text-coffee-300 py-12 border-t border-coffee-900">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h3 className="font-serif text-2xl font-bold text-white mb-4">Velvet Bean</h3>
        <p className="max-w-xs text-sm leading-relaxed text-coffee-400">
          Crafting moments of clarity through the perfect cup. Join us on a journey of flavor, history, and community.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#/" className="hover:text-white transition-colors">Our Story</a></li>
          <li><a href="#/brew" className="hover:text-white transition-colors">Brew Guide</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Shop Beans</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Connect</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-coffee-900 text-center text-xs text-coffee-500">
      © 2024 Velvet Bean Coffee Co. All rights reserved.
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brew" element={<BrewGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;