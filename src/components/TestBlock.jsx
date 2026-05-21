const TestBlock = ({ unit }) => {
  return (
    <div className="container mt-3">
      <h3 className="mb-4">{unit.description}</h3>

      {unit.questions.map((q, qIndex) => (
        <ul className="list-group" key={qIndex}>
          <li className="list-group-item mt-3 li-task">
            <h5 className="mb-3">{qIndex + 1}. {q.question}</h5>

            <form>
              {q.options.map((opt, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`q${qIndex}`}
                    id={`q${qIndex}-opt${index}`}
                    value={opt}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`q${qIndex}-opt${index}`}
                  >
                    {opt}
                  </label>
                </div>
              ))}
            </form>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TestBlock;
