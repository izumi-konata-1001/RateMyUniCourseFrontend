import './css/Courses.css';
import { SlMagnifier } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

const courses = [
    { code: 'CHM 2045', name: 'General Chemistry 1', overall: 3, easiness: 2.2, interest: 2.8, usefulness: 3, reviews: 32 },
    { code: 'MAC 2313', name: 'Analytic Geometry and Calculus 3', overall: 3.8, easiness: 2.7, interest: 3.4, usefulness: 3.9, reviews: 23 },
    { code: 'MAC 2311', name: 'Analytic Geometry and Calculus 1', overall: 3.6, easiness: 2.9, interest: 3.1, usefulness: 4.2, reviews: 20 },
    { code: 'MAC 2312', name: 'Analytic Geometry and Calculus 2', overall: 3.8, easiness: 2.7, interest: 2.9, usefulness: 3.5, reviews: 16 },
];

function Courses() {

    const navigate = useNavigate();
    const handleClick = function click()
    {
        navigate('/course');
    }


    return (
        <div className="CoursesContainer">
            <div className="CoursesListContainer">
                <div className="CoursesTitle">Course List</div>
                <div className="CoursesSearchArea">
                    <input className="CoursesSearchBox" type="text" />
                    <button className="CoursesSearchButton">
                        <SlMagnifier />
                    </button>
                </div>
                <div className="CoursesTagArea">
                    <div className="CourseTage">Departure</div>
                </div>
                <div className="CoursesFilter">
                    <div className="RateFilter">Rate</div>
                    <div className="EasinessFilter">Easiness</div>
                    <div className="UsefulnessFilter">Usefulness</div>
                    <div className="ReviewNumberFilter">Review</div>
                </div>
                <table className="CoursesTable">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Name</th>
                            <th>Easiness</th>
                            <th>Rate</th>
                            <th>Usefulness</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index} onClick={handleClick}>
                                <td>{course.code}</td>
                                <td>{course.name}</td>
                                <td className="CourseEasiness"><span>{course.easiness}/5.0</span></td>
                                <td className="CourseRate"><span>{course.overall}/5.0</span></td>
                                <td className="CourseUsefulness"><span>{course.usefulness}/5.0</span></td>
                                <td className="CourseReviewNumber"><span>{course.reviews}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Courses;