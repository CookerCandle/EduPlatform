import { FaBookOpen } from "react-icons/fa6";
import ThemeToggle from "../components/ThemeToggle";
import { Outlet } from "react-router-dom";

const SecondLayout = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg border-bottom main-nav">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="navbar-brand d-flex align-items-center gap-2">
                        <FaBookOpen className="text-primary" size={28} />
                        <span className="logo">LPlatform</span>
                    </div>
                    <ThemeToggle />
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default SecondLayout;