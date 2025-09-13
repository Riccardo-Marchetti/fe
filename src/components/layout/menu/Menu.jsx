import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../../assets/logo__black.webp";
import foto from "../../../assets/foto1.webp";
import foto1 from "../../../assets/foto2.webp";
import foto2 from "../../../assets/foto3.webp";
import foto3 from "../../../assets/foto4.webp";
import foto4 from "../../../assets/foto5.webp";

const Menu = ({ isOpen }) => {
  const menuRef = useRef(null);
  const menuImagesRef = useRef([]);
  const menuLinksRef = useRef([]);

  useEffect(() => {
    // Inizializzazione simile a quella del controller Stimulus
    const menuImages = menuImagesRef.current;
    const menuLinks = menuLinksRef.current;

    let notSelectedCount = 0;

    menuLinks.forEach((item, index) => {
      if (item.classList.contains("selected")) {
        gsap.set(menuImages[index], { autoAlpha: 1 });
      } else {
        gsap.set(menuImages[index], { autoAlpha: 0 });
        notSelectedCount++;
      }
    });

    // Se nessun link è selezionato, mostra la prima immagine
    if (notSelectedCount === menuLinks.length) {
      gsap.set(menuImages[0], { autoAlpha: 1 });
    }
  }, []);

  const handleMenuLinkHover = (index) => {
    menuImagesRef.current.forEach((item, i) => {
      if (i === index) {
        gsap.to(item, { duration: 0.5, autoAlpha: 1 });
      } else {
        gsap.to(item, { duration: 0.5, autoAlpha: 0 });
      }
    });
  };

  return (
    <div
      id="menu"
      ref={menuRef}
      data-controller="menu"
      data-lenis-prevent
      className={isOpen ? "open" : ""}
    >
      <div className="menu__gallery">
        <div
          className="gallery-item"
          ref={(el) => (menuImagesRef.current[0] = el)}
        >
          <div className="lazy" data-bg={foto}></div>
        </div>
        <div
          className="gallery-item"
          ref={(el) => (menuImagesRef.current[1] = el)}
        >
          <div className="lazy" data-bg={foto1}></div>
        </div>
        <div
          className="gallery-item"
          ref={(el) => (menuImagesRef.current[2] = el)}
        >
          <div className="lazy" data-bg={foto2}></div>
        </div>
        <div
          className="gallery-item"
          ref={(el) => (menuImagesRef.current[3] = el)}
        >
          <div className="lazy" data-bg={foto3}></div>
        </div>
        <div
          className="gallery-item"
          ref={(el) => (menuImagesRef.current[4] = el)}
        >
          <div className="lazy" data-bg={foto4}></div>
        </div>
      </div>

      <div className="menu__nav" data-menu-target="main.navMenuContainer">
        <div className="menu__nav-header">
          <div className="menu__logo">
            <a>
              <img src={logo} alt="img" />
            </a>
          </div>
        </div>

        <div className="menu__nav-content">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  data-selected-label="chi-siamo"
                  ref={(el) => (menuLinksRef.current[0] = el)}
                  onMouseOver={() => handleMenuLinkHover(0)}
                >
                  <span>Chi siamo</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-selected-label="servizi"
                  ref={(el) => (menuLinksRef.current[0] = el)}
                  onMouseOver={() => handleMenuLinkHover(1)}
                >
                  <span>Servizi</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-selected-label="materiali"
                  ref={(el) => (menuLinksRef.current[0] = el)}
                  onMouseOver={() => handleMenuLinkHover(2)}
                >
                  <span>Materiali</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-selected-label="blog"
                  ref={(el) => (menuLinksRef.current[0] = el)}
                  onMouseOver={() => handleMenuLinkHover(3)}
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-selected-label="contatti"
                  ref={(el) => (menuLinksRef.current[0] = el)}
                  onMouseOver={() => handleMenuLinkHover(4)}
                >
                  <span>Contatti</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="menu__nav-footer">
          <div className="button">
            <a href="#">
              <span>Iscriviti alla newsletter</span>
            </a>
          </div>

          <div>
            <a
              className="icon-social-facebook"
              href="#"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="visuallyhidden">FACEBOOK</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
