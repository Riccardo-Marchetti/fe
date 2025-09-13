import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import { useRef } from "react";

const SliderGroup = ({ slides }) => {
  const paginationRef = useRef(null);

  const swiperOptions = {
    modules: [Pagination, A11y],
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 0,
    resistanceRatio: 0,
    grabCursor: true,
    a11y: {
      containerMessage: "Carosello",
      paginationBulletMessage: "Vai alla diapositiva" + "{{index}}",
    },
    pagination: {
      el: paginationRef.current,
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 3,
      },
    },
  };

  return (

      <div className="block__slider-el">
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
              <div className="swiper-slide__item">
                <div className="swiper-slide__item-image">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading="lazy"
                    className="fade-in"
                    data-scroll
                  />
                </div>

                <h2
                  className="title fade-in-from-bottom"
                  data-scroll
                >
                  {slide.title}
                </h2>

                <div
                  className="txt fade-in-from-bottom"
                  data-scroll
                >
                  <p>
                    {slide.text}
                  </p>
                </div>
                {/* <!-- @*
              <div
                className="button fade-in-from-bottom"
                data-scroll
              >
                <a href="#">
                  <span>Scopri di più</span>
                </a>
              </div>
              *@ --> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default SliderGroup;
