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

try {
  // show products----------------------------------
  fetch("../productsApi/products.json")
    .then((response) => response.json())
    .then((data) => showProductsCard(data))
    .catch((error) => console.error("Error loading JSON!"));

  // display total card products--------------------
  displayTotalCardProducts();
} catch ( error ) {
  console.log("Internal server error!");
}
