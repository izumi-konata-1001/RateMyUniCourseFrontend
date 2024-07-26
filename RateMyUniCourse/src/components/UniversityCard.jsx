import './css/UniversityCard.css';
import { useNavigate } from 'react-router-dom';
function UniversityCard(){
    const navigate = useNavigate();
    const handleClick = function click()
    {
        navigate('/courses');
    }

    return(
        <div className="UniversiteCard" onClick={handleClick}>
            <img src="/uni_example_img.png" className="UniIcon" alt="University Icon"/>
            <p className="UniName">University of Auckland</p>
        </div>
    );
}

export default UniversityCard;