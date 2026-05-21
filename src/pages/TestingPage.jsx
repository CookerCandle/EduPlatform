import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReturnBtn from "../components/ReturnBtn";
import TestBlock from "../components/TestBlock";
import { useEffect, useState } from "react";
import { getLessonsData, updateLessonsData } from "../utils/lessonsStorage";
import VideoBlock from "../components/videoBlock";

const TestingPage = () => {
    const navigate = useNavigate();
    const { lesson } = useParams();
    const [searchParams] = useSearchParams();
    const q = parseInt(searchParams.get('q'), 10);
    const [lessons, setLessons] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        setLessons(getLessonsData());
    }, [])

    if (!lessons) return <p>Загрузка...</p>
    const unit = lessons[lesson]?.units[q];

    if (!unit) {
        navigate(-2);
        return null;
    }

    const handleFinish = () => {
        if (window.confirm("Закончить урок?")) {
            const updated = { ...lessons };
            updated[lesson].units[q].passed = true;

            const allPassed = updated[lesson].units.every((u) => u.passed);
            updated[lesson].passed = allPassed;

            setLessons(updated);
            updateLessonsData(updated);

            if (unit.isTest) {
                setShowModal(true);
            } else {
                navigate(-1);
            }
        }
    }

    const handleUserAnswer = (questionIndex, answer) => {
        setUserAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    return (
        <>
            {showModal && (
                <div className="modal show fade d-block custom-modal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered" >
                        <div className="modal-content" style={{background: "var(--blocks-bg)", color: "var(--text-color)"}}>
                            <div className="modal-header">
                                <h5 className="modal-title">Результаты теста</h5>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group">
                                    {unit.questions.map((q, i) => {
                                        const userAns = userAnswers[i];
                                        const correct = q.answer;
                                        const isCorrect = userAns === correct;

                                        return (
                                            <li
                                                key={i}
                                                className={`list-group-item ${isCorrect ? "list-group-item-success" : "list-group-item-danger"
                                                    }`}
                                            >
                                                <strong>{i + 1}. {q.question}</strong>
                                                <br />
                                                <span>
                                                    Ваш ответ: <b>{userAns || "—"}</b>
                                                </span>
                                                <br />
                                                <span>Правильный ответ: <b>{correct}</b></span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setShowModal(false);
                                        navigate(-1);
                                    }}
                                >
                                    Завершить
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="fade"></div>
                </div>
            )}

            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <ReturnBtn pageNum={-1} />
                    <button className="btn btn-secondary w-2 fw-semibold py-2" onClick={handleFinish}>
                        Закончить урок
                    </button>
                </div>
                {getBlock()}
            </div>
        </>
    );

    function getBlock() {
        if (!unit.isTest) {
            return (
                <div className="d-flex justify-content-center my-3">
                    <VideoBlock src={unit.video} />
                </div>
            );
        } else {
            return (
                <div>
                    <TestBlock unit={unit} onAnswerChange={handleUserAnswer} />
                </div>
            );
        }
    };
};

export default TestingPage;