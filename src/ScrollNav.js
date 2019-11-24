
import smoothscroll from 'smoothscroll-polyfill'

/**
 * ScrollNav
 * Scroll anchor animation thing.
 * @requires smoothscroll-polyfill
 */
class ScrollNav {

  /**
   * @param {elements} links - collection of anochor links
   * @param {number} offset - number in pixels to offset anchor.
   */
  constructor(links, offset) {
    this.links = links;
    this.offset = offset;
  }

  /**
   * Init scrollBy poly
   * Kick off anchor scroll handler
   */
  init() {
    smoothscroll.polyfill();
    this.handler();
  }

  /**
   * Loop though anchors, listen for click.
   * @method handler
   */
  handler() {
    this.links.forEach((link) => {
      link.addEventListener("click", (e) => {
        this.linkScroll(e);
      }, false);
    });
  }

  /**
   * Determin scroll distance
   * @method getDistanceToTop
   * @param {Node}
   */
  getDistanceToTop(el) {
    return  Math.floor(el.getBoundingClientRect().top);
  }

  /**
   * Do the animated scroll to anchor thang.
   * @method linkScroll
   * @param {event}
   */
  linkScroll(event) {
    event.preventDefault();
    const targetID = event.target.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);

    if (!targetAnchor) return;

    const originalTop = this.getDistanceToTop(targetAnchor) - this.offset;
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  }
}


export default ScrollNav;
