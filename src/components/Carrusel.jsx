import React from 'react'

export const Carrusel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide espdc">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://dojiw2m9tvv09.cloudfront.net/17766/4/bannerescritorio9149.png?398&time=1693641852"
              className="d-block w-100"
              alt="anuncio delivery"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dojiw2m9tvv09.cloudfront.net/17766/4/bannerescritorio9149.png?398&time=1693641852"
              className="d-block w-100"
              alt="Nueva Coleccion Bebé"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}
