// import logoWhite from "../../../assets/logo__white.webp";
// import logo from "../../../assets/logo__black.webp";
import { useState } from "react";
import { gsap } from "gsap";

const Header = ({ isDark, lenis }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    const burger = document.querySelector(".header__burger");

    if (isMenuOpen) {
      // Chiudi il menu
      setIsMenuOpen(false);
      menu.classList.remove("open");
      burger.classList.remove("open");
      gsap.to(menu, {
        duration: 0.4,
        delay: 1,
        ease: "power1.out",
        y: "-100%",
        onComplete: () => {
          if (lenis) lenis.start(); // Ripristina lo scrolling
        },
      });
    } else {
      // Apri il menu
      setIsMenuOpen(true);
      menu.classList.add("open");
      burger.classList.add("open");
      gsap.to(menu, {
        duration: 0.4,
        ease: "power1.out",
        y: "0%",
        onStart: () => {
          if (lenis) lenis.stop(); // Ferma lo scrolling
        },
      });
    }
  };

  return (
    <>
      <header className={`header ${isDark ? "header--dark" : ""}`} id="hd">
        <div className="container">
          <div className="header__left">
            <div className="header__logo">
              <a href="/">
                {/* <img src={isDark ? logo : logoWhite} alt="logo" /> */}
              </a>
            </div>
          </div>

          <div className="header__right">
            <div className="header__nav">
              <nav>
                <div className="header__nav-link">
                  <a tabIndex="0" href="/chisiamo">
                    <span>Chi siamo</span>
                  </a>
                  <i className="icon-down"></i>
                  {/* <!-- <div className="header__nav-dropdown">
                  <div>
                    <ul>
                      <li>
                        <a tabIndex="0" href="/en/chi-siamo/storia">Storia</a>
                      </li>
                      <li>
                        <a tabIndex="0" href="/en/chi-siamo/unita-produttive"
                          >Unità produttive</a
                        >
                      </li>
                      <li>
                        <a tabIndex="0" href="/en/chi-siamo/ricerca-e-sviluppo"
                          >Ricerca e sviluppo</a
                        >
                      </li>
                      <li>
                        <a
                          tabIndex="0"
                          href="/en/chi-siamo/qualita-e-certificazioni"
                          >Qualità e certificazioni</a
                        >
                      </li>
                      <li>
                        <a tabIndex="0" href="/en/chi-siamo/codice-etico"
                          >Codice Etico</a
                        >
                      </li>
                    </ul>
                  </div>
                </div> --> */}
                </div>

                <div className="header__nav-link">
                  <a tabIndex="0" href="/service">
                    <span>Servizi</span>
                  </a>
                  <i className="icon-down"></i>
                  {/* <!-- <div className="header__nav-dropdown">
                  <div>
                    <ul>
                      <li>
                        <a tabIndex="0" href="/en/brand/bonfanti">BONFANTI</a>
                      </li>
                      <li>
                        <a tabIndex="0" href="/en/brand/italgru">ITALGRU</a>
                      </li>
                    </ul>
                  </div>
                </div> --> */}
                </div>

                <div className="header__nav-link">
                  <a tabIndex="0" href="/material">
                    <span>Materiali</span>
                  </a>
                </div>

                <div className="header__nav-link">
                  <a tabIndex="0" href="/blog">
                    <span>Blog</span>
                  </a>
                </div>

                <div className="header__nav-link">
                  <a tabIndex="0" href="/contact">
                    <span>Contatti</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="header__burger">
        <button
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Apri il menu di navigazione"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};
export default Header;
