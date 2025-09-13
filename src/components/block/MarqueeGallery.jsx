import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const MarqueeGallery = ({ reviews }) => {
  const marqueeRef = useRef(null);

  const initBlockGalleryMarquee = (blockGalleryMarquee) => {
    if (!blockGalleryMarquee) return;

    const rate = window.innerWidth > 750 ? 90 : 50;
    const itemWidth = blockGalleryMarquee.querySelector(
      ".block__marquee-inner"
    )?.clientWidth;
    if (!itemWidth) return; // Evita errori se l'elemento non esiste

    const multiplier = Math.ceil(window.innerWidth / itemWidth);
    const time = itemWidth / rate;

    // Clona gli elementi per creare un marquee continuo
    if (itemWidth < window.innerWidth) {
      for (let i = 0; i < multiplier; i++) {
        const clone = blockGalleryMarquee
          .querySelector(".block__marquee-wrapper .block__marquee-inner")
          ?.cloneNode(true);
        if (clone) {
          clone.setAttribute("aria-hidden", true);
          blockGalleryMarquee
            .querySelector(".block__marquee-wrapper")
            ?.append(clone);
        }
      }
    } else {
      const clone = blockGalleryMarquee
        .querySelector(".block__marquee-wrapper .block__marquee-inner")
        ?.cloneNode(true);
      if (clone) {
        clone.setAttribute("aria-hidden", true);
        blockGalleryMarquee
          .querySelector(".block__marquee-wrapper")
          ?.append(clone);
      }
    }

    // Avvia l'animazione GSAP
    gsap.to(blockGalleryMarquee, {
      repeat: -1,
      x: `-${itemWidth}`,
      ease: Linear.easeNone,
      duration: time,
      delay: 0,
    });
  };

  useEffect(() => {
    const blockGalleryMarquee = marqueeRef.current;

    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      // Fallback: avvia immediatamente l'animazione
      initBlockGalleryMarquee(blockGalleryMarquee);
    } else {
      // Usa IntersectionObserver per avviare l'animazione quando visibile
      const marqueeObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            marqueeObserver.unobserve(blockGalleryMarquee);
            initBlockGalleryMarquee(blockGalleryMarquee);
          }
        },
        { threshold: 0.1 }
      );

      if (blockGalleryMarquee) {
        marqueeObserver.observe(blockGalleryMarquee);
      }

      // Pulizia: disattiva l'observer e l'animazione GSAP
      return () => {
        marqueeObserver.disconnect();
        gsap.killTweensOf(blockGalleryMarquee);
      };
    }
  }, []);
  return (
    <div className="block__marquee" ref={marqueeRef}>
      <div className="block__marquee-wrapper">
        <div className="block__marquee-inner">
          {reviews.map((review, index) => (
            <div className="block__marquee-item" key={index}>
              <div className="card--review">
                <a href="#">
                  <div>
                    <div className="stars">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="star"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                    </div>
                    <div className="card--review__info">
                      <p className="card--review__date">{review.date}</p>
                      <div className="txt">
                        <p className="card--review__description">
                          {review.description}
                        </p>
                      </div>
                    </div>
                    <div className="card--review__author">
                      — {review.author}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeGallery;
