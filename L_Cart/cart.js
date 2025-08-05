const btns = document.querySelectorAll(".btn");
const items = document.querySelector(".cart-items");
const allCartItemsDiv = document.querySelectorAll(".cart-item");
const btnCont = document.querySelector(".btn-cont");
const pluses = document.querySelectorAll(".fa-square-plus");
const minuses = document.querySelectorAll(".fa-square-minus");
const totalEle = document.querySelector(".total");
const total = document.getElementById("total");
const removes = document.querySelectorAll(".remove");

const itemCount = {
    TShirt: 1,
    Shoe: 1,
    Purse: 1,
    Dress: 1
}
const itemPrice = {
    TShirt: 19.99,
    Shoe: 49.99,
    Purse: 79.99,
    Dress: 199.99
}

let totalCost = 0;

//* check if there is a duplicate cart item present
function checkDuplicate(itemName) {
    items.childNodes.forEach((i) => {
        if (i.children) {
            if (i.children[0].textContent == itemName) {
                return true;
            }
        }
    })
    return false;
}

//* div for cart items
function createDivForCartItems() {
    const div = document.createElement("div");
    div.className = "divCartGroup";
    items.appendChild(div);

    return div;
}

//* cart item name
function createCartItemNames(div, itemName) {
    const p = document.createElement("p");
    p.textContent = itemName;
    p.className = "cart-item";
    div.appendChild(p);
}

//* remove div
function createRemoveDiv(div) {
    const removeDiv = document.createElement("div");
    removeDiv.className = "removeDiv";
    div.appendChild(removeDiv);

    return removeDiv;
}

//* count
function createCount(div, itemName) {
    const count = document.createElement("p");
    count.textContent = itemCount[itemName];
    count.dataset.id = itemName
    count.className = "removeCount";
    div.appendChild(count);
}


//* price
function createPrice(div, priceOfItem, itemName) {
    const span = document.createElement("span");
    span.textContent = "$"
    const price = document.createElement("span");
    price.dataset.id = itemName;
    price.textContent = priceOfItem;
    span.className = "price";
    span.appendChild(price);
    div.appendChild(span);
}

//* remove button
function createCartRemoveBtn(div) {
    const button = document.createElement("button");
    button.textContent = "Remove";
    button.className = "remove";
    div.appendChild(button);
}

//* btn click logic 
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        const itemName = btn.parentNode.parentNode.children[0].children[0].dataset.id;
        const btnContainer = btn.parentNode;
        const cartStat = btnContainer.children[1];
        const price = btn.parentNode.parentNode.children[0].children[1].children[0].textContent;

        let isDuplicate = false;
        isDuplicate = checkDuplicate(itemName);

        if (!isDuplicate) {
            cartStat.children[1].textContent = itemCount[itemName];

            btnContainer.classList.add("btnChange");
            cartStat.classList.remove("hide");
            btn.classList.add("hide");

            //* for cart
            const div = createDivForCartItems(); //the most outer div - .divCartGroup
            createCartItemNames(div, itemName); //cart-item name - .cart-item
            const removeDiv = createRemoveDiv(div); //remove div(count, price and remove btn) - .removeDiv
            createCount(removeDiv, itemName); //count - .removeCount
            createPrice(removeDiv, price, itemName); //price - .price
            totalCost += Number(price);
            totalEle.classList.remove("hide")
            total.textContent = totalCost.toFixed(2);
            createCartRemoveBtn(removeDiv); //remove button - .remove

        }
    })
})

//* updating number of products
function changeCart(pressedItem, boxCount, count, price) {
    const removeCount = document.querySelectorAll(`[data-id=${pressedItem}]`);

    boxCount.textContent = count; //count - box
    removeCount[2].textContent = count; //count - cart
    removeCount[3].textContent = price; //price - cart
}

//* plus the product
pluses.forEach((plus) => {
    plus.addEventListener("click", (e) => {
        const pressedItem = e.currentTarget.parentNode.parentNode.parentNode.parentNode.children[0].children[0].dataset.id;
        const countCart = e.currentTarget.parentNode.parentNode.children[1];

        itemCount[pressedItem]++;
        const currPrice = itemPrice[pressedItem] * itemCount[pressedItem];
        totalCost += itemPrice[pressedItem];
        total.textContent = totalCost.toFixed(2);


        changeCart(pressedItem, countCart, itemCount[pressedItem], currPrice.toFixed(2))
    })
})

//* minus the product
minuses.forEach((minus) => {
    minus.addEventListener("click", (e) => {
        const pressedItem = e.currentTarget.parentNode.parentNode.parentNode.parentNode.children[0].children[0].dataset.id;
        const countCart = e.currentTarget.parentNode.parentNode.children[1];

        if (itemCount[pressedItem] > 1) {
            itemCount[pressedItem]--;
            totalCost -= itemPrice[pressedItem];
            total.textContent = totalCost.toFixed(2);
        }
        const currPrice = itemPrice[pressedItem] * itemCount[pressedItem];

        changeCart(pressedItem, countCart, itemCount[pressedItem], currPrice.toFixed(2))
    })
})

//* remove logic
items.addEventListener("click", (e) => {
    if (e.target.className === "remove") {
        const currEle = e.target.closest(".divCartGroup");
        const currName = currEle.children[0].textContent;

        const allIDs = document.querySelectorAll(`[data-id=${currName}]`);
        const btn = allIDs[1];

        btn.parentNode.classList.remove("btnChange");
        btn.parentNode.children[1].classList.add("hide");
        btn.classList.remove("hide");

        totalCost -= Number(currEle.children[1].children[1].children[0].textContent);
        total.textContent = totalCost.toFixed(2);

        itemCount[currName] = 1;
        btn.parentNode.children[1].children[1].textContent = itemCount[currName];

        currEle.remove();
    }
})