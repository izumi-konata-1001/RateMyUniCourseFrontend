import React from 'react';
import './css/Home.css';
import { SlMagnifier } from "react-icons/sl";

function Home() {
  return (
    <div>
        <div className="HomeContainer">
            <div className="HomeOverlay">
            </div>
            <div className="HomeSearchContainer">
                <div className="HomeSearchMessage">
                    Search Your University
                </div>
                <div className="HomeSearchArea">
                    <input className="HomeSearchBox" />
                    <button className="HomeSearchButton">
                        <SlMagnifier />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;