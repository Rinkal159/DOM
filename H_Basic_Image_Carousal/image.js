const btn = document.querySelector(".btn");
const parentImages = document.querySelector(".images");

let stop = true;
btn.addEventListener("click", () => {
    console.log(stop);
    
    if (stop) {
        parentImages.classList.remove("stop");
        btn.textContent = "Stop autoplay"
    } else {
        parentImages.classList.add("stop");
        btn.textContent = "Start autoplay"

    }

    stop = !stop;

})