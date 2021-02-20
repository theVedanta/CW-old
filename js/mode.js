// HAM 
let ham = document.querySelector(".ham");
let side = document.querySelector(".side");
ham.addEventListener("click", e => {
  ham.classList.toggle("hamActive");
  side.classList.toggle("sideActive");
});

// PARALLAX
let scenes = document.querySelectorAll(".transparent");

for (let scene of scenes) {
  let parallax = new Parallax(scene);
  parallax.invert(false, false);
  parallax.scalar(8, 15);
};

// ALL BTNS
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "all 0.2s";
  });
};

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
  };
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

// AOS
AOS.init({
  delay: 350,
  duration: 400,
  once: true
});

// LOADING
let loader = document.querySelector(".loader");
let body = document.body;
let shapes = document.querySelectorAll(".transparent img");

let loaded = () => {
  loader.classList.add("loaded");
  body.classList.remove("loading");
};
let shapeLoad = () => {
  for (let shape of shapes) {
    shape.style.opacity = "1";
    shape.style.transform = "translate(0)";
  };
};
let heroStuff = () => {
  let p = document.querySelector(".hero h3");
  let b = document.querySelector(".hero .btn");
  let nav = document.querySelector("nav");

  nav.style.transform = "none";
  p.classList.add("upAOS");
  b.classList.add("upAOS");
};

let load = () => {
  setTimeout(loaded, 1000);
  setTimeout(shapeLoad, 1400);
  setTimeout(heroStuff, 1400);
};

$(window).on("load", load);
