import './css/Course.css';

function Course(){
    return(
        <div className="CourseContainer">
            <div className="CourseContentContainer">
                <div className="CourseTitle">
                    course name
                </div>
                <div className="ReviewBox">
                    <input type="text" className="CommentInput" placeholder="Write your comment here..." />
                    <button className="SubmitButton">Submit</button>
                </div>
                <div className="PreviousReview">
                    course Reviews
                </div>
                <div className="PreviousReview">
                    course Reviews
                </div>
                <div className="PreviousReview">
                    course Reviews
                </div>
                <div className="PreviousReview">
                    course Reviews
                </div>
                <div className="PreviousReview">
                    course Reviews
                </div>
            </div>
        </div>
    );
}

export default Course;