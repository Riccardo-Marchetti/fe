import { useState } from "react";
import img from "../assets/foto7.webp";
import parquet from "../assets/parquet.webp";
import Popup from "./popup/Popup";

const Service = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (type) => {
    setActivePopup(type);
  };
  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section__description">
            <h1 className="section__title">
              <mark>Servizi</mark> offerti
            </h1>

            <div className="txt">
              <p>
                Ci occupiamo con <strong>competenza e precisione</strong> di
                ogni fase del lavoro, dalla consulenza iniziale alla
                realizzazione finale, offrendo un
                <strong>servizio completo</strong>,
                <strong>affidabile e su misura</strong>, pensato per rispondere
                a ogni esigenza.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blocks" id="blocks">
        <div
          className="blocks__row blocks__row--bg"
          style={{ "--blocks-row-bg": "#36332e" }}
        >
          <div className="container">
            <div className="blocks__container">
              <div
                className="block block--100 block--text txt-center"
                style={{ "--block-txt": "#fff" }}
              >
                <div className="block__inner">
                  <h2 className="title big">Esperienza e precisione</h2>

                  <div className="txt">
                    <p>
                      Dalla posa alla rifinitura, ogni intervento è eseguito con
                      la <strong>massima cura</strong>, seguendo standard
                      elevati di <strong>qualità</strong> e
                      <strong>attenzione ai dettagli</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="block block--100 block--image block--image--launch"
                style={{ "--block-txt": "#fff" }}
              >
                <div className="block__inner">
                  <div className="block__media block__media--left">
                    <div className="block__media-el" data-scroll>
                      <a href="">
                        <img data-src={img} alt="" className="lazy" />
                      </a>
                    </div>
                    <div className="block__media-caption">
                      <span className="eyelet">Installazione</span>

                      <h2 className="title">Posa</h2>

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

              <div
                className="block block--100 block--image block--image--launch"
                style={{ "--block-txt": "#fff" }}
              >
                <div className="block__inner">
                  <div className="block__media block__media--right">
                    <div className="block__media-el" data-scroll>
                      <a href="">
                        <img data-src={parquet} alt="" className="lazy" />
                      </a>
                    </div>
                    <div className="block__media-caption">
                      <span className="eyelet">Sostituzione</span>

                      <h2 className="title">Ripristino</h2>

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

              <div
                className="block block--100 block--image block--image--launch"
                style={{ "--block-txt": "#fff" }}
              >
                <div className="block__inner">
                  <div className="block__media block__media--left">
                    <div className="block__media-el" data-scroll>
                      <a href="">
                        <img data-src={parquet} alt="" className="lazy" />
                      </a>
                    </div>
                    <div className="block__media-caption">
                      <span className="eyelet">Copertura</span>

                      <h2 className="title">Rivestimenti</h2>

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

              <div
                className="block block--100 block--image block--image--launch"
                style={{ "--block-txt": "#fff" }}
              >
                <div className="block__inner">
                  <div className="block__media block__media--right">
                    <div className="block__media-el" data-scroll>
                      <a href="">
                        <img data-src={parquet} alt="" className="lazy" />
                      </a>
                    </div>
                    <div className="block__media-caption">
                      <span className="eyelet">Finitura</span>

                      <h2 className="title">Fugatura</h2>

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
            <div
              className="blocks__container blocks__container--bg"
              style={{ "--blocks-container-bg": "#dbd5c9" }}
            >
              <div
                className="block block--100 block--text txt-center"
                style={{ "--block-txt": "#000" }}
              >
                <div className="block__inner">
                  <h2 className="title">
                    <strong>Trasforma i tuoi spazi</strong>
                  </h2>

                  <div className="txt big">
                    <p>
                      Contattaci ora, risponderemo al più presto possibile con
                      una proposta pensata per le tue esigenze.
                    </p>
                  </div>

                  <div
                    className="button button--black"
                    onClick={() => openPopup("quote")}
                    data-type="1"
                  >
                    <span>
                      <span>Richiedi preventivo</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup activePopup={activePopup} closePopup={closePopup} />
    </>
  );
};
export default Service;
