import contact from "../assets/contact.webp";

const Admin = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section__description txt-center">
            <h1 className="section__title">Pagina admin</h1>

            <div className="txt">
              <p>
                Questa pagina è dedicata alla gestione del sito web, qui potrai
                creare o rimuovere i blog
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="create-blog">
        <form
          className="form"
          data-admin-target="createForm"
          data-action="submit->admin#submitForm"
        >
          <div className="form__field form__field--50">
            <div>
              <label htmlFor="title">
                TITOLO BLOG <sup>*</sup>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="form__field form__field--50">
            <div>
              <label htmlFor="previewImage">
                URL IMMAGINE DI PREVIEW DEL BLOG <sup>*</sup>
              </label>
              <input
                type="text"
                id="previewImage"
                name="previewImageUrl"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="form__field form__field--50">
            <div>
              <label htmlFor="description">
                DESCRIZIONE <sup>*</sup>
              </label>
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="form__field form__field--50">
            <div>
              <label htmlFor="date">
                DATA <sup>*</sup>
              </label>
              <input
                type="date"
                id="date"
                name="creationDate"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="create-text">
            <div className="">
              {/* <!-- Sezioni di testo dinamiche --> */}
              <div>
                <div
                  className="form__field form__field--100"
                  data-admin-target="textsContainer"
                >
                  <label>
                    TESTI <sup>*</sup>
                  </label>
                  <div>
                    <textarea name="texts" maxLength="2000" required></textarea>
                    <button type="button" data-action="click->admin#removeText">
                      Rimuovi
                    </button>
                  </div>
                </div>
                <div className="button">
                  <button type="button" data-action="click->admin#addText">
                    Aggiungi sezione di testo
                  </button>
                </div>
              </div>
              {/* <!-- URL immagini dinamiche --> */}
              <div>
                <div
                  className="form__field form__field--100"
                  data-admin-target="imagesContainer"
                >
                  <label>
                    IMMAGINI <sup>*</sup>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="imagesUrl"
                      placeholder="Inserisci l'URL dell'immagine"
                      required
                    />
                    <button
                      type="button"
                      data-action="click->admin#removeImage"
                    >
                      Rimuovi
                    </button>
                  </div>
                </div>
                <div className="button">
                  <button type="button" data-action="click->admin#addImage">
                    Aggiungi immagine
                  </button>
                </div>
              </div>
            </div>
            <div className="button create-blog-button">
              <button type="submit">
                <span>CREA BLOG</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="list-blog">
        <div className="blog">
          <div className="container txt-center">
            <h2 className="title">Modifica ed elimina qui i tuoi blog</h2>
            <div className="blog__wrapper"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
