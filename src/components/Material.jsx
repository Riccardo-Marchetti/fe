import parquet from "../assets/parquet.webp";
import marmoTexture from "../assets/marmo_texture.jpg";
import parquetTexture from "../assets/parquet_texture.jpg";
import gresTexture from "../assets/gres.png";
import resinTexture from "../assets/resin.png";

const Material = () => {
  return (
    <>
      <div className="heading">
        <div className="heading__caption">
          <div className="container txt-center">
            <h1 className="heading__title fade-in" data-scroll>
              Materiali
            </h1>

            <div className="txt fade-in" data-scroll>
              <p>Materiali di prima qualità</p>
            </div>
          </div>
        </div>

        <div className="heading__image" data-scroll>
          {/* <!-- @* Desktop *@ --> */}

          <img src={parquet} alt="img" loading="lazy" className="dsk" />

          {/* <!-- @* Mobile *@ --> */}

          <img src={parquet} alt="img" loading="lazy" className="mbl" />
          <div className="scroll">
            {/* <!-- @*
            data-action="scroll@window->main#hideHeroScroll"
            *@ --> */}
            <a href="#blocks" data-action="click->main#scrollToId">
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="blocks" data-controller="blocks" id="blocks">
        <div className="blocks__row">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--100 block--text txt-center">
                <div className="block__inner">
                  <h2 className="title">
                    Selezioniamo materiali di alta qualità che utilizziamo per
                    ogni tipo di posa: parquet, gres porcellanato e molto altro,
                    selezionati per garantire resistenza, bellezza e durata nel
                    tempo.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks__row blocks__row--mdsk-0">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--image block--image-new">
                <div className="block__inner">
                  <div className="block__media left" data-scroll>
                    <img
                      data-src={parquetTexture}
                      alt=""
                      className="lazy"
                      data-parallax
                    />
                  </div>
                </div>
              </div>
              <div className="block block--50 block--text align-center">
                <div className="block__inner">
                  <h2 className="title">Legno</h2>

                  <div className="txt">
                    <p>
                      Il parquet in legno è una scelta che unisce eleganza e
                      comfort. Ideale sia per ambienti classNameici che moderni,
                      dona un’atmosfera accogliente e sofisticata. Oltre al
                      valore estetico, offre un’ottima durata nel tempo e un
                      buon isolamento termico. Disponibile in diverse essenze e
                      finiture, si adatta perfettamente a ogni stile di
                      arredamento. Una soluzione calda, resistente e sempre
                      attuale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks__row blocks__row--mdsk-0">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--50-m block--text align-center">
                <div className="block__inner">
                  <h2 className="title">Marmo</h2>

                  <div className="txt">
                    <p>
                      Il marmo è un materiale che da sempre rappresenta lusso ed
                      eleganza. Le sue venature naturali e l’aspetto brillante
                      rendono ogni superficie unica. È la soluzione ideale per
                      chi vuole ambienti di classNamee. Oltre all’impatto
                      estetico, il marmo garantisce robustezza e durata nel
                      tempo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="block block--50 block--image block--image-new">
                <div className="block__inner">
                  <div className="block__media right" data-scroll>
                    <img
                      data-src={marmoTexture}
                      alt=""
                      className="lazy"
                      data-parallax
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks__row blocks__row--mdsk-0">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--image block--image-new">
                <div className="block__inner">
                  <div className="block__media left" data-scroll>
                    <img
                      data-src={gresTexture}
                      alt=""
                      className="lazy"
                      data-parallax
                    />
                  </div>
                </div>
              </div>
              <div className="block block--50 block--text align-center">
                <div className="block__inner">
                  <h2 className="title">Cemento</h2>

                  <div className="txt">
                    <p>
                      Le piastrelle effetto cemento sono perfette per chi cerca
                      uno stile contemporaneo, minimal e pulito. Richiamano
                      l’estetica industriale, ma con tutta la praticità di un
                      rivestimento moderno: facili da pulire, resistenti
                      all’usura e all’umidità. Ideali per pavimenti e
                      rivestimenti in ambienti moderni, open space, loft.
                      Un’ottima combinazione tra design e funzionalità.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks__row blocks__row--mdsk-0">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--50-m block--text align-center">
                <div className="block__inner">
                  <h2 className="title">Resina</h2>

                  <div className="txt">
                    <p>
                      La resina è un materiale che da sempre rappresenta lusso
                      ed eleganza. Le sue venature naturali e l’aspetto
                      brillante rendono ogni superficie unica. È la soluzione
                      ideale per chi vuole ambienti di classNamee. Oltre
                      all’impatto estetico, la resina garantisce robustezza e
                      durata nel tempo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="block block--50 block--image block--image-new">
                <div className="block__inner">
                  <div className="block__media right" data-scroll>
                    <img
                      data-src={resinTexture}
                      alt=""
                      className="lazy"
                      data-parallax
                    />
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
              style={{ "--blocks-container-bg": "#36332e" }}
            >
              <div
                className="block block--100 block--text txt-center"
                style={{ "--block-txt": "#fff" }}
              >
                <div className="block__inner">
                  <h2 className="title">
                    <strong>Materiali su misura</strong>
                  </h2>

                  <div className="txt big">
                    <p>
                      Cerchi un materiale diverso da quelli presenti? <br />
                      Nessun problema, valutiamo ogni richiesta con attenzione.
                      Contattaci e troveremo insieme il materiale più adatto
                      alle tue esigenze.
                    </p>
                  </div>

                  <div className="button button--white">
                    <a href="#">
                      <span>Contattaci</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- <div className="blocks__row">
          <div className="container">
            <div className="blocks__container">
              <div className="block block--100 block--text">
                <div className="block__inner">
                  <div className="block__marquee" data-blocks-target="blockMarquee">
                    <div className="block__marquee-wrapper">
                      <div className="block__marquee-inner">
                        <div className="block__marquee-item">
                          <span>Legno - Marmo - Cemento - Resina</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> --> */}
      </div>
    </>
  );
};
export default Material;
