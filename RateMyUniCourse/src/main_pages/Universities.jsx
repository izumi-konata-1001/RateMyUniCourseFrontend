import React from 'react';
import './css/Universities.css';

import UniversityCard from '../components/UniversityCard.jsx';
import { SlMagnifier } from "react-icons/sl";

function Universities() {
  return (
    <div className="UniversitiesContainer">
      <div className="UniversitiesListContainer">
            <div className="UniversitiesTitle">
                Universities
            </div>
            <div className="UniversitiesSearchArea">
                <input className="UniversitiesSearchBox" type="text" />
                <button className="UniversitiesSearchButton">
                    <SlMagnifier />
                </button>
            </div>
            <div className="UniversityCardGrid">
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
            </div>
        </div>
    </div>
  );
}

export default Universities;