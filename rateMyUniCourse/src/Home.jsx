import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-3">
        <h2 className="text-4xl">Search your university:</h2>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <input 
            className="bg-gray-200 opacity-80 h-12 w-96 p-2 border-2 border-black rounded-xl focus:outline-none focus:border-blue-500" 
            type="text"
            placeholder="Enter Your University" 
        />
        <button className="h-11 w-11 bg-black rounded-full border-2 border-black text-white hover:border-black hover:bg-white hover:text-black">
            ↑
        </button>
      </div>
    </div>
  );
}

export default Home;