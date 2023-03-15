function createProducts() {
    let container = document.querySelector(".shopContainer");
    for(let i = 0; i < 8; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let productImage = document.createElement("img");
        card.appendChild(productImage);

        let productName = document.createElement("h4");
        card.appendChild(productName);

        let productPrice = document.createElement("p");
        card.appendChild(productPrice);

        container.appendChild(card);
    }
}

export {createProducts};