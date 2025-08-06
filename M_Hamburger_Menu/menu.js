const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const close = document.querySelector(".fa-xmark");

const home = document.getElementById("home");
const about = document.getElementById("about");
const service = document.getElementById("service");
const contact = document.getElementById("contact");

menuIcon.addEventListener("click", (e) => {
    menu.classList.remove("hide");
    menuIcon.classList.add("none");
})

close.addEventListener("click", () => {
    menu.classList.add("hide");
    menuIcon.classList.remove("none");
})

function alertMsg(item, msg) {
    item.addEventListener("click", () => {
        alert(msg);
    })
}

alertMsg(home, "Home!");
alertMsg(about, "About!");
alertMsg(service, "Service!");
alertMsg(contact, "Contact!");
