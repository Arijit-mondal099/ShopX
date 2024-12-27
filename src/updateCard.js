import { getCardProductsDB } from "./getCardProducts.js";

export function displayTotalCardProducts() {
    const length = getCardProductsDB().length;
    const addToCard = document.querySelectorAll(".addToCard");
    addToCard.forEach( ele => ele.querySelector("p").textContent = length );
}
