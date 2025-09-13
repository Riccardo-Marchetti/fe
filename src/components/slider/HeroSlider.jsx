import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const HeroSlider = ({ slides }) => {

  const swiperOptions = {
    modules: [Autoplay, EffectFade],
    slidesPerView: 1,
    speed: 1000,
    resistanceRatio: 0,
    followFinger: false,
    preventInteractionOnTransition: true,
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      disableOnInteraction: false,
      delay: 6000,
    },
    // Nota: la paginazione è commentata come nel codice originale
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderBullet: (index, className) => {
    //     return `<span class="${className}" aria-label="Go to slide ${index + 1}"><span class="swiper-pagination-bullet-fill"></span></span>`;
    //   },
    // },
  };

  return (
    <div className="hero__slider">
      {/* Slider per desktop */}
      <div className="swiper dsk">
        <Swiper {...swiperOptions}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide__inner">
                <div className="swiper-slide__media">
                  <img src={slide.image} alt={slide.alt} loading="lazy" />
                </div>
                <div className="swiper-slide__caption">
                  <div className="container">
                    <h2 className="hero__title">{slide.title}</h2>
                    <div className="hero__subtitle">{slide.subtitle}</div>
                    <div className="button button--white">
                      <a href={slide.link}>
                        <span>Scopri di più</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider per mobile */}
      <div className="swiper mbl">
        <Swiper {...swiperOptions}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide__inner">
                <div className="swiper-slide__media">
                  <img src={slide.image} alt="img" loading="lazy" />
                </div>
                <div className="swiper-slide__caption">
                  <div className="container">
                    <h2 className="hero__title">{slide.title}</h2>
                    <div className="hero__subtitle">{slide.subtitle}</div>
                    <div className="button button--white">
                      <a href={slide.link}>
                        <span>Scopri di più</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;