import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Mousewheel, Navigation } from "swiper/modules";
import { useRef } from "react";

const SliderGallery = ({ slides }) => {
  const paginationRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef();

  return (
    <>
      <div className="block__slider-el">
        <Swiper
          modules={[Navigation, FreeMode, Mousewheel, Pagination]}
          slidesPerView={"auto"}
          speed={600}
          spaceBetween={20}
          resistanceRatio={0}
          grabCursor={true}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumBounce: false,
          }}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
          }}
          navigation={{
            nextEl: navigationNextRef,
            prevEl: navigationPrevRef,
            clickable: true,
          }}
          pagination={{
            // el: paginationRef,
            type: "progressbar",
            clickable: true,
          }}
          breakpoints={{
            1181: {
              spaceBetween: 30,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            // swiper.params.pagination.el = paginationRef.current;

            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.update();
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide__media">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  data-scroll
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block__slider-controls">
        <div
          className="swiper-button-prev icon-arrow-right"
          onClick={() => swiperRef.current?.slidePrev()}
          ref={navigationPrevRef}
        ></div>
        <div
          className="swiper-button-next icon-arrow-right"
          onClick={() => swiperRef.current?.slideNext()}
          ref={navigationNextRef}
        ></div>

        <div className="swiper-pagination" ref={paginationRef}></div>
      </div>
    </>
  );
};

export default SliderGallery;
