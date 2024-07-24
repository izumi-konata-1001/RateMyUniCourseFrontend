import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isLinksVisible, setLinkVisible] = useState(false);
    function toggleLinkVisible()
    {
        setLinkVisible(!isLinksVisible);
    }
  return (
    <div className="top-0 left-0  flex flex-col w-full">
        <div className="w-full flex flex-col items-center h-28 bg-black">
            <h1 className="text-4xl font-bold text-white mt-4 mb-4">Rate My Uni Course</h1>
            {!isLinksVisible && <button className="text-black bg-white opacity-60 rounded-md h-6 w-10"
            onClick={toggleLinkVisible}>
                ↓
            </button>}
            {isLinksVisible && <button className="text-black bg-white opacity-60 rounded-md h-6 w-10"
            onClick={toggleLinkVisible}>
                ↑
            </button>}
        </div>

        {isLinksVisible && <div className="bg-gray-500 opacity-50 h-10 w-full flex justify-center items-center">
        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-700">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-700">About</Link>
          <Link to="/course" className="text-white hover:text-gray-700">Course</Link>
          <Link to="/teacher" className="text-white hover:text-gray-700">Teacher</Link>
          <Link to="/search" className="text-white hover:text-gray-700">Search</Link>
          <Link to="/user" className="text-white hover:text-gray-700">User</Link>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;