const list = document.getElementById("list");
const listDiv = document.querySelector(".list-div");
const input = document.getElementById("input");
const form = document.getElementById("form");
const total = document.getElementById("total");
const completed = document.getElementById("completed");

const warning = document.createElement("p");

function checkListLength() {
    if (list.childElementCount === 0) {
        warning.textContent = "No tasks yet. Add one above!"
        warning.classList.add("warning");
        listDiv.appendChild(warning);
    } else {
        warning.remove();
    }
}

checkListLength();

let completedCount = 0;
let totalCount = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = document.createElement("li");
    task.innerHTML = `${input.value}&nbsp;`;
    task.classList.add("task");

    const done = document.createElement("span");
    done.innerHTML = `<i class="fa-regular fa-calendar-check"></i>&nbsp;`;
    done.className = "done";

    const remove = document.createElement("span");
    remove.innerHTML = `<i class="fa-regular fa-calendar-xmark"></i>`;
    remove.className = "remove"

    task.appendChild(done);
    task.appendChild(remove);
    list.appendChild(task);


    totalCount++;
    total.innerHTML = totalCount;

    input.value = "";

    checkListLength();
})


list.addEventListener("click", (e) => {
    const task = e.target.closest(".task");
    const done = e.target.closest(".done");
    const remove = e.target.closest(".remove");

    if (done) {
        task.remove();

        totalCount--;
        total.innerHTML = totalCount;
        completedCount++;
        completed.innerHTML = completedCount;

    }

    if (remove) {
        task.remove();

        totalCount--;
        total.innerHTML = totalCount;
    }

    checkListLength();
})
