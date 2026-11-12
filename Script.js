function Sunset() {
   var element = document.body;
   element.classList.toggle("sunset");
}
class parallaxTiltEffect {
  constructor({element, tiltEffect}) {
    this.element = element;
    if (!this.element) return;
    
    this.container = this.element.querySelector(".container");
    if (!this.container) return;

    this.size = [300, 360];
    [this.w, this.h] = this.size;
    this.tiltEffect = tiltEffect;
    this.mouseOnComponent = false;

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  handleMouseMove(event) {
    const {offsetX, offsetY} = event;
    let X = 0, Y = 0;

    if (this.tiltEffect === "normal") {
      X = ((offsetX - (this.w/2)) / 3) / 3;
      Y = (-(offsetY - (this.h/2)) / 3) / 3;
    }

    this.setProperty('--rY', X.toFixed(2));
    this.setProperty('--rX', Y.toFixed(2));
  }

  handleMouseEnter() {
    this.mouseOnComponent = true;
    this.container.classList.add("container--active");
  }

  handleMouseLeave() {
    this.mouseOnComponent = false;
    this.defaultStates();
  }

  defaultStates() {
    this.container.classList.remove("container--active");
    this.setProperty('--rY', 0);
    this.setProperty('--rX', 0);
  }

  setProperty(p, v) {
    return this.container.style.setProperty(p, v);
  }

  init() {
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const wraps = document.querySelectorAll('.wrap');
  wraps.forEach(wrapElement => {
    new parallaxTiltEffect({
      element: wrapElement,
      tiltEffect: 'normal'
    });
  });
});


