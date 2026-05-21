import { Outlet, NavLink } from "react-router-dom";
import { FaBookOpen, FaBook, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import ThemeToggle from "../components/ThemeToggle";

const setActive = ({isActive}) => `btn main-nav-link ${isActive ? 'active-link': ''}`;

const MainLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom main-nav ">
        <div className="container d-flex justify-content-between align-items-center">
          {/* logo */}
          <div className="navbar-brand d-flex align-items-center gap-2">
            <FaBookOpen className="text-primary" size={28} />
            <span className="logo">LPlatform</span>
          </div>

          {/* for PC */}
          <div className="d-none d-md-flex align-items-center gap-2">
            <NavLink to="/HomePage" className={setActive}>
              <FaHome className="me-1" /> Главная
            </NavLink>
            <NavLink to="/Learning" className={setActive}>
              <FaBook className="me-1" /> Уроки
            </NavLink>
            <NavLink to="/Profile" className={setActive}>
              <CgProfile className="me-1" /> Профиль
            </NavLink>
          </div>

          <ThemeToggle />
        </div>
      </nav>

      <Outlet />

      {/* navbar for phone */}
      <nav className="d-md-none navbar fixed-bottom border-top main-nav">
        <div className="d-flex justify-content-around w-100">
          <NavLink to="/HomePage" className={setActive}>
            <FaHome />
          </NavLink>
          <NavLink to="/Learning" className={setActive}>
            <FaBook />
          </NavLink>
          <NavLink to="/Profile" className={setActive}>
            <CgProfile />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MainLayout;
