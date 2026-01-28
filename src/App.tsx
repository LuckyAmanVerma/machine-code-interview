import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound,Home,FileExplorer } from '@/features';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Machine Code Interview</h1>
        <Routes>
          <Route path="/" element={<FileExplorer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;