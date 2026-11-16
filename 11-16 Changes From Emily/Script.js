//Emily's
function setTheme(themeName) {
   var element = document.body;
   element.classList.remove("sunset", "midnight", "sunrise");
   element.classList.add(themeName);
}

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

//Margaryta's
function surprise(){
  const destinations = ["New York", "Los Angeles", "Paris", "Venice"];
  var randomItem = destinations[Math.floor(Math.random()*destinations.length)];
  let output = document.querySelector("#surprise h2");
  output.textContent = "The random location is: " + randomItem;
}
function Midnight() {
   var element = document.body;
   element.classList.toggle("midnight");

}
function Sunrise() {
   var element = document.body;
   element.classList.toggle("sunrise");
}
function Midnight() {
   var element = document.body;
   element.classList.toggle("midnight");

}

//https://stackoverflow.com/questions/65239271/making-a-button-that-outputs-a-greeting
document.querySelector("input[type='button']").addEventListener("click", greeting);
let output = document.querySelector("h2");
function greeting(){
  output.textContent = "Welcome to the project select a new travel";
}

//Patrick's
const calculateBtn = document.getElementById("calcButton");
document.addEventListener("DOMContentLoaded", () => {
calculateBtn.addEventListener("click", function(){

    let cost =
    Number(document.getElementById("cost").value);

    let travelers =
    Number(document.getElementById("travelers").value);

    if(cost > 0 && travelers > 0){

        let total = cost * travelers;

        document.getElementById("totalCost").textContent =
        "Total Trip Cost: $" + total;

    }
    else{

        document.getElementById("totalCost").textContent =
        "Please enter valid numbers.";

    }});

});
document.getElementById("nyButton").addEventListener("click", function(){
    document.getElementById("nyInfo").textContent = "Best time to visit: April to June or September to November.";
});

document.getElementById("laButton").addEventListener("click", function(){
    document.getElementById("laInfo").textContent = "Best time to visit: March to May or September to November.";
});

document.getElementById("parisButton").addEventListener("click", function(){
    document.getElementById("parisInfo").textContent = "Best time to visit: April to June or September to October.";
});

document.getElementById("veniceButton").addEventListener("click", function(){
    document.getElementById("veniceInfo").textContent = "Best time to visit: April to May or September to October.";
});