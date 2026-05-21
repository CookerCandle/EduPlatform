import { useState, useEffect } from "react";
import { MdLightMode, MdNightlight  } from "react-icons/md";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    // local-storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        const dark = savedTheme === "dark";
        setIsDark(dark);
        document.body.classList.toggle("dark-theme", dark);
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        document.body.classList.toggle("dark-theme", newDark);
        localStorage.setItem("theme", newDark ? "dark" : "light");
    }

    return(
        <button className="toggle-theme theme-button" onClick={toggleTheme}>
            {isDark ? <MdLightMode /> : <MdNightlight />}
        </button>
    );
}

export default ThemeToggle;