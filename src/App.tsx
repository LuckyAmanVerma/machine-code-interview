import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound,Home,FileExplorer } from '@/features';


const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default App;