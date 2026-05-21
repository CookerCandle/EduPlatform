import { useTheme } from "../context/ThemeContext";
import { MdLightMode, MdNightlight  } from "react-icons/md";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <button onClick={toggleTheme} className="theme-toggle theme-btn">
            {theme === "light" ? <MdLightMode size={20} /> : <MdNightlight size={20} />}
        </button>
    );
};

export default ThemeToggle;