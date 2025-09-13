const QuotePopup = ({ closePopup }) => {
  return (
    <>
      <button
        className="popup__close"
        aria-label="Chiudi pop-up"
        data-type="1"
        onClick={closePopup}
      ></button>
      <div className="popup__header">
        <span className="title">Richiedi preventivo</span>
        <div className="txt">
          <p>
            Compila il form sottostante, ti risponderemo al più presto possibile
            con un preventivo pensato per le tue esigenze.
          </p>
        </div>
      </div>

      <div className="popup__content">
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
                INFORMATIVA SULLA TUTELA DELLA
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

      <div className="popup__footer"></div>
    </>
  );
};
export default QuotePopup;
