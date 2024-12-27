// import "./style.css";
import products from "../productsApi/products.json";
import { showProductsCard } from "./productsCard.js";
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

// show products----------------------------------
try {
  showProductsCard(products);
} catch (error) {
  console.log("Internal server error!");
}

// display total card products--------------------
displayTotalCardProducts();
