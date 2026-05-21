import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { getLessonsData, updateLessonsData } from "../utils/lessonsStorage";
import TestBlock from "../components/TestBlock";

const Task = () => {
    const navigate = useNavigate();
    const { param } = useParams();
    const [searchParams] = useSearchParams();
    const q = parseInt(searchParams.get("q"), 10);
    const [lessons, setLessons] = useState(null);
    

    useEffect(() => {
        setLessons(getLessonsData());
    }, []);

    if (!lessons) return <p>Загрузка...</p>;
    const unit = lessons[param]?.units[q];

    if (!unit) {
        navigate(-2)
        return null;
    }

    const handleFinish = () => {
        if (window.confirm("Закончить урок?")) {
        const updated = { ...lessons };

        // отмечаем что урок пройден
        updated[param].units[q].passed = true;

        // проверяем, все ли юниты пройдены
        const allPassed = updated[param].units.every((u) => u.passed);
        updated[param].passed = allPassed;

        // сохраняем в state и localStorage
        setLessons(updated);
        updateLessonsData(updated);

        navigate(-1); // возвращаемся назад
        }
    }

  return (
    <div>
        {isVideo()}
        <footer 
            className="alert  mt-5 d-flex align-items-center justify-content-center li-lesson"
            onClick={handleFinish}
        >
            закончить урок
            </footer>
    </div>
  );

    function isVideo() {
        if (!lessons[param].units[q].isTest) {
            return(
                <div className="d-flex justify-content-center">
                    <video className="w-100" style={{ maxWidth: "1080px", height: "auto" }} controls autoPlay> 
                        <source src={lessons[param].units[q].video} type="video/mp4"/>
                    </video>
                </div>
            );
        } else {
            return(
                <>  
                    <TestBlock unit={lessons[param].units[q]} />
                </>
            );
        }
    }
}

export default Task