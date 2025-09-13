import { useEffect, useRef } from "react";
import img from "../assets/foto4.webp";
import img1 from "../assets/foto5.webp";
import img2 from "../assets/foto6.webp";
import parquet from "../assets/parquet1.webp";
import BlogSlider from "./slider/BlogSlider";
import SliderGallery from "./slider/SliderGallery";
import { gsap, Linear } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const BlogDetail = () => {
  const gallerySlides = [
    {
      image: img,
      alt: "Immagine di parquet",
    },
    {
      image: img1,
      alt: "Immagine di parquet",
    },
    {
      image: img2,
      alt: "Immagine di parquet",
    },
  ];

  const imageRef = useRef(null);

  const zoomImage = (image) => {
    if (image) {
      ScrollTrigger.create({
        trigger: ".single-blog__header",
        start: "top top",
        end: "bottom+=750 bottom",

        onUpdate: function (self) {
          const progress = self.progress;

          gsap.to(image, {
            width: `${60 + progress * 40}%`,
            ease: "ease",
          });

          //gsap.fromTo(image, {
          //    width: "50%",
          //}, {
          //    attr: { d: (progress) => calculatePath(progress) },
          //    duration: 0.8, ease: "power1.out",
          //});
        },
      });
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 820) {
      zoomImage(imageRef.current);
    }
  }, []);

  return (
    <>
      <div className="single-blog">
        <div className="container">
          <div className="single-blog__inner">
            <div className="single-blog__content">
              <div className="single-blog__header">
                <div className="single-blog__header-tag">9 MAGGIO 2025</div>

                <h1 className="single-blog__header-title">
                  Arte e Precisione: Il Mondo delle Piastrelle raccontato da un
                  Esperto
                </h1>
              </div>

              <div className="blocks" id="blocks">
                <div className="blocks__row">
                  <div className="container">
                    <div className="blocks__container">
                      <div className="block block--100 block--image">
                        <div className="block__inner">
                          <div className="block__media">
                            <div className="block__media-el">
                              <img
                                data-src={parquet}
                                alt=""
                                className="lazy"
                                ref={imageRef}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blocks__row">
                  <div className="container">
                    <div className="blocks__container">
                      <div className="block block--100 block--text">
                        <div className="block__inner">
                          <div className="txt fade-in is-inview" data-scroll="">
                            <p>
                              Due anni fa abbiamo dato il via a un importante
                              progetto con
                              <strong>
                                l’installazione di un nuovo impianto per la
                                lavorazione e selezione delle piastrelle
                              </strong>
                              presso uno dei principali stabilimenti produttivi
                              del settore ceramico.
                            </p>

                            <p>Da allora, l’impianto ha permesso di:</p>

                            <ul>
                              <li>
                                <strong>
                                  ottimizzare la precisione nella selezione dei
                                  formati e delle finiture
                                </strong>
                              </li>
                              <li>
                                <strong>
                                  automatizzare i controlli di qualità riducendo
                                  gli scarti e migliorando l’efficienza
                                  produttiva
                                </strong>
                              </li>
                            </ul>

                            <p>
                              Un risultato frutto della collaborazione tra
                              tecnici, designer e ingegneri specializzati.
                              <br />
                              La nostra missione resta quella di coniugare
                              estetica e innovazione tecnologica nel mondo delle
                              superfici ceramiche.
                            </p>

                            <p>
                              Grazie a chi continua a credere nella qualità,
                              nella precisione e nell’arte del nostro lavoro.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blocks__row">
                  <div className="container">
                    <div className="blocks__container">
                      <div className="block block--100 block--slider block--slider--gallery">
                        <div className="block__inner">
                          <div className="block__slider">
                            <SliderGallery slides={gallerySlides} />
                            {/* <div className="block__slider-el">
                              <div className="swiper">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <div className="swiper-slide__media">
                                      <img
                                        src={img1}
                                        alt="img"
                                        loading="lazy"
                                        data-scroll
                                      />
                                    </div>
                                  </div>

                                  <div className="swiper-slide">
                                    <div className="swiper-slide__media">
                                      <img
                                        src={img2}
                                        alt="img"
                                        loading="lazy"
                                        data-scroll
                                      />
                                    </div>
                                  </div>

                                  <div className="swiper-slide">
                                    <div className="swiper-slide__media">
                                      <img
                                        src={img1}
                                        alt="img"
                                        loading="lazy"
                                        data-scroll
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blocks__row">
                  <div className="container">
                    <div className="blocks__container">
                      <div className="block block--100 block--text">
                        <div className="block__inner">
                          <div className="txt">
                            <p>
                              La piastrella non è solo un elemento tecnico: è
                              espressione di gusto, cultura e artigianalità.
                              Dietro ogni prodotto ci sono processi studiati al
                              millimetro, finiture perfezionate in laboratorio e
                              un’attenzione al dettaglio che trasforma una
                              superficie in design.
                            </p>
                            <p>
                              Oggi, grazie a impianti moderni e tecnologie
                              digitali, possiamo offrire collezioni che
                              combinano performance tecniche elevate con una
                              bellezza senza tempo. Ogni piastrella racconta una
                              storia fatta di ricerca e passione.
                            </p>

                            <p>
                              Lavoriamo ogni giorno per portare innovazione in
                              un settore che affonda le radici nella tradizione
                              ma guarda costantemente al futuro.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blocks__row">
                  <div className="container">
                    <div className="blocks__container">
                      <div className="block block--50 block--text align-center">
                        <div className="block__inner">
                          <span className="eyelet">Occhiello</span>

                          <h2 className="title">Titolo</h2>

                          <div className="txt">
                            <p>Testo</p>
                          </div>

                          <div className="button">
                            <a href="">
                              <span>Scopri di più</span>
                              <div className="button__icon">
                                <i className="icon-right"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="block block--50 block--image">
                        <div className="block__inner">
                          <div className="block__media">
                            <div className="block__media-el">
                              <img
                                src={img}
                                alt="img"
                                loading="lazy"
                                className="fade-in"
                                data-scroll
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog__related">
        <div className="container">
          <h2 className="title">Potrebbe interessarti anche:</h2>

          <BlogSlider />
        </div>
      </div>
    </>
  );
};
export default BlogDetail;
