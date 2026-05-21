import { useParams } from "react-router-dom";
import Unit from "../components/Unit";
import { getLessonsData } from "../utils/lessonsStorage";
import ReturnBtn from "../components/ReturnBtn";


const Units = () => {
    const { lesson } = useParams();
    const lessonsData = getLessonsData();
    const currentLesson = lessonsData[lesson];
    
    return (
        <div className="container mt-4">
            <ReturnBtn pageNum={-1}/>
            <div className="mt-3 gap-3">
                <Unit lesson={currentLesson} />
            </div>
        </div>
    );
};

export default Units;