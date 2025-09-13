import marmo from "../assets/marmo.webp";
import quality from "../assets/quality.webp";
import foto from "../assets/foto1.webp";
import foto1 from "../assets/foto2.webp";
import foto2 from "../assets/foto3.webp";
import pavimentoParquet from "../assets/pavimento_parquet.jpg";
import pavimentoMarmo from "../assets/pavimento_marmo.jpg";
import gresFloor from "../assets/gres_floor.jpg";
import resinFloor from "../assets/resin_floor.jpg";
import HeroSlider from "./slider/HeroSlider";
import parquet from "../assets/parquet.webp";
import parquet1 from "../assets/parquet1.webp";
import SliderGroup from "./slider/SliderGroup";
import BlogSlider from "./slider/BlogSlider";

const HomePage = () => {
  const heroSlides = [
    {
      image: parquet,
      title: "Titolo 1",
      subtitle: "Testo 1",
      link: "#",
      alt: "Immagine di parquet",
    },
    {
      image: marmo,
      title: "Titolo 2",
      subtitle: "Testo 2",
      link: "#",
      alt: "Immagine di parquet",
    },
    {
      image: parquet1,
      title: "Titolo 3",
      subtitle: "Testo 3",
      link: "#",
      alt: "Immagine di parquet",
    },
  ];

  const blockGroupSlide = [
    {
      image: quality,
      title: "Qualità",
      text: "Utilizziamo materiali di qualità, per garantirti bellezza e durata nel tempo",
      link: "#",
      alt: "Immagine di parquet",
    },
    {
      image: quality,
      title: "Affidabilità",
      text: "Rispettiamo tempi, impegni e budget, garantendo un servizio preciso e puntuale.",
      link: "#",
      alt: "Immagine di parquet",
    },
    {
      image: quality,
      title: "Esperienza",
      text: "Da oltre 35 anni realizziamo pavimentazioni e rivestimenti con competenza e attenzione ai dettagli.",
      link: "#",
      alt: "Immagine di parquet",
    },
  ];

  return (
    <>
      <h1 className="visuallyhidden">Home page</h1>
      <div className="hero">
        <HeroSlider slides={heroSlides} />
      </div>

      <div className="blocks" id="blocks">
        <div className="blocks__row">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--100 block--text txt-center">
                <div className="block__inner">
                  <h2 className="title big">Nome pavimenti</h2>

                  <div className="txt big">
                    <p>
                      Da oltre <strong>30 anni</strong> offriamo soluzioni di
                      qualità per la&nbsp;
                      <strong>
                        <a href="#">progettazione</a>
                      </strong>
                      ,{" "}
                      <strong>
                        <a href="#">fornitura</a>
                      </strong>{" "}
                      e&nbsp;
                      <strong>
                        <a href="#">posa</a>
                      </strong>{" "}
                      di pavimenti, diventando un&nbsp;
                      <strong>
                        punto di riferimento nella provincia di Lecco
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- @*
              <div className="block block--100 block--text txt-center">
                <div className="block__inner">
                  <span className="eyelet">I nostri valori</span>

                  <h2 className="title big">I nostri valori</h2>
                </div>
              </div>
              *@ --> */}

              <div className="block block--100 block--slider block--slider-group txt-center">
                <div className="block__inner">
                  <div className="block__slider">
                    <SliderGroup slides={blockGroupSlide} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="blocks__row blocks__row--bg"
          style={{ "--blocks-row-bg": "#f5f5f5" }}
        >
          <div className="container">
            <div className="blocks__container">
              <div className="block block--100 block--text txt-center">
                <div className="block__inner">
                  <h2 className="title big">
                    Scopri i nostri <strong>servizi</strong>
                  </h2>

                  <div className="txt">
                    <p>
                      Offriamo <strong>soluzioni su misura</strong>: dalla posa
                      di piastrelle tradizionali ai design più moderni, con
                      <strong> precisione artigianale</strong> e
                      <strong>materiali di alta qualità</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="block block--100 block--images">
                <div className="block__inner">
                  <div className="block__elements">
                    <div
                      className="block__element fade-in-from-bottom"
                      data-scroll
                    >
                      <a href="#">
                        <div className="block__element-image">
                          <img src={foto1} alt="img" loading="lazy" />
                        </div>
                        <div className="block__element-txt">
                          <h2 className="title">Posa</h2>

                          <span className="eyelet">installazione</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="block__element fade-in-from-bottom"
                      data-scroll
                    >
                      <a href="#">
                        <div className="block__element-image">
                          <img src={foto2} alt="img" loading="lazy" />
                        </div>
                        <div className="block__element-txt">
                          <h2 className="title">Ripristino</h2>

                          <span className="eyelet">sostituzione</span>
                        </div>
                      </a>
                    </div>

                    <div
                      className="block__element fade-in-from-bottom"
                      data-scroll
                    >
                      <a href="#">
                        <div className="block__element-image">
                          <img src={foto} alt="img" loading="lazy" />
                        </div>
                        <div className="block__element-txt">
                          <h2 className="title">Rivestimenti</h2>

                          <span className="eyelet">copertura</span>
                        </div>
                      </a>
                    </div>

                    <div
                      className="block__element fade-in-from-bottom"
                      data-scroll
                    >
                      <a href="#">
                        <div className="block__element-image">
                          <img src={foto2} alt="img" loading="lazy" />
                        </div>
                        <div className="block__element-txt">
                          <h2 className="title">Fugatura</h2>

                          <span className="eyelet">finitura</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks__row blocks__row--m-0">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--100 block--image block--image--fullscreen block--image--with-caption">
                <div className="block__inner">
                  <div className="block__media">
                    <div className="block__media-el">
                      <img
                        data-src={marmo}
                        alt="img"
                        className="lazy"
                        data-parallax
                      />
                    </div>

                    <div className="block__media-caption">
                      <span className="eyelet">Occhiello</span>

                      <h2 className="title">Blocco immagine 100% fullscreen</h2>

                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut lectus sapien, porttitor a euismod vitae,
                          semper vitae nunc. Fusce vel tortor tristique, gravida
                          magna varius, eleifend diam.
                        </p>
                      </div>

                      <div className="button button--white">
                        <a href="">
                          <span>Scopri la nuova collezione</span>
                          <div className="button__icon">
                            <i className="icon-right"></i>
                          </div>
                        </a>
                      </div>
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
              <div className="block block--100 block--text txt-center">
                <div className="block__inner">
                  <h2 className="title big">Materiali</h2>

                  <div className="txt">
                    <p>
                      Selezioniamo
                      <strong> materiali di alta qualità</strong> che
                      utilizziamo per ogni tipo di posa:{" "}
                      <strong>parquet</strong>,
                      <strong> gres porcellanato</strong> e molto altro,
                      selezionati per garantire resistenza,
                      <strong> bellezza</strong> e <strong>durata</strong> nel
                      tempo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="block block--100 block--html">
                <div className="block__inner">
                  <div className="banner-cards">
                    <ul>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src={pavimentoParquet}
                              alt="img"
                              loading="lazy"
                            />
                          </div>
                          <h2>Parquet</h2>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src={pavimentoMarmo}
                              alt="img"
                              loading="lazy"
                            />
                          </div>
                          <h2>Marmo</h2>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img src={gresFloor} alt="img" loading="lazy" />
                          </div>
                          <h2>Gres porcellanato</h2>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img src={resinFloor} alt="img" loading="lazy" />
                          </div>
                          <h2>Resine</h2>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- @*
        <div className="blocks__row">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--text align-center">
                <div className="block__inner">
                  <span className="eyelet">Occhiello</span>

                  <h2 className="title">La nostra azienda</h2>

                  <div className="txt">
                    <p>
                      Siamo una realtà artigianale a conduzione familiare,
                      specializzata nella posa di piastrelle e rivestimenti. Con
                      passione, precisione e oltre [X] anni di esperienza,
                      trasformiamo ogni superficie in un lavoro fatto a regola
                      d’arte.
                    </p>
                  </div>

                  <div className="button">
                    <a href="">
                      <span>Scopri chi siamo</span>
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
                        src="../assets/img/foto4.webp"
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
        *@ --> */}
      </div>

      <div className="blog__related">
        <div className="container">
          <h2 className="title">Blog</h2>

          <BlogSlider />
        </div>
      </div>
    </>
  );
};
export default HomePage;
