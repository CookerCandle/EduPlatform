import newsData from "../data/newsData";

const News = () => {
  const newsItems = newsData;
  return (
    <div style={{ background: "var(--blocks-bg)" }}>
      <div id="newsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {newsItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#newsCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.image}
                className="d-block w-100"
                alt={item.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#newsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#newsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default News;
