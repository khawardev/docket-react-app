import './App.scss'
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Newnotes from './Components/newnotes/Newnotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReadNotes from './Components/readNotes/ReadNotes';


const App: React.FC = () => {

  return (
    <>

      <Router>
        <Navbar />
        <hr className='mt-5' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`new-notes/:id`} element={<Newnotes />} />
          <Route path={`read-notes/:id`} element={<ReadNotes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
