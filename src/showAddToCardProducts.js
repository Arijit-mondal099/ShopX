import { removeProduct } from "./removeProduct.js";
import { incrimentDecrement } from "./incrimentDecrement.js";
import { showAllPriceSummary } from "./showAllPriceSummary.js";


// fetch card template and card container
const cardProductsContainer = document.querySelector(".cards");
const productsCardContainer = document.querySelector(".productsCardContainer");

export function showAddToCardProducts(cardProducts) {
  cardProductsContainer.innerHTML = "";
  if (cardProducts.length > 0) {
    cardProducts.forEach((product) => {
      // destructer data from current product
      const {category, currMoney, currProductImg, currStock, itemId, productName, quantity, totalPrise} = product;
      
      // clone card from card template
      const productCardClone = document.importNode(productsCardContainer.content, true);

      // /public/products/mobile.png
      const img = currProductImg.split(".com")[1];

      // add unic id to all
      productCardClone.querySelector("#cardVal").setAttribute("id", `card${itemId}`);

      // show all data
      productCardClone.querySelector(".tag").textContent = category;
      productCardClone.querySelector(".productImg").src = img;
      productCardClone.querySelector(".productName").textContent = productName;
      productCardClone.querySelector(".currMoney").textContent = `₹${totalPrise.toFixed(2)}`;
      productCardClone.querySelector(".display").textContent = quantity;

      // event to remove product from card
      productCardClone.querySelector(".remove")
        .addEventListener("click", (event) => {
          event.preventDefault();
          removeProduct(itemId);
        });

      // event to add and sub products
      productCardClone.querySelector(".box")
        .addEventListener("click", (event) => {
          incrimentDecrement(event, itemId, currStock, currMoney);
        });

      // show all price
      showAllPriceSummary();

      // append card into container
      cardProductsContainer.appendChild(productCardClone);
    });




    
  }
}
