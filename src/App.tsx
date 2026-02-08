import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { NotFound, Home, FileExplorer, WorkExperience } from '@/features';
import Navigation from '@/features/Navigation';
import AboutMe from '@/features/AboutMe';
import { AnimatePresence, motion, Transition } from "framer-motion";
const pageVariants = {
  initial: { opacity: 0, scale: 0.995 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.995 },
};

const pageTransition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
    style={{
      position: "absolute",
      inset: 0,          // top:0; right:0; bottom:0; left:0;
      paddingTop: 56,    // keep same layout as your main
      overflow: "auto",
    }}
  >
    {children}
  </motion.div>
);



const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <main style={{ paddingTop: '56px' }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/about-me" replace />} />
            <Route path="/about-me" element={<PageWrapper><AboutMe /></PageWrapper>} />
            <Route path="/working-experience" element={<PageWrapper><WorkExperience /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
    </Router>
  );
};

export default App;