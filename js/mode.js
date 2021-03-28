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
  setTimeout(loaded, 1400);
  setTimeout(inital, 1400);
  setTimeout(heroStuff, 1400);
  setTimeout(theTrans, 1402);
};

$(window).on("load", load);
