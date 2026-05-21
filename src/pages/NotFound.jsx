import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center p-3">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-3">Упс! Страница не найдена</h2>
      <p className="mb-4 ">
        Похоже, вы попали не туда. Страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link to="/HomePage" className="btn text-primary btn-lg d-flex align-items-center gap-2">
        <FaHome />
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
