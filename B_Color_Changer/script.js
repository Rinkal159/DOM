// with target

const box = document.querySelectorAll(".div");

document.querySelector(".box").addEventListener("click", function (event) {
    let color = event.target.id;

    document.body.style.backgroundColor = color;

    box.forEach((b) => {
        b.style.backgroundColor = "#fff";
    });

    event.target.style.backgroundColor = color;
})
