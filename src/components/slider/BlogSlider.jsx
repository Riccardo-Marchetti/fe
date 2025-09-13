import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import foto2 from "../../assets/foto3.webp";
import { useRef } from "react";

const BlogSlider = () => {
  const paginationRef = useRef(null);

    const slides = [
      {
        image: foto2,
        date: '9 Maggio 2025',
        title: 'Titolo 1',
        link: '#',
        alt: 'Immagine di parquet',
      },
      {
        image: foto2,
        date: '10 Maggio 2025',
        title: 'Titolo 2',
        link: '#',
        alt: 'Immagine di parquet',
      },
      {
        image: foto2,
        date: '11 Maggio 2025',
        title: 'Titolo 3',
        link: '#',
        alt: 'Immagine di parquet',
      },
    ];

  const swiperOptions = {
      modules: [Pagination, A11y],
      slidesPerView: 1,
      speed: 600,
      spaceBetween: 20,
      resistanceRatio: 0,
      grabCursor: true,
      autoHeight: true,
      a11y: {
        containerMessage: "Carosello",
        paginationBulletMessage: "Vai alla diapositiva" + "{{index}}",
      },
      pagination: {
        el: paginationRef.current,
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1150: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
  };

  return (

      <div className="blog-slider">
        <Swiper
          {...swiperOptions}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.init();
          swiper.pagination.update();
        }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <a href="#">
                  <div className="card__img">
                    <img
                      src={slide.image}
                      alt="img"
                      loading="lazy"
                    />
                  </div>

                  <div className="card__content">
                    <span className="card__date">9 Maggio 2025</span>

                    <h2 className="card__title">Titolo</h2>

                    <div className="button button--black">
                      <span>
                        <span>Leggi l'articolo</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default BlogSlider;
