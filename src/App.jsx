import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import MainLayout from './components/layouts/MainLayout';
import Loading from './components/ui/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

// Lazy load route pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </MotionConfig>
    </ErrorBoundary>
  );
}

export default App;
