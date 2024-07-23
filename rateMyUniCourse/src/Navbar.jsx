import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-32 w-full bg-black flex flex-col items-center justify-center py-4">
        <h1 className="text-xl font-bold text-white mb-2">Rate My Uni Course</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/course" className="text-white hover:text-gray-300">Course</Link>
          <Link to="/teacher" className="text-white hover:text-gray-300">Teacher</Link>
          <Link to="/search" className="text-white hover:text-gray-300">Search</Link>
          <Link to="/user" className="text-white hover:text-gray-300">User</Link>
        </div>
    </div>
  );
};

export default Navbar;