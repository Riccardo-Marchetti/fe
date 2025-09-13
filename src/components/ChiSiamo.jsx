import marmo from "../assets/marmo.webp";
import parquet1 from "../assets/parquet1.webp";
import foto4 from "../assets/foto4.webp";
import SliderNumber from "./slider/SliderNumber";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";
import MarqueeGallery from "./block/MarqueeGallery";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const ChiSiamo = () => {
  const numberSlides = [
    {
      prefix: "",
      number: "35",
      suffix: "",
      description: "Anni di esperienza",
    },
    {
      prefix: "+",
      number: "100",
      suffix: "",
      description: "Lavori eseguiti",
    },
    {
      prefix: "+",
      number: "200",
      suffix: "",
      description: "Recensioni positive",
    },
  ];

  const review = [
    {
      date: "2 day ago",
      description:
        "Lavoro eseguito con grande precisione e attenzione ai dettagli. Le piastrelle sono state posate perfettamente, e il risultato finale è spettacolare. Consiglio vivamente!",
      author: "John Doe",
    },
    {
      date: "5 day ago",
      description:
        "Professionalità e puntualità eccezionali! Risultato impeccabile. Mi hanno aiutato a scegliere i materiali migliori per la mia cucina.",
      author: "John Doe",
    },
    {
      date: "4 day ago",
      description:
        "Ho affidato a loro la posa delle piastrelle per il mio bagno. Il lavoro è stato completato con cura e il risultato è esattamente come lo immaginavo. Soni gentili e professionali, tornerò sicuramente per futuri progetti!",
      author: "John Doe",
    },
    {
      date: "3 day ago",
      description:
        "Servizio eccellente! Hanno trasformato il mio vecchio pavimento in soggiorno con piastrelle moderne e di alta qualità. Consigliatissimi!",
      author: "John Doe",
    },
    {
      date: "6 day ago",
      description:
        "Ho cambiato il pavimento del mio negozio affidandomi a loro, il risultato è stato oltre le aspettative. Grande attenzione ai dettagli e pulizia dopo il lavoro. Un team di veri professionisti!",
      author: "John Doe",
    },
  ];

  return (
    <>
      <div className="heading">
        <div className="heading__caption">
          <div className="container txt-center">
            <h1 className="heading__title fade-in" data-scroll>
              Chi siamo
            </h1>

            {/* <!-- <div className="txt fade-in" data-scroll>
              Decades of experience in delivering high-performance and tailored
              lifting, material handling, and logistics solutions.
            </div> --> */}
          </div>
        </div>

        <div className="heading__image" data-scroll>
          {/* <!-- Desktop --> */}

          <img src={parquet1} alt="img" loading="lazy" className="dsk" />

          {/* <!-- Mobile --> */}

          <img src={parquet1} alt="img" loading="lazy" className="mbl" />
          <div className="scroll">
            {/* <!-- @
            data-action="scroll@window->main#hideHeroScroll"
            @ --> */}
            <a href="#blocks" data-action="click->main#scrollToId">
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="blocks" id="blocks">
        <div className="blocks__row">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--text align-center">
                <div className="block__inner">
                  {/* <!-- <span className="eyelet">Occhiello</span> --> */}

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

                  {/* <!-- <div className="button">
                    <a href="">
                      <span>Scopri chi siamo</span>
                      <div className="button__icon">
                        <i className="icon-right"></i>
                      </div>
                    </a>
                  </div> --> */}
                </div>
              </div>

              <div className="block block--50 block--image">
                <div className="block__inner">
                  <div className="block__media">
                    <div className="block__media-el">
                      <img
                        src={foto4}
                        alt="img"
                        loading="lazy"
                        className="fade-in"
                        data-scroll
                      />
                    </div>

                    {/* <!-- <div className="block__dida">
                      <span>Blocco immagine 50%</span>
                    </div> --> */}
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
            <div
              className="blocks__container blocks__container--bg"
              style={{ "--blocks-container-bg": "#dbd5c9" }}
            >
              {/* <!-- @*
              style="--blocks-container-bg: #eee5da"
              *@ --> */}
              <div className="block block--100 block--numbers txt-center">
                {/* <!-- @*
                style="--block-txt: #fff"
                *@ --> */}
                <div className="block__inner">
                  <span className="eyelet">Occhiello</span>

                  <h2 className="title">
                    I nostri{" "}
                    <mark>
                      <strong>numeri</strong>
                    </mark>
                  </h2>

                  <div className="block__slider">
                    <SliderNumber slides={numberSlides} />

                    <div className="block__slider-controls">
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>

                  <div className="button">
                    <a href="#">
                      <span>Scopri chi siamo</span>
                    </a>
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
                      <h2 className="title big">Servizi</h2>

                      <div className="txt big">
                        <p>
                          Offriamo <strong>soluzioni su misura</strong>: dalla
                          posa di piastrelle tradizionali ai design più moderni,
                          con <strong>precisione artigianale</strong> e
                          <strong>materiali di alta qualità</strong>.
                        </p>
                      </div>

                      <div className="button button--white">
                        <a href="#">
                          <span>Scopri di più</span>
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
              <div className="block block--50 block--text block__pb-15">
                <div className="block__inner">
                  <h2 className="title">
                    Design contemporaneo applicato alle più particolari esigenze
                    funzionali
                  </h2>

                  <div className="txt">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut lectus sapien, porttitor a euismod vitae, semper vitae
                      nunc. Fusce vel tortor tristique, gravida magna varius,
                      eleifend diam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="block block--50 block--text block__pt-0">
                <div className="block__inner">
                  <div className="txt">
                    <p>
                      Da questo principio nascono i prodotti Contract di a,
                      creazioni innovative dallo stile inconfondibile e dalla
                      qualità totale, frutto del costante sviluppo tecnologico
                      con cui vengono progettate e realizzate. Contract di
                      Newform rappresenta la visione più attuale e cosmopolita
                      dell’azienda nell’interpretazione del design moderno in
                      contesti pubblici. Newform dedica risorse e spazi
                      importanti ai progetti Contract e ritiene fondamentale
                      mantenere attiva una linea diretta di collaborazione in
                      questa divisione.
                    </p>
                  </div>

                  <div className="button">
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

        <div
          className="blocks__row blocks__row--bg"
          style={{ "--blocks-row-bg": "#f5f5f5" }}
        >
          <div className="container">
            <div className="blocks__container">
              <div className="block block--100 block--text txt-center">
                <div className="block__inner">
                  <h2 className="title big">Parlano di noi</h2>

                  <div className="txt big">
                    <p>
                      Le opinioni dei nostri clienti sono il miglior
                      riconoscimento del nostro impegno quotidiano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="block block--100 block--image">
                <div className="block__inner">
                  <MarqueeGallery reviews={review} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChiSiamo;
