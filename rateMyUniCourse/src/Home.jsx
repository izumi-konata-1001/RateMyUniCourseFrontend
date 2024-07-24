import React from 'react';

function Home() {
  return (
    <div className="bg-white bg-opacity-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2>Search your university: </h2>
      <div className="bg-white p-2 rounded-lg border-2 border-black flex items-center space-x-4">
        <input 
          type="text" 
          className="flex-grow border-none focus:outline-none h-10 w-96 p-2" 
          placeholder="Your University" 
        />
        <button className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center">
          ↑
        </button>
      </div>
    </div>
  );
}

export default Home;