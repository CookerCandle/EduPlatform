import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(""); 

    const redirectUser = (e) => {
        e.preventDefault();
        if (login === "Jamol1" && password === "j12345") {
            navigate("/HomePage");
        } else {
            setError("Пароль или логин неправильный");
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <form className="w-50 mt-5" onSubmit={redirectUser}>
                <h1>Login</h1>
                <div className="form-group mt-3">
                    <label form="login">Введите логин</label>
                    <input type="text" className="form-control" placeholder="Login" id="login" autoComplete="off" onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label form="password">Введите пароль</label>
                    <input type="password" className="form-control" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <input type="submit" value="Вход" className="btn btn-primary" />
                </div>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
        </div>
    );
}

export default LoginForm;