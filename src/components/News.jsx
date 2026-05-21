import "bootstrap/dist/css/bootstrap.min.css";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Первая новость",
      description: "Краткое описание первой новости. Здесь может быть текст анонса.",
      image: "./images/news1.jpg"
    },
    {
      id: 2,
      title: "Вторая новость",
      description: "Описание второй новости. Текст анонса или вступление.",
      image: "./images/news2.jpg"
    },
    {
      id: 3,
      title: "Третья новость",
      description: "Описание третьей новости. Здесь тоже краткий текст.",
      image: "./images/news3.jpg"
    },
  ];

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div
        id="newsCarousel"
        className="carousel slide w-50"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={news.image}
                className="d-block mx-auto rounded w-75"
                style={{ maxHeight: "350px", objectFit: "cover" }}
                alt={news.title}
              />
              {/* описание под картинкой */}
              <div className="text-center mt-3 text">
                <h5>{news.title}</h5>
                <p className="mb-0">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопки навигации */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#newsCarousel"
          data-bs-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Предыдущая</span> */}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#newsCarousel"
          data-bs-slide="next"
        >
          {/* <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Следующая</span> */}
        </button>
      </div>
    </div>
  );
};

export default News;
