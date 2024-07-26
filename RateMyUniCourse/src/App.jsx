import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import './css/App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Home from './main_pages/Home.jsx';
import Universities from './main_pages/Universities.jsx';
import Courses from './main_pages/Courses.jsx';
import User from './main_pages/User.jsx';
import Course from './main_pages/Course.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />}/>
            <Route path="/courses" element={<Courses />}/>
            <Route path="/user" element={<User />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;
