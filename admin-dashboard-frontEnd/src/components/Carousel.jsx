import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="container carousel mt-4">
      <main>
        <div id="myCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="/add-to-cart">
                <img
                  src="/dist/img/carousel/gameing.jpg"
                  className="d-block w-100"
                  alt="First slide"
                />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/add-to-cart">
                <img
                  src="/dist/img/carousel/carousel1.jpg"
                  className="d-block w-100"
                  alt="Second slide"
                />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/add-to-cart">
                <img
                  src="/dist/img/carousel/carousel2.jpg"
                  className="d-block w-100"
                  alt="Third slide"
                />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/add-to-cart">
                <img
                  src="/dist/img/carousel/carousel3.jpg"
                  className="d-block w-100"
                  alt="Fourth slide"
                />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/add-to-cart">
                <img
                  src="/dist/img/carousel/carousel4.jpg"
                  className="d-block w-100"
                  alt="Fifth slide"
                />
              </Link>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Carousel;
