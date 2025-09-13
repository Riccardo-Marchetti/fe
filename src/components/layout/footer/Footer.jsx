import logo__white from "../../../assets/logo__white.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <ul>
            <li>
              <a href="/chisiamo">Chi siamo</a>
            </li>
            <li>
              <a href="/service">Servizi</a>
            </li>
          </ul>
        </div>

        <div className="footer__logo">
          <a href="/">
            <img src={logo__white} alt="logo" />
          </a>
        </div>

        <div className="footer__nav">
          <ul>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contatti</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__privacy">
        <div className="container">
          <div className="footer__privacy-bottom">
            <small>Nome azienda P.IVA 525245763 </small>
            <small>
              <a href="/admin">Admin</a> - <a href="/cookies">Cookies</a> -
              <a href="/privacy">Privacy</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
