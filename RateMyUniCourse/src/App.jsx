import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './main_pages/Home.jsx';
import Universities from './main_pages/Universities.jsx';
import Courses from './main_pages/Courses.jsx';
import User from './main_pages/User.jsx';


function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  )
}

export default App
