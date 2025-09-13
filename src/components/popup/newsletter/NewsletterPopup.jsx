const NewsletterPopup = ({ closePopup }) => {
  return (
    <>
      <button
        className="popup__close"
        aria-label="Chiudi pop-up"
        data-type="2"
        onClick={closePopup}
      ></button>
      <div className="popup__header">
        <span className="title">Iscriviti alla newsletter</span>
        <div className="txt">
          <p>
            Iscriviti per rimanere aggiornato sulle ultime novità, soluzioni e
            consigli
          </p>
        </div>
      </div>

      <div className="popup__content">
        <form className="form">
          <div className="form__field form__field--100">
            <div>
              <label htmlFor="email">
                E-Mail <sup>*</sup>
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
              <span>Registrati</span>
            </button>
          </div>
        </form>
      </div>

      <div className="popup__footer"></div>
    </>
  );
};
export default NewsletterPopup;
