function showOutput() { 
    const input = document.querySelector("#search").value;
    const ulFruit = document.querySelector("#fruits")
    const fruits = document.querySelectorAll("#fruits li");

    fruits.forEach((fruit) => {
        if (!input) {
            ulFruit.classList.add("hide");
        } else {
            ulFruit.classList.remove("hide");

            if (fruit.innerText.toLowerCase().startsWith(input.toLowerCase())) {
                fruit.classList.remove("li");
            } else {
                fruit.classList.add("li")
            }
        }
    })

}