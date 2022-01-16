import './App.scss'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import Coursemapper from './components/projects/Coursemapper'
import Peerview from './components/projects/Peerview'
import ImgWrapper from './utils/ImgWrapper'
import Pingme from './components/pingme/Pingme'
function App() {
  const location = useLocation()
  return (
    <>
      <ImgWrapper>
        <Navigation />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project/coursemapper" element={<Coursemapper />} />
            <Route path="/project/peerview" element={<Peerview />} />
            <Route path="/pingme" element={<Pingme />} />
          </Routes>
        </AnimatePresence>
      </ImgWrapper>
    </>
  )
}

export default App
