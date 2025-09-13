import { useState } from "react";
import NewsletterPopup from "./newsletter/NewsletterPopup";
import QuotePopup from "./quote/QuotePopup";

const Popup = ({ activePopup, closePopup }) => {
  if (!activePopup) return null;

  return (
    <>
      {/* Popup per il preventivo */}
      <div
        id="quotePopup"
        className={`popup ${activePopup === "quote" ? "open" : ""}`}
        data-lenis-prevent
      >
        <div className="popup__container">
          <div className="popup__box">
            <QuotePopup closePopup={closePopup} />
          </div>
        </div>
        <div className="popup__bg" onClick={closePopup}></div>
      </div>

      {/* Popup per la newsletter */}
      <div
        id="newsletterPopup"
        className={`popup ${activePopup === "newsletter" ? "open" : ""}`}
        data-lenis-prevent
      >
        <div className="popup__container">
          <div className="popup__box">
            <NewsletterPopup closePopup={closePopup} />
          </div>
        </div>
        <div className="popup__bg" onClick={closePopup}></div>
      </div>
    </>
  );
};
export default Popup;
