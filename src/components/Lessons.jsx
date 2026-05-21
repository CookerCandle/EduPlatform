import React, { useState, useEffect } from 'react';
import { MdPlayLesson } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { getLessonsData } from "../utils/lessonsStorage";

const Lessons = () => {
    const navigate = useNavigate();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const data = getLessonsData();
        // преобразуем объект в массив
        const arr = Object.keys(data).map(key => ({
            ...data[key]
        }));
        setLessons(arr);
    }, []);

    return(
        <div className='container mt-4'>
            <h2>Список уроков</h2>
            <ul className='list-group'>
                {lessons.map(item => (
                    <li key={item.lesson} className={`list-group-item d-flex align-items-center mt-3 li-lesson ${item.passed ? "passed" : ""}`} onClick={() => navigate(`${item.url}`)}>
                        {item.passed 
                          ? <FaRegCheckCircle size={24} className="me-2 " /> 
                          : <MdPlayLesson size={24} className="me-2 " />}
                        <div>
                            <strong>{item.name}</strong>
                            <p className='mb-0'>{item.title}</p>
                        </div>
                    </li>
                ))}

            </ul>

        </div>
    );
}

export default Lessons