import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ReturnBtn = ({pageNum}) => {
    const navigate = useNavigate()
    return(
        <button
        onClick={() => navigate(pageNum)}
        className="btn btn-secondary w-2 fw-semibold py-2"
        >
         <IoMdArrowBack />Назад
        </button>

    );
};

export default ReturnBtn;