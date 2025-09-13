import contact from "../assets/contact.webp";

const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section__description">
            <h1 className="section__title">Contatti</h1>

            <div className="txt">
              <p>
                Siamo pronti a realizzare il tuo
                <strong> progetto su misura</strong>. Richiedi ora il tuo
                <strong> preventivo gratuito</strong>!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blocks">
        <div
          className="blocks__row blocks__row--bg"
          style={{ "--blocks-row-bg": "#f5f5f5" }}
        >
          <div className="container">
            <div className="blocks__container">
              <div className="block block--50 block--image">
                <div className="block__inner">
                  <div className="block__media">
                    <div className="block__media-el">
                      <img
                        src={contact}
                        alt="img"
                        loading="lazy"
                        className="fade-in"
                        data-scroll
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="block block--50 block--text">
                <div className="block__inner">
                  <h2 className="title">Nome azienda</h2>

                  <div className="txt">
                    <p className="info-contact">
                      <strong>Indirizzo</strong> <br />
                      Via nome, 3 <br />
                      35261 Pontida (BG) Italy
                    </p>
                    <p className="info-contact">
                      <strong>Contatti</strong> <br />
                      {/* <!-- Via Favirano 8/B - 24032 - Torre De' Busi (BG) <br /> --> */}
                      Tel: <a href="tel:+393405934495"> +39 331 213 4315</a>
                      <br />
                      E-mail:&nbsp;
                      <a href="mailto:infonome@gmail.com">infonome@gmail.com</a>
                      <br />
                      Pec:&nbsp;
                      <a href="mailto:nome@legalmail.it">nome@legalmail.it</a>
                    </p>
                    <p className="info-contact">
                      <strong>Orari di apertura</strong> <br />
                      Lunedi - Sabato 8:00 - 19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote">
        <div className="container txt-center">
          <div className="quote__request">
            <h2 className="title">
              Richiedi il tuo <strong>preventivo gratuito</strong>
            </h2>

            <div className="txt">
              <p>
                Compila il form sottostante, ti risponderemo al più presto
                possibile con un preventivo pensato per le tue esigenze.
              </p>
            </div>
          </div>

          <form className="form">
            <div className="form__field form__field--50">
              <div>
                <label htmlFor="name">
                  NOME <sup>*</sup>
                </label>
                <input type="text" id="name" autoComplete="off" required />
              </div>
            </div>

            <div className="form__field form__field--50">
              <div>
                <label htmlFor="surname">
                  COGNOME <sup>*</sup>
                </label>
                <input type="text" id="surname" autoComplete="off" required />
              </div>
            </div>

            <div className="form__field form__field--50">
              <div>
                <label htmlFor="phone">
                  TELEFONO <sup>*</sup>
                </label>
                <input
                  type="tel"
                  id="phone"
                  maxLength="50"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form__field form__field--50">
              <div>
                <label htmlFor="email">
                  E-MAIL <sup>*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  maxLength="100"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form__field form__field--100">
              <div>
                <label htmlFor="message">
                  Messaggio <sup>*</sup>
                </label>
                <textarea id="message" maxLength="2000" required></textarea>
              </div>
            </div>

            <div className="form__privacy">
              <fieldset>
                <legend className="visuallyhidden">
                  Consenso al trattamento dei dati personali
                </legend>
                <strong>
                  INFORMATIVA SULLA TUTELA DELLA&nbsp;
                  <a href="/" target="_blank" rel="noreferrer noopener">
                    PRIVACY
                  </a>
                </strong>
                <p>Autorizzo il trattamento dei miei dati personali.</p>
                <label className="form__radio">
                  <input
                    type="radio"
                    name="privacyApplication"
                    value="1"
                    autoComplete="off"
                    required
                  />
                  <strong>ACCONSENTO</strong>
                </label>
                <label className="form__radio">
                  <input
                    type="radio"
                    name="privacyApplication"
                    value="0"
                    autoComplete="off"
                    required
                  />
                  <strong>NON ACCONSENTO</strong>
                </label>
              </fieldset>
            </div>

            <div className="button">
              <button type="submit">
                <span>INVIO</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="blocks__row">
        <div className="container">
          <div
            className="blocks__container blocks__container--bg"
            style={{ "--blocks-container-bg": "#554e44" }}
          >
            <div
              className="block block--100 block--text txt-center"
              style={{ "--block-txt": "#fff" }}
            >
              <div className="block__inner">
                <h2 className="title big">Newsletter</h2>

                <div className="txt big">
                  <p>
                    Non perdere le ultime <a href="">novità</a>,&nbsp;
                    <a href="">soluzioni</a> e&nbsp;
                    <a href="">consigli esclusivi</a> per dare valore alla tua
                    casa
                    <br />
                    Iscriviti alla newsletter del piastrellista per restare
                    aggiornato
                  </p>
                </div>

                <div className="button button--white">
                  <a href="#">
                    <span>Iscriviti alla newsletter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Contact;
