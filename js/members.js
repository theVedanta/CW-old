let search = document.querySelector("#searchBar");
let cards = document.querySelectorAll(".tS");

let titles = [];
for (let card of cards) {
    let h2 = card.children[1].textContent.toLowerCase();
    let h3 = card.children[2].textContent.toLowerCase();
    titles.push(h2);
    titles.push(h3)
};

search.addEventListener("keyup", e => {
    let usrInp = search.value.trim();
    let matches = getMatches(usrInp);
    if (usrInp == "") {
        for (let card of cards) {
            card.style.display = "flex";
        };
    } else {
        for (let card of cards) {
            card.style.display = "none";
        };
    };
    for (let match of matches) {
        for (let title of titles) {
            if (match == title) {
                for (let card of cards) {
                    if (card.children[1].textContent.toLowerCase() == title) {
                        card.style.display = "flex";
                    } else if (card.children[2].textContent.toLowerCase() == title) {
                        card.style.display = "flex";
                    };
                };
            };
        };
    };
});

function getMatches(input) {
    let matchList = [];

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].toLowerCase().indexOf(input.toLowerCase()) != -1) {
            matchList.push(titles[i]);
        };
    };

    return matchList;
};
