const inputs = document.querySelectorAll(".input");

const profileName = document.getElementById("previewName");
const jobTitle = document.getElementById("previewJobTitle");
const age = document.getElementById("previewAge");
const bio = document.getElementById("previewBio");



function inputDisplay(input, preview) {
    preview.textContent = input;
}

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        const id = e.target.id;
        let value = e.target.value;

        if (id === "name") {
            inputDisplay(value, profileName);
        } else if (id === "jobTitle") {
            inputDisplay(value, jobTitle)
        } else if (id === "age") {
            inputDisplay(value, age);
        } else if (id === "bio") {
            inputDisplay(value, bio)
        }
    })
})
