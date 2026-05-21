const TestBlock = ({ unit, onAnswerChange }) => {
    const handleSelect = (questionIndex, answer) => {
        onAnswerChange(questionIndex, answer)
    };

    return(
        <div className="container mt-3">
            <h3 className="mb-4">{unit.description}</h3>

            <div className="lessons">
                {unit.questions.map((q, index) => (                
                    <ul className="list-group mt-2" key={index}>
                        <li className="list-group-item" style={{background: "var(--blocks-bg)", color: "var(--text-color)"}}>
                            <h5 className="mb-3">{index + 1}. {q.question}</h5>
                            <form>
                                {q.options.map((opt, qindex) =>(
                                <div className="form-check" key={qindex}>
                                    <input 
                                        type="radio"
                                        className="form-check-input"
                                        name={`q${index}`} 
                                        id={`q${index}-opt${qindex}`}
                                        value={opt}
                                        onChange={() => handleSelect(index, opt)}
                                    />
                                    <label htmlFor={`q${index}-opt${qindex}`} className="form-check-label">
                                        {opt}
                                    </label>
                                </div>   
                                ))}
                            </form>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default TestBlock;