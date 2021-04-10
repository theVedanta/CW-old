// HAM
let ham = document.querySelector(".ham");
let side = document.querySelector(".side");
ham.addEventListener("click", (e) => {
  ham.classList.toggle("hamActive");
  side.classList.toggle("sideActive");
});

// PARALLAX
let scenes = document.querySelectorAll(".transparent");

for (let scene of scenes) {
  let parallax = new Parallax(scene);
  parallax.invert(false, false);
  parallax.scalar(8, 15);
}

// --------------------- change theme ----------------------------
let btn = document.querySelector(".fa-lightbulb");

let theme = localStorage.getItem("theme");

let changeMode = () => {
  theme = localStorage.getItem("theme");
  if (theme == "dark") {
    document.body.classList.add("light");
    theme = localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    theme = localStorage.setItem("theme", "dark");
  }
};

if (theme == "light") {
  document.body.classList.add("light");
  theme = localStorage.setItem("theme", "light");
} else {
  document.body.classList.remove("light");
  theme = localStorage.setItem("theme", "dark");
}

btn.addEventListener("click", () => {
  changeMode();
});

// LOADING
let loader = document.querySelector(".loader");
let body = document.body;
let shapes = document.querySelectorAll(".transparent img");

let loaded = () => {
  document.querySelector(".shap").classList.add("shapL");
  document.querySelector(".lin").classList.add("linL");
  setTimeout(() => {
    document.querySelector(".loader h1").textContent = "C";
  }, 600);
  setTimeout(() => {
    document.querySelector(".loader h1").textContent = "CW";
  }, 800);
  setTimeout(() => {
    document.querySelector(".lin").classList.add("blink");
  }, 1000);
  setTimeout(() => {
    body.classList.remove("loading");
    loader.classList.add("loaded");
  }, 1200);
};

let inital = () => {
  let nav = document.querySelector("nav");
  nav.style.transform = "none";
  for (let shape of shapes) {
    shape.style.opacity = "1";
    shape.style.transform = "translate(0)";
  }
};

let theTrans = () => {
  let b = document.querySelector(".hero .btn");
  b.classList.add("theTrans");
};

let heroStuff = () => {
  let p = document.querySelector(".hero h3");
  let b = document.querySelector(".hero .btn");
  p.classList.add("upAOS");
  b.classList.add("upAOS");
};

let load = () => {
  loaded();
  inital();
  heroStuff();
  setTimeout(theTrans, 2);
};


var h = 0
var g = 9.8 * -1
var u = 51
var swich = true
var t = 0
var percentage = 0
var square = true
var rx = 0
async function yourFunction(){
  var ball = document.getElementById('ball')
  var tramp = document.getElementById('tramp')
      
      t = t + 0.15
      h = (u*t) + (0.5*g*t*t) 
      percentage = percentage + 1
      ball.setAttribute('y',`${h * -1 - 30}`)
      if (h < 15){
        tramp.setAttribute('d',`M 0 0 C 150 ${h * -1 + 15}, 150 ${h * -1 + 15}, 300 0`)
        if (h < 0){
          ball.setAttribute('y',`${h * -1 - 30}`)
        }
      }
      if (percentage <60 && percentage > 10){
        if (square){
          rx = rx + 0.3
          ball.setAttribute('rx',`${rx}`)
        } else {
          rx = rx - 0.3
          ball.setAttribute('rx',`${rx}`)
        }
      }
      if (percentage <= 70){
        ball.setAttribute('transform',`rotate(${360 * percentage / 70} 150 ${h * -1 - 15})`)
        if(percentage == 70){
          ball.setAttribute('transform',`rotate(0 150 ${h * -1 - 15})`)
        }
      } 
      if (percentage > 70) {
        if (percentage < 86 ){
          height = percentage - 70
          height = 30 - height
        } else {
          height = percentage - 85
          height = 15 + height
        }
        if (height < 20){
          height = 20
        } else {
          ball.setAttribute('transform',`translate(0 ${height - 15})`)
        }
        ball.setAttribute('height',height) 
      }
      if (swich){
        if(h < 0){
          u = -51
          t = 0 
          g = 23
          swich = false
        }       
      } 
      if (swich == false) {
        if(h > 0){
          u = 51
          percentage = 0
          if (square){
            square = false
          } else {
            square = true
          }
          t = 0           
          g = 9.8 * -1
          swich = true
        }
      }
      setTimeout(yourFunction, 10);
  }
yourFunction()
// $(window).on("load", load);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}