const copyBtns = document.querySelectorAll(".mailBtn");

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener("click", () => {
        const range = document.createRange();
        window.getSelection().removeAllRanges();
        const card = copyBtn.parentElement;
        const divEmail = card.querySelector(".mail");
        range.selectNode(divEmail);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    });
};
