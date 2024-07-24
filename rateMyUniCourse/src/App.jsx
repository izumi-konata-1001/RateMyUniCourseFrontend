import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Course from './Course';
import Teacher from './Teacher';
import Search from './Search';
import User from './User';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-customer-background bg-cover bg-center bg-fixed">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;