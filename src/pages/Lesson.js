import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getLessonsData } from "../utils/lessonsStorage";
import Unit from "../components/Unit";

function Lesson() {
    const navigate = useNavigate();
    const { param } = useParams();
    const [lessons, setLessons] = useState(null);

    useEffect(() => {
        const data = getLessonsData();
        setLessons(data);
    }, []);
    
    if (!lessons) return <p>Загрузка...</p>;
    const lesson = lessons[param];

    if (!lesson) {
        navigate("/Learning");
        return null;
    }

    return (
        <div className="container mt-4">
            <h2>{lesson.name}</h2>
            <ul className="list-group">
                {lesson.units.map((unit, index) => (
                    <li key={index} className={`list-group-item d-flex align-items-center mt-3 li-lesson ${unit.passed ? 'passed' : ""}`}  onClick={() => navigate(`unit?q=${index}`)}>
                        <Unit unit={unit} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lesson;
