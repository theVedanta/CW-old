// const emailTxt = document.querySelector("#email");
// const copyBtn = document.querySelector("#copyBtn");

// copyBtn.addEventListener(`click`, () => {
//   emailTxt.select();
//   emailTxt.setSelectionRange(0, 99999);
//   document.execCommand("copy");
//   alert("Copied the text: " + emailTxt.value);
// });

const divEmail = document.getElementById("divEmail");
const copyBtn2 = document.getElementById("copyBtn2");

function copy() {
    const range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(divEmail);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
};

copyBtn2.addEventListener("click", copy)


