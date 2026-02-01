import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound,Home,FileExplorer } from '@/features';
import Navigation from '@/features/Navigation';
import AboutMe from '@/features/AboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <main style={{ paddingTop: '56px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;