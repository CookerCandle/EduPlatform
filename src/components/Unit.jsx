import { FaRegCirclePlay, FaPen } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const Unit = ({ unit }) => {
    let icon;
    if (unit.passed) {
         icon = <FaRegCheckCircle size={24}/>;
    } else if (unit.isTest) {
         icon = <FaPen size={24}/>;
    } else if (!unit.isTest) {
         icon = <FaRegCirclePlay size={24}/>;
    }

    return (
        <div className="unit">
            <div className="unit-action">
                <span>№{unit.unit}</span>
                <p>{icon} | {unit.description}</p>

            </div>
        </div>
    );
}

export default Unit;