import React, { useState } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const user_login = "Jamol1";
    const user_password = "j12345";
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!login) newErrors.login = "Введите логин";
        if (login != user_login && password != user_password) newErrors.correct = "Логин или пароль не корректный"
        if (!password) newErrors.password = "Введите пароль";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate("/HomePage");
        }
    };

    return (
        <form className="d-flex align-items-center justify-content-center mt-5" onSubmit={handleSubmit}>
            <div className="card shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: "400px", width: "100%", background: "var(--blocks-bg)", color: "var(--text-color)" }}>
                <div className="text-center mb-4">
                    <div className="bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: "70px", height: "70px" }}>
                        <FaLock className="text-primary fs-2" onDoubleClick={() => navigate("/HomePage")}/>
                    </div>
                    <h3 className="fw-bold">Вход</h3>
                    <p>Введите логин и пароль</p>
                </div>

                {/* Логин */}
                <div className="mb-3">
                    <label className="form-label">Логин</label>
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaUser className="text-muted" />
                        </span>
                        <input
                            type="text"
                            className={`form-control ${errors.login ? "is-invalid" : ""}`}
                            placeholder="Введите логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        {errors.login && <div className="invalid-feedback">{errors.login}</div>}
                    </div>
                </div>

                {/* Пароль */}
                <div className="mb-3">
                    <label className="form-label">Пароль</label>
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaLock className="text-muted" />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                    </div>
                </div>
                <div>
                    <input 
                        type="hidden" 
                        className={`form-control ${errors.correct ? "is-invalid" : ""}`} 
                    />
                    {errors.correct && <div className="invalid-feedback">{errors.correct}</div>}
                </div>

                {/* Кнопка */}
                <button
                    className="btn btn-primary w-100 mt-3 fw-semibold"
                >
                    Войти
                </button>
            </div>
        </form>
    );
};

export default LoginComponent;



