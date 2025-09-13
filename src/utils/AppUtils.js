// src/utils/AppUtils.js

import Lenis from "lenis";
import Ukiyo from "ukiyojs";
import SplitType from "split-type";
import LazyLoad from "vanilla-lazyload";
import ScrollTrigger from "gsap/ScrollTrigger";

class AppUtils {
  constructor() {
    this.lenis = null;
    this.ll = null;
    this.identifier = "appUtils";
  }

  connect() {
    this.element = this.element || {};
    this.element[this.identifier] = this;

    document.documentElement.classList.add("loaded");

    if (this.isTouchDevice()) {
      document.documentElement.classList.add("touchevents");
    } else {
      document.documentElement.classList.add("no-touchevents");
    }

    this.initSmoothScroll();
    this.scrollAnimation();
    this.lazyImages();

    document
      .querySelectorAll("[data-parallax]:not(.lazy)")
      .forEach((el) => this.parallaxMediaScroll(el));
  }

  initSmoothScroll() {
    this.lenis = new Lenis({ anchors: false });

    this.lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    new ResizeObserver(() => ScrollTrigger.refresh()).observe(
      document.documentElement
    );
  }

  scrolltoTarget(target, options = {}) {
    const defaultOptions = {
      duration: 0.6,
      offset: -130,
      easing: (t) => t,
    };
    this.lenis.scrollTo(target, { ...defaultOptions, ...options });
  }

  scrollAnimation() {
    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      document.querySelectorAll("[data-scroll]").forEach((el) => {
        el.classList.add("is-inview");
      });
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-inview");
              observer.unobserve(entry.target);
              if (entry.target.classList.contains("reveal-from-bottom")) {
                setTimeout(() => {
                  SplitType.revert(entry.target);
                }, entry.target.getAttribute("data-revert-delay"));
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll("[data-scroll]").forEach((el) => {
        if (el.classList.contains("reveal-from-bottom")) {
          this.initRevealFromBottomSplitText(el);
        }
        observer.observe(el);
      });
    }
  }

  initRevealFromBottomSplitText(target) {
    const text = new SplitType(target, { types: "lines" });
    const msDuration = (1 + 0.15 * text.lines.length) * 1000;
    text.lines.forEach((line, index) => {
      line.style.setProperty("--index", index);
    });
    target.setAttribute("data-revert-delay", msDuration);
  }

  parallaxMediaScroll(el) {
    new Ukiyo(el, {
      scale: 1.2,
      speed: 1.4,
      wrapperClass: "parallax-wrapper",
    });
  }

  lazyImages() {
    this.ll = new LazyLoad({
      elements_selector: ".lazy",
      class_loaded: "lazy--loaded",
      class_error: "lazy--error",
      class_entered: "lazy--entered",
      callback_loaded: (element) => {
        element.removeAttribute("data-src");
        if (element.hasAttribute("data-parallax")) {
          this.parallaxMediaScroll(element);
        }
      },
      callback_error: (element) => {
        console.log(element);
      },
    });
  }

  getMessageIconHtml(type) {
    if (type === "error") {
      return '<div class="sa-error"><div class="sa-error-x"><div class="sa-error-left"></div><div class="sa-error-right"></div></div><div class="sa-error-placeholder"></div><div class="sa-error-fix"></div></div>';
    } else if (type === "success") {
      return '<div class="sa-success"><div class="sa-success-tip"></div><div class="sa-success-long"></div><div class="sa-success-placeholder"></div><div class="sa-success-fix"></div></div>';
    } else if (type === "warning") {
      return '<div class="sa-warning"><div class="sa-warning-body"></div><div class="sa-warning-dot"></div></div>';
    }
    return "";
  }

  showMessage({ title, text, type = "error", noclosing = false }) {
    if (!document.querySelector(".msg")) {
      const msg = document.createElement("div");
      msg.classList.add("msg", `msg--${type}`);
      msg.setAttribute("data-controller", "msg");

      if (!noclosing) {
        msg.setAttribute("data-action", "click->msg#close");
      }

      msg.innerHTML = `
        <div class="msg__inner" data-action="click->msg#preventClose">
          <span class="msg__icon">${this.getMessageIconHtml(type)}</span>
          <strong>${title}</strong>
          ${text ? `<p>${text}</p>` : ""}
        </div>
      `;
      document.body.appendChild(msg);
    }
  }

  loading(isLoading) {
    if (isLoading) {
      const loaderDiv = document.createElement("div");
      loaderDiv.className = "loader";
      loaderDiv.innerHTML = '<div class="loader__spinner"></div>';
      document.body.append(loaderDiv);
    } else {
      const loader = document.body.querySelector(".loader");
      if (loader) loader.remove();
    }
  }

  vh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  isTouchDevice() {
    const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    const mq = (query) => window.matchMedia(query).matches;

    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      return true;
    }

    const query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(
      ""
    );
    return mq(query);
  }

  preventDefault(e) {
    e.preventDefault();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }
}

export default new AppUtils();
