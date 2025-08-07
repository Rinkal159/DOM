const cardCont = document.getElementById("card-container");
const btn = document.querySelector(".btn");
const move = document.getElementById("moves");
const time = document.getElementById("time");

const cardEmojis = ["👽", "💀", "🤖", "😈", "👾", "🎃", "🩻", "🤡"];

function createCrads(content) {
    const card = document.createElement("div");
    card.className = "card";

    const hide = document.createElement("div");
    hide.textContent = "?"
    hide.className = "hide";

    const show = document.createElement("div");
    show.textContent = content;
    show.className = "show";

    card.appendChild(hide);
    card.appendChild(show);

    cardCont.appendChild(card);
}

function allEmojisCreation() {
    return [...cardEmojis, ...cardEmojis];
}

function creatGame() {
    const allEmojis = allEmojisCreation();

    for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * allEmojis.length);
        createCrads(allEmojis[random]);
        allEmojis.splice(random, 1);
    }
}

creatGame();

let flipped = [];
let matchedCount = 0;
let moves = 0;
let secCount = 0;
let minCount = 0;
let gameTimer;

function incrementMoves() {
    moves++;
    move.textContent = moves;
}

function incrementTime() {
    clearInterval(gameTimer);
    gameTimer = setInterval(() => {
        if (secCount >= 60) {
            minCount++;
            secCount = 0;
        }
        time.textContent = `${String(minCount).padStart(2, "0")}:${String(secCount).padStart(2, "0")}`
        secCount++;
    }, 1000);
}

//* when card clicks
cardCont.addEventListener("click", (e) => {
    const card = e.target.closest(".card");

    if (!moves || !flipped.length) {
        incrementMoves();
    }

    if (moves === 1) {
        incrementTime();
    }

    if (card && card !== flipped[0] && card !== flipped[1] && !card.classList.contains("match")) {

        flipped.push(card);
        card.classList.add("rotate");

        if (flipped.length == 2) {
            checkMatch();
        }

        if (flipped.length == 3) {
            incrementMoves();

            const ismatched = checkMatch();
            if (!ismatched) {
                rotateFlip(card);
            }
        }
    }
})

function checkMatch() {
    const c1 = flipped[0];
    const c2 = flipped[1];

    if (c1.children[1].textContent === c2.children[1].textContent) {
        c1.classList.add("match");
        c2.classList.add("match");
        flipped = [];
        matchedCount++;

        if (matchedCount === 8) {
            setTimeout(() => {
                alert(`You won in ${moves} moves and ${minCount}:${--secCount} time.`)
            }, 300);

            setTimeout(() => {
                reset();
            }, 500);

        }
        return true;
    }
    return false;
}

function rotateFlip(card) {
    const c1 = flipped[0];
    const c2 = flipped[1];

    c1.classList.remove("rotate");
    c2.classList.remove("rotate");

    flipped = [card];
}

function reset() {
    clearInterval(gameTimer);

    moves = 0;
    move.textContent = 0;

    matchedCount = 0;

    secCount = 0;
    minCount = 0;
    time.textContent = `${String(minCount).padStart(2, "0")}:${String(secCount).padStart(2, "0")}`;

    flipped = [];

    cardCont.innerHTML = "";
    creatGame();
}

btn.addEventListener("click", reset);