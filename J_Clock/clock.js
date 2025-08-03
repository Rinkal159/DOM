const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");
const time = document.getElementById("time");
const dateToday = document.getElementById("date");

dateToday.textContent = new Date().toDateString();

// time
let date = new Date();
let hourTime = String(date.getHours()).padStart(2, '0');
let minTime = String(date.getMinutes()).padStart(2, '0');
let secTime = String(date.getSeconds()).padStart(2, '0');

setInterval(() => {
    let timeNow = new Date().toLocaleTimeString();
    time.textContent = timeNow;
}, 1000);

// rotate the hands
hour.style.transform = `rotate(calc(6*${hourTime}deg))`;
min.style.transform = `rotate(calc(6*${minTime}deg))`;
sec.style.transform = `rotate(calc(6*${secTime}deg))`;

// sec
let secCount = secTime;
let countsSec = secTime;

let minCount = minTime;

let hourCount = hourTime;

setInterval(() => {
    secCount++;
    countsSec++;

    //min
    console.log(minCount);

    if (countsSec == 60) {
        countsSec = 0;
        minCount++;

        min.style.transform = `rotate(calc(6*${minCount}deg))`;
    }

    if (countsSec == 60 && minCount == 60) {
        countsSec = 0;
        minCount = 0;
        hourCount++;

        hour.style.transform = `rotate(calc(6*${hourCount}deg))`;
    }

    sec.style.transform = `rotate(calc(6*${secCount}deg))`;

}, 1000);




