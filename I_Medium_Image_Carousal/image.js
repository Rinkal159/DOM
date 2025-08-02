const btn = document.querySelector(".btn");
const images = document.querySelector(".images");
const next = document.querySelector(".next");
const btnCont = document.querySelector(".btn-container");
const span = document.getElementById("span");

let start = false;

let intervalTime = 6000;

let sec = 5;
let img = 0;

let updateImg;
let updateSec;

function update() {

    // seconds counter
    const counterSec = function () {
        sec--;

        if (sec < 0) {
            sec = 5;
        }

        next.textContent = sec;
    }

    updateSec = setInterval(counterSec, 1000);

    // image slider

    const counterImg = function () {
        intervalTime = 6000;

        img++;

        if (img == 5) {
            img = 0;
        }

        images.style.transform = `translateX(calc(-70vw*${img}))`;
    };

    updateImg = setTimeout(() => {
        counterImg();
        updateImg = setInterval(counterImg, 6000);
    }, intervalTime);

}

btn.addEventListener("click", () => {
    start = !start;

    if (start) {
        span.classList.remove("hide");
        btn.textContent = "Stop Autoplay";

        update();

    } else {
        clearInterval(updateImg);
        clearInterval(updateSec);

        intervalTime = (sec + 1) * 1000;

        span.classList.add("hide");
        btn.textContent = "Start Autoplay";
    }


})