const titles = document.querySelectorAll(".title");
const descs = document.querySelectorAll(".desc");
const icons = document.querySelectorAll("i");

function checkDesc(titleId, title) {

    descs.forEach((desc) => {

        // to close other sections
        if (desc.dataset.id != titleId) {
            icons.forEach((i) => {
                if (i.classList.contains("rotate") && i !== title.querySelector("i")) {
                    i.classList.remove("rotate");
                }
            })
            if (desc.classList.contains("show")) {
                desc.classList.remove("show");
            }
        }

        if (desc.dataset.id == titleId) {
            desc.classList.toggle("show");
            title.classList.toggle("title-radius");
        }
    })
}

titles.forEach((title) => {
    title.addEventListener("click", (e) => {
        title.querySelector("i").classList.toggle("rotate")
        checkDesc(e.target.dataset.id, e.target)
    })
})