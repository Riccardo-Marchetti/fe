import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const SliderNumber = ({ slides }) => {
  // const paginationRef = useRef(null);
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  const swiperRef = useRef();
  const counterRefs = useRef([]); // Array per memorizzare i riferimenti agli elementi [data-counter]

  // Funzioni per inizializzare i contatori (spostate da Stimulus)
  const counter = (number) => {
    const countUp = new CountUp(number, number.getAttribute("data-counter"), {
      separator: "",
    });
    countUp.start();
  };

  const counterSuffix = (number, suffix) => {
    const countUp = new CountUp(number, number.getAttribute("data-counter"), {
      separator: "",
      suffix: suffix,
    });
    countUp.start();
  };

  const counterPrefix = (number, prefix) => {
    const countUp = new CountUp(number, number.getAttribute("data-counter"), {
      separator: "",
      prefix: prefix,
    });
    countUp.start();
  };

  const counterPrefixSuffix = (number, prefix, suffix) => {
    const countUp = new CountUp(number, number.getAttribute("data-counter"), {
      separator: "",
      prefix: prefix,
      suffix: suffix,
    });
    countUp.start();
  };

  // useEffect per gestire IntersectionObserver
  useEffect(() => {
    // Verifica se IntersectionObserver è supportato
    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      // Fallback: avvia immediatamente i contatori
      counterRefs.current.forEach((number) => {
        if (!number.innerHTML) {
          if (
            number.hasAttribute("data-suffix") &&
            number.hasAttribute("data-prefix")
          ) {
            counterPrefixSuffix(
              number,
              number.getAttribute("data-prefix"),
              number.getAttribute("data-suffix")
            );
          } else if (number.hasAttribute("data-suffix")) {
            counterSuffix(number, number.getAttribute("data-suffix"));
          } else if (number.hasAttribute("data-prefix")) {
            counterPrefix(number, number.getAttribute("data-prefix"));
          } else {
            counter(number);
          }
        }
      });
    } else {
      // Usa IntersectionObserver per avviare i contatori quando visibili
      const numberObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const number = entry.target;
              numberObserver.unobserve(number);
              if (
                number.hasAttribute("data-suffix") &&
                number.hasAttribute("data-prefix")
              ) {
                counterPrefixSuffix(
                  number,
                  number.getAttribute("data-prefix"),
                  number.getAttribute("data-suffix")
                );
              } else if (number.hasAttribute("data-suffix")) {
                counterSuffix(number, number.getAttribute("data-suffix"));
              } else if (number.hasAttribute("data-prefix")) {
                counterPrefix(number, number.getAttribute("data-prefix"));
              } else {
                counter(number);
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      // Osserva tutti gli elementi [data-counter]
      counterRefs.current.forEach((number) => {
        if (number) {
          numberObserver.observe(number);
        }
      });

      // Pulizia: disattiva gli observer quando il componente viene smontato
      return () => {
        numberObserver.disconnect();
      };
    }
  }, []);

  return (
    <>
      <div className="block__slider-el">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          speed={600}
          spaceBetween={0}
          resistanceRatio={0}
          grabCursor={true}
          pagination={{
            // el: paginationRef,
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          onBeforeInit={(swiper) => {
            // swiper.params.navigation.prevEl = navigationPrevRef.current;
            // swiper.params.navigation.nextEl = navigationNextRef.current;
            // // swiper.params.pagination.el = paginationRef.current;

            // swiper.navigation.init();
            // swiper.navigation.update();
            // swiper.pagination.init();
            // swiper.pagination.update();
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide__number">
                <span
                  ref={(el) => (counterRefs.current[index] = el)}
                  data-prefix={slide.prefix}
                  data-counter={slide.number}
                  data-suffix={slide.suffix}
                ></span>
              </div>
              <div className="swiper-slide__dida">
                <span>{slide.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="block__slider-controls">
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
      </div> */}
    </>
  );
};

export default SliderNumber;
