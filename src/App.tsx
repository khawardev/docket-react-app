import './App.scss'
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Newnotes from './Components/newnotes/Newnotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
function App() {

  return (
    <>

      <Router>
        <Navbar />
        <hr className='mt-5' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-notes" element={<Newnotes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
