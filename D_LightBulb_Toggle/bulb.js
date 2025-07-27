const btn = document.querySelector("#btn");
const round = document.querySelector("#round");
const statusOfBulb = document.querySelector("#status");

let turnOff = true;
let turnOn = false;

btn.addEventListener("click", () => {
    if (turnOff) {
        round.classList.add("change");
        btn.textContent = `Turn off`;
        statusOfBulb.textContent = 'status : on';

        turnOff = false;
        turnOn = true;
        
    } else if (turnOn) {
        round.classList.remove("change");
        btn.textContent = `Turn on`;
        statusOfBulb.textContent = 'Status : off';

        turnOff = true;
        turnOn = false;
    }

})