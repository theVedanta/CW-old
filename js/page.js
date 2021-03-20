let pageNums = document.querySelectorAll(".nums button");
if (pageNums.length > 10) {
  for (let pageNum of pageNums) {
    pageNum.style.display = "none";
  }
  let one = document.querySelector(".nums button");
  one.style.display = "inline-block";
  one.nextElementSibling.style.display = "inline-block";
  one.nextElementSibling.nextElementSibling.style.display = "inline-block";
  one.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
    "inline-block";
  document.querySelector(".nums").lastElementChild.style.display =
    "inline-block";

  let span = document.createElement("SPAN");
  span.innerHTML = "...";
  document
    .querySelector(".nums")
    .insertBefore(span, document.querySelector(".nums").lastElementChild);
}
