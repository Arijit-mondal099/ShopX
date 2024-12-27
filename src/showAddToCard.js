import { getCardProductsDB } from "./getCardProducts";
import { showAddToCardProducts } from "./showAddToCardProducts";
import { displayTotalCardProducts } from "./updateCard";

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