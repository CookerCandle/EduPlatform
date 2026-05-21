const StudentProfile = () => {
    const student = {
        name: "Jamoliddin Gafurov",
        email: "jamoliddin.g@university.edu",
        faculty: "Факультет информатики",
        group: "ИС-21",
        year: "3 курс",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5_tGjNSO804LyOJhYOCRsEvuK47KhdkTRg&s" // можно заменить на локальное ./images/student.jpg
    };
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div
                className="card shadow-sm p-4 text-center liquid-mirror"
                style={{ maxWidth: "420px" }}
            >
                {/* Фото студента */}
                <img
                    src={student.avatar}
                    alt={student.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />

                {/* Основная информация */}
                <h4 className="mb-1">{student.name}</h4>
                <p className="text-muted mb-2">{student.email}</p>

                {/* Дополнительная информация */}
                <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item li-task">
                        <strong>Факультет:</strong> {student.faculty}
                    </li>
                    <li className="list-group-item li-task">
                        <strong>Группа:</strong> {student.group}
                    </li>
                    <li className="list-group-item li-task">
                        <strong>Курс:</strong> {student.year}
                    </li>
                </ul>

                {/* Кнопки */}
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-primary">Редактировать</button>
                    <button className="btn btn-outline-danger">Выйти</button>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
