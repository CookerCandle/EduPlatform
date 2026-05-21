import { useEffect, useState } from "react";
import { getLessonsData } from "../utils/lessonsStorage";
import Lesson from "./Lesson";

const Lessons = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const data = getLessonsData();
        if (data) {
            const arr = Object.entries(data);
            setLessons(arr);
        }
    }, []);
    return(
        <div className="container mt-5">
            <div className="row gap-3 align-items-center justify-content-center lessons">
                {lessons.map((item, index) => (
                    <Lesson lesson={item[1]} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default Lessons;