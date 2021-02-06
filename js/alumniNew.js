  
const paragraph = document.querySelectorAll(".userP");

for (let p of paragraph) {
    let card = p.parentElement
    // card.addEventListener("mouseleave", () => {
    //     // card.chicdNodes.style.display = 'none';
    //     // card.children[1].style.display = 'none'
    //     card.children[1].classList.add('hide');
    //     let socials = card.children[0].children[1].children[2];
    //     socials.classList.remove('hide');
    // });

    // card.addEventListener("mouseover", () => {
    //     card.children[1].classList.remove('hide');
    //     let socials = card.children[0].children[1].children[2];
    //     socials.classList.add('hide')
    // })

    card.addEventListener("click", () => {
        // card.chicdNodes.style.display = 'none';
        // card.children[1].style.display = 'none'
        card.children[1].classList.toggle('hide');
        let socials = card.children[0].children[1].children[2];
        socials.classList.toggle('hide');
    });

    // console.log(card)
}