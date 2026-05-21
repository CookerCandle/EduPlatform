import React from "react";
import { useNavigate } from "react-router-dom";


import ThemeToggle from "../components/ThemeTogle";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="d-flex justify-content-between mb-3 container mt-5">
                <h1 id="logo"><span onClick={() => navigate("/HomePage")}>L</span>platform</h1>
                <ThemeToggle />
            </div>
            <LoginForm />
        </>
    )
    
}

export default Login