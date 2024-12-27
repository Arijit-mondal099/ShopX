import { getCardProductsDB } from "./getCardProducts.js";
import { showAddToCardProducts } from "./showAddToCardProducts.js";
import { displayTotalCardProducts } from "./updateCard.js";

// responsive hambarger---------------------------
const crose = document.querySelector(".crose");
const hambar = document.querySelector(".hambar");
const hamSectionContainer = document.querySelector(".hamSectionContainer");

hambar.addEventListener("click", (e) => {
  e.preventDefault();
  hamSectionContainer.style.right = 0;
});
crose.addEventListener("click", (e) => {
  e.preventDefault();
  hamSectionContainer.style.right = -150 + "%";
});

// show cards
const products = getCardProductsDB();
showAddToCardProducts(products);
