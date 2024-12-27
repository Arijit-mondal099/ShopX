import { removeProduct } from "./removeProduct.js";

// some problem occurred (61, 62) line so we put price & quantity manually 
// import products from "../productsApi/products.json";

import { incrimentDecrement } from "./incrimentDecrement.js";
import { showAllPriceSummary } from "./showAllPriceSummary.js";

const cardProductsContainer = document.querySelector(".cards");
const productsCardContainer = document.querySelector(".productsCardContainer");

export function showAddToCardProducts(cardProducts) {
  cardProductsContainer.innerHTML = "";
  if (cardProducts.length > 0) {
    cardProducts.forEach((product) => {
      const {
        category,
        currProductImg,
        itemId,
        productName,
        quantity,
        totalPrise,
      } = product;
      
      // clone card from card template
      const productCardClone = document.importNode(
        productsCardContainer.content,
        true
      );

      // ../public/products/mobile.png
      // console.log(currProductImg)
      const img = currProductImg.split(".com")[1];

      // add unic id to all
      productCardClone
        .querySelector("#cardVal")
        .setAttribute("id", `card${itemId}`);

      // show all data
      productCardClone.querySelector(".tag").textContent = category;
      productCardClone.querySelector(".productImg").src = img;
      productCardClone.querySelector(".productName").textContent = productName;
      productCardClone.querySelector(
        ".currMoney"
      ).textContent = `₹${totalPrise.toFixed(2)}`;
      productCardClone.querySelector(".display").textContent = quantity;

      // event to remove product from card
      productCardClone
        .querySelector(".remove")
        .addEventListener("click", (event) => {
          event.preventDefault();
          removeProduct(itemId);
        });

      // find current product stock
      // const currProduct = products.find((ele) => ele.id === itemId);
      // const stock = currProduct.stock;
      // const price = currProduct.price1;
      
      const stock = 100;
      const price = 100;

      // event to add and sub products
      productCardClone
        .querySelector(".box")
        .addEventListener("click", (event) => {
          incrimentDecrement(event, itemId, stock, price);
        });

      // show all price
      showAllPriceSummary();

      // append card into container
      cardProductsContainer.appendChild(productCardClone);
    });
  }
}
