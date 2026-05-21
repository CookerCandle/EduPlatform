import { FaBook } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { calculateProgress } from "../utils/progress";

const Lesson = ({ lesson }) => {
    const navigate = useNavigate()
    const progress = calculateProgress(lesson);
    return(
        <div 
            className="row-12 rounded lesson-block card" 
            onClick={() => navigate(`${lesson.url}`)}
        >
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <FaBook className="text-primary" size={32}/>
                    {lesson.passed && (<FiCheckCircle className="text-success" size={24} />)} 
                </div>

                <h5 className="card-title fw-bold mb-2" style={{color: "var(--text-color)"}}>{lesson.name}</h5>
                <p className="card-text text-secondary small mb-3">{lesson.title}</p>

                <div className="mb-2">
                    <div className="d-flex justify-content-between small mb-1">
                        <span className="text-secondary">Прогресс</span>
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
                <div className="small text-secondary">
                    {lesson.units.length} уроков
                </div>
            </div>
        </div>
    );
};

export default Lesson;