import { calculateProgress } from "../utils/progress";
import { FaCheckCircle, FaRegPlayCircle } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Unit = ({ lesson }) => {
    const navigate = useNavigate();
    const progress = calculateProgress(lesson);
    return(
        <>
            <div className="row-12 rounded lesson-block card">
                <div className="card-body">
                    <h5 className="card-title fw-bold mb-2" style={{color: "var(--text-color)"}}>{lesson.title}</h5>
                    <p className="card-text text-secondary small mb-3">{lesson.name}</p>
                    <div className="mb-2">
                        <div className="d-flex justify-content-between small mb-1">
                            <span className="text-secondary">Прогресс курса </span>
                            <span className="fw-semibold text-primary">{progress}%</span>
                        </div>
                        <div className="progress" style={{ height: "6px" }}>
                            <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lessons">
            {lesson.units.map((unit, index) =>(
                <div key={index} 
                    className="lesson-block card mt-3 border-light"
                    onClick={() => navigate(`unit?q=${index}`)}>
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3"> 
                            <div className="rounded-circle">
                                {unit.isTest ? (
                                    <FaRegFileLines className="text-primary" size={24} />
                                ): (
                                    <FaRegPlayCircle className="text-primary" size={24} />
                                )}
                            </div>
                            <div style={{color: "var(--text-color)"}}>
                                <h5 className="mb-1" >Урок {unit.unit}</h5>
                                <p className="mb-0" >{unit.description}</p>
                            </div>                        
                        </div>
                        {unit.passed ? (<FaCheckCircle size={24} className="text-success"/>) : ("")}
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Unit;