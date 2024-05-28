import './App.scss';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Loader from 'react-loaders';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Skills = lazy(() => import('./components/Skills'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader type="ball-grid-pulse" />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader type="ball-grid-pulse" />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loader type="ball-grid-pulse" />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Loader type="ball-grid-pulse" />}>
              <Skills />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
