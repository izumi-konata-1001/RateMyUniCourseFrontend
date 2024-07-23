import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Course from './Course';
import Teacher from './Teacher';
import Search from './Search';
import User from './User';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-customer-background bg-cover bg-center bg-fixed"></div>
        <div className="relative z-10">
          <Navbar />
          <div className="mt-32 bg-white ml-10 mr-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/course" element={<Course />} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/search" element={<Search />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;