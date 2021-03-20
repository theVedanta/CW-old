const readMoreBtns = document.querySelectorAll(".read-more");
const heightDefault = "9vh";

for (let readMore of readMoreBtns) {
  readMore.addEventListener("click", () => {
    let content = readMore.parentElement;
    const readMoreDiv = content.childNodes[3];
    console.log("click works");
    content.childNodes[1].classList.toggle("heightFull");
    console.log(readMore.childNodes);
    readMoreDiv.childNodes[3].classList.toggle("hide");
    readMoreDiv.childNodes[1].classList.toggle("hide");
  });
}

// SORT
let sorter = document.querySelector(".sort");
let opts = document.querySelector(".options");

sorter.addEventListener("click", () => {
  sorter.classList.toggle("sortActive");
  opts.classList.toggle("optsActive");
});

// const screenH = screen.height - 180

// const arrow = document.querySelector('.arrow-wrap')
// arrow.style.top = screenH
